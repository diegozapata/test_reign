import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { PersistenceUtilService } from '../../services/persistence.service';

@Component({
  selector: 'app-switch-publications',
  templateUrl: './switch-publications.component.html',
  styleUrls: ['./switch-publications.component.css'],
})
export class SwitchPublicationsComponent implements OnInit {
  constructor(
    private route: Router,
    private persistenceUtilService: PersistenceUtilService
  ) {}

  @Output() controllerList = new EventEmitter<{
    noValido: boolean;
    tabAct: string;
  }>();

  tabAct = 'all';

  ngOnInit(): void {
    this.persistenceUtilService.saveLocal('nameFilter', 'all');
    this.persistenceUtilService.removeLocal('nameFilter');
  }

  // Activa la pestaña seleccionada y hace el switcheo entre vistas (all/fav).
  tabActive(tabVal: any): void {
    this.tabAct = tabVal;
    switch (tabVal) {
      case 'all':
        console.log('all');
        break;
      case 'fav':
        console.log('fav');
        break;
    }
    this.controllerList.emit({
      noValido: false,
      tabAct: tabVal,
    });
  }
}
