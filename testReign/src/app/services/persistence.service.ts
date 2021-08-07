import { Injectable } from '@angular/core';
import { StorageType, PersistenceService } from 'angular-persistence';

@Injectable({
  providedIn: 'root',
})
export class PersistenceUtilService {
  constructor(private persistenceService: PersistenceService) {}

  saveSession(key: string, value: any): void {
    this.persistenceService.set(key, value, {
      type: StorageType.SESSION,
    });
  }

  getSession(key: string): void {
    return this.persistenceService.get(key, StorageType.SESSION);
  }

  removeSession(key: string): void {
    return this.persistenceService.remove(key, StorageType.SESSION);
  }

  removeAll(): void {
    this.persistenceService.removeAll(StorageType.SESSION);
  }

  saveLocal(key: string, value: any): void {
    this.persistenceService.set(key, value, {
      type: StorageType.LOCAL,
    });
  }

  // tslint:disable-next-line:typedef
  getLocal(key: string) {
    return this.persistenceService.get(key, StorageType.LOCAL);
  }
  // tslint:disable-next-line:typedef
  removeLocal(key: string) {
    return this.persistenceService.remove(key, StorageType.LOCAL);
  }

  limpiarOrdenesYFormularios(): void {
    localStorage.removeItem('ANGULAR_PERSISTENCE_STORAGE::nameFilter');
    localStorage.removeItem('ANGULAR_PERSISTENCE_STORAGE::tabAct');
  }
}
