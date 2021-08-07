import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { PersistenceUtilService } from '../../services/persistence.service';

@Component({
  selector: 'app-switch-publications',
  templateUrl: './switch-publications.component.html',
  styleUrls: ['./switch-publications.component.css'],
})
export class SwitchPublicationsComponent implements OnInit {
  tabAct!: string;
  constructor(
    private route: Router,
    private persistenceUtilService: PersistenceUtilService
  ) {}

  @Output() controllerList = new EventEmitter<{
    tabAct: string;
  }>();

  ngOnInit(): void {
    this.reLoad();
    this.tabActive(this.tabAct);
  }
  reLoad(): void {
    const persistence = this.persistenceUtilService.getLocal('tabAct');
    persistence ? (this.tabAct = persistence) : (this.tabAct = 'all');
  }

  // Activa la pestaña seleccionada y hace el switcheo entre vistas (all/fav).
  tabActive(tabVal: any): void {
    this.tabAct = tabVal;
    this.persistenceUtilService.saveLocal('tabAct', this.tabAct);
    this.controllerList.emit({
      tabAct: tabVal,
    });
  }
}
