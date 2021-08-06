import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-news',
  templateUrl: './app-news.component.html',
  styleUrls: ['./app-news.component.css'],
})
export class AppNewsComponent implements OnInit {
  flagFilter = true;
  constructor() {}

  ngOnInit(): void {}

  controllerList($event: { noValido: any; tabAct: any }): void {
    $event.tabAct === 'fav'
      ? (this.flagFilter = false)
      : (this.flagFilter = true);
  }
}
