import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { LoggerFactory } from '../../utils/logger-factory.service';
import { News } from '../../models/news.model';
import { PersistenceUtilService } from '../../services/persistence.service';
import * as moment from 'moment';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.css'],
})
export class ListNewsComponent implements OnInit, OnChanges {
  @Input() flagFilter!: boolean;
  @Input() selectLanguage!: string;
  @Input() page!: number;
  @Input() tabAct!: string;
  dataNews!: News[];
  itemsPerPage!: number;
  currentPage: any;
  totalItems: any;
  aux!: number;
  constructor(
    private newsService: NewsService,
    private loggerFactory: LoggerFactory,
    private persistenceUtilService: PersistenceUtilService
  ) {}

  ngOnInit(): void {
    this.page = 0;
    // console.log(this.flagFilter);
    // console.log(this.selectLanguage);
    // this.getOrdenes(this.selectLanguage, this.page);
    this.reLoad();
  }
  ngOnChanges(): void {
    this.getOrdenes(this.selectLanguage, this.page);
  }

  getOrdenes(selectLanguage: string, page: number): void {
    this.dataNews = [];
    switch (this.tabAct) {
      case 'all':
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
                (dataNews) =>
                  dataNews.author !== null &&
                  dataNews.created_at !== null &&
                  dataNews.story_title !== null &&
                  dataNews.story_url !== null
              );
              // console.log(this.dataNews);
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
        this.selectLanguage = selectLanguage;
        this.dataNews.push(
          {
            author: 'mmm',
            created_at: 'aaaa',
            story_title: 'prueba',
            story_url: 'dfsfsad',
          },
          {
            author: 'mmm',
            created_at: 'aaaa',
            story_title: 'prueba',
            story_url: 'dfsfsad',
          }
        );
        this.itemsPerPage = 20;
        this.currentPage = 1;
        this.totalItems = this.dataNews.length;
        break;
    }
  }
  pageChanged($event: any): void {
    this.page = $event;
    // console.log($event);
    this.aux = $event - 1;
    // console.log(this.aux);
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
  }
  executeClick(url: string): void {
    if (url) {
      const link = document.createElement('a');
      link.href = url;
      link.target = '_blank';
      link.click();
    }
  }
}
