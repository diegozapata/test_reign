import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

/**
 * Servicio de control de log.
 */
@Injectable({
  providedIn: 'root',
})
export class LoggerFactory {
  /**
   * Nivel de log definido desde archivo enviroment.
   */
  private level!: number;

  /**
   * Flag si se encuentra activa la impresion de Log.
   */
  private active: boolean;

  /**
   * Constructor obtiene desde el archivo enviroment
   *  el estado de activacion y el nivel a imprimir.
   */
  constructor() {
    this.active = environment.log.active === 'true';
    switch (environment.log.level) {
      case 'TRACE':
        this.level = 4;
        break;
      case 'DEBUG':
        this.level = 3;
        break;
      case 'INFO':
        this.level = 2;
        break;
      case 'WARNING':
        this.level = 1;
        break;
      case 'ERROR':
        this.level = 0;
        break;
    }
  }

  /**
   * Desplegar un mensaje de nivel TRACE en consola.
   * @param msg Mensaje a desplegar
   * @param object [Optional] Object to print.
   */
  trace(msg: string, object: any = ''): void {
    if (this.active && this.level >= 0) {
      console.log(this.generateMessage(msg), object);
    }
  }

  /**
   * Despliega un mensaje de nivel DEBUD en consola.
   * @param msg Mensaje a desplegar
   * @param object [Optional] Object to print.
   */
  debug(msg: string, object: any = ''): void {
    if (this.active && this.level >= 1) {
      console.log(this.generateMessage(msg), object);
    }
  }

  /**
   * Despliega un mensaje de nivel INFO en consola.
   * @param msg Mensaje a desplegar.
   * @param object [Optional] Object to print.
   */
  info(msg: string, object: any = ''): void {
    if (this.active && this.level >= 2) {
      console.log(this.generateMessage(msg), object);
    }
  }

  /**
   * Despliega un mensaje de nivel WARNING en consola.
   * @param msg Mensaje a desplegar.
   * @param object [Optional] Object to print.
   */
  warning(msg: string, object: any = ''): void {
    if (this.active && this.level >= 3) {
      console.warn(this.generateMessage(msg), object);
    }
  }

  /**
   * Despliega un mensaje de nivel ERROR en consola.
   * @param msg Mensaje a desplegar.
   * @param object [Optional] Object to print.
   */
  error(msg: string, object: any = ''): void {
    if (this.active && this.level >= 4) {
      console.error(this.generateMessage(msg), object);
    }
  }

  /**
   * Despliega un mensaje en consola saltandose estado y nivel definido de log.
   * @param msg  mensaje a desplegar.
   * @param object [Optional] Object to print.
   */
  force(msg: string, object: any = ''): void {
    console.log(this.generateMessage(msg), object);
  }

  /**
   * Metodo que genera el string a imprimir en consola.
   * @param msg Mensaje a desplegar.
   */
  private generateMessage(msg: string): string {
    if (msg) {
      return '[' + new Date().toLocaleString() + '] ' + msg;
    } else {
      return '';
    }
  }
}
