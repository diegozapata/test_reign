import * as moment from 'moment';
import { News } from '../../models/news.model';
import { NewsService } from '../../services/news.service';
import { LoggerFactory } from '../../utils/logger-factory.service';
import { HostListener, ElementRef, Renderer2 } from '@angular/core';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { PersistenceUtilService } from '../../services/persistence.service';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.css'],
})
export class ListNewsComponent implements OnInit, OnChanges {
  @Input() page!: number;
  @Input() tabAct!: string;
  @Input() flagFilter!: boolean;
  @Input() selectLanguage!: string;

  aux!: number;
  totalItems: any;
  currentPage: any;
  numberNews!: number;
  flagHeart!: boolean;
  numberNews2!: number;
  itemsPerPage!: number;
  dataNews!: News[];
  dataNewsOne!: News[];
  dataNewsTwo!: News[];
  dataNewsPersistence!: News[];
  dataNewsPersistenceAux!: News[];

  constructor(
    private el: ElementRef,
    private renderer2: Renderer2,
    private newsService: NewsService,
    private loggerFactory: LoggerFactory,
    private persistenceUtilService: PersistenceUtilService
  ) {}

  ngOnInit(): void {
    this.initVar();
    this.reLoad();
  }
  ngOnChanges(): void {
    this.getOrdenes(this.selectLanguage, this.page);
  }
  initVar(): void {
    this.page = 0;
    this.dataNewsOne = [];
    this.dataNewsTwo = [];
    this.dataNewsPersistenceAux = [];
    this.dataNewsPersistence =
      this.persistenceUtilService.getLocal('fav') || [];
  }

  /**
   * Function call service.
   */
  getOrdenes(selectLanguage: string, page: number): void {
    this.dataNewsOne = [];
    this.dataNewsTwo = [];
    switch (this.tabAct) {
      case 'all':
        this.flagHeart = false;
        if (selectLanguage) {
          this.selectLanguage = selectLanguage;
          this.persistenceUtilService.saveLocal(
            'nameFilter',
            this.selectLanguage
          );
          this.newsService.getNews(selectLanguage, page).subscribe(
            (data) => {
              this.dataNews = data.hits;
              this.dataNews = this.dataNews.filter(
                (dataNew) =>
                  dataNew.author !== null &&
                  dataNew.created_at !== null &&
                  dataNew.story_title !== null &&
                  dataNew.story_url !== null
              );
              this.transformHour(this.dataNews);
              this.itemsPerPage = data.hitsPerPage;
              this.currentPage = this.page;
              this.totalItems = data.nbHits;
            },
            (error) => {
              this.loggerFactory.error(`[Error] - Error al solicitar news`);
            }
          );
        }
        break;
      case 'fav':
        this.flagHeart = true;
        this.selectLanguage = selectLanguage;
        if (this.dataNewsPersistence) {
          this.dataNewsPersistence =
            this.persistenceUtilService.getLocal('fav') || [];
        }
        if (this.dataNewsPersistence) {
          this.dataNewsPersistenceAux = this.dataNewsPersistence;
          this.transformHour(this.dataNewsPersistence);
          this.itemsPerPage = 20;
          this.currentPage = 1;
          this.totalItems = this.dataNewsPersistence.length;
        }
        break;
    }
  }

  /**
   * pagination event
   */
  pageChanged($event: any): void {
    this.page = $event;
    this.aux = $event - 1;
    this.getOrdenes(this.selectLanguage, this.aux);
  }

  reLoad(): void {
    const persistence = this.persistenceUtilService.getLocal('nameFilter');
    if (persistence) {
      this.getOrdenes(persistence, 0);
    }
  }

  transformHour(dataNews: News[]): void {
    const hora = new Date();
    dataNews.map((data) => {
      data.created_at = data.created_at.replace('T', ' ');
      data.created_at = data.created_at.replace('.000Z', '');
      data.numberHours = moment(hora).diff(moment(data.created_at), 'hours');
    });
    this.sliceNews(dataNews);
  }

  sliceNews(dataNews: News[]): void {
    this.numberNews = dataNews.length;
    this.numberNews2 = this.numberNews / 2;
    console.log(this.dataNewsOne);
    console.log(this.dataNewsTwo);
    if (dataNews.length > 4) {
      this.dataNewsOne = dataNews.splice(0, dataNews.length / 2);
      this.dataNewsTwo = dataNews.splice(0, dataNews.length);
    } else {
      this.dataNewsTwo = [];
      this.dataNewsOne = dataNews;
    }
  }
  executeClick(url: string): void {
    if (url) {
      const link = document.createElement('a');
      link.href = url;
      link.target = '_blank';
      link.click();
    }
  }

  @HostListener('mouseover', ['$event'])
  // tslint:disable-next-line:typedef
  public Onmouseover(event: any, id: string, id2: number) {
    if (id) {
      const part = this.el.nativeElement.querySelector('#' + id + id2);
      this.renderer2.setStyle(part, 'opacity', '0.4');
    }
  }
  @HostListener('mouseout', ['$event'])
  // tslint:disable-next-line:typedef
  public Onmouseout(event: any, id: string, id2: number) {
    if (id) {
      const part = this.el.nativeElement.querySelector('#' + id + id2);
      this.renderer2.setStyle(part, 'opacity', '1');
    }
  }

  /**
   * like button method
   */
  checkboxChanged(item: News, action: boolean): void {
    if (action) {
      if (item) {
        const result = this.dataNewsPersistence.lastIndexOf(item);
        this.dataNewsPersistence.push(item);
      }
    } else if (!action) {
      const result = this.dataNewsPersistence.lastIndexOf(item);
      if (result !== -1) {
        this.dataNewsPersistence = this.dataNewsPersistence.filter(
          (i) => i !== item
        );
      }
    }
    this.persistenceUtilService.saveLocal('fav', this.dataNewsPersistence);
    this.dataNewsPersistenceAux = { ...this.dataNewsPersistence };
  }
}
