import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-news',
  templateUrl: './app-news.component.html',
  styleUrls: ['./app-news.component.css'],
})
export class AppNewsComponent implements OnInit {
  flagFilter = true;
  selectLanguage!: string;
  tabAct!: string;
  constructor() {}

  ngOnInit(): void {
    this.tabAct = 'all';
  }
  // controller ListNewsComponent
  controllerList($event: { tabAct: any }): void {
    this.tabAct = $event.tabAct;
    $event.tabAct === 'fav'
      ? (this.flagFilter = false)
      : (this.flagFilter = true);
  }

  // controller FiltertNewsComponent
  controllerFilter($event: { selectLanguage: any }): void {
    this.selectLanguage = $event.selectLanguage;
  }
}
