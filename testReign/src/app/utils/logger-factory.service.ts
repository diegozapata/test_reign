import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

/**
 * Service control log.
 */
@Injectable({
  providedIn: 'root',
})
export class LoggerFactory {
  /**
   * Log level defined from file enviroment.
   */
  private level!: number;

  /**
   * Flag if Log printing is active.
   */
  private active: boolean;

  /**
   * Constructor fetches from enviroment file
   * the activation status and the level to print.
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
   * It displays an TRACE level message on the console.
   * @param msg Message to display.
   * @param object [Optional] Object to print.
   */
  trace(msg: string, object: any = ''): void {
    if (this.active && this.level >= 0) {
      console.log(this.generateMessage(msg), object);
    }
  }

  /**
   * It displays an DEBUD level message on the console.
   * @param msg Message to display.
   * @param object [Optional] Object to print.
   */
  debug(msg: string, object: any = ''): void {
    if (this.active && this.level >= 1) {
      console.log(this.generateMessage(msg), object);
    }
  }

  /**
   * It displays an INFO level message on the console.
   * @param msg Message to display.
   * @param object [Optional] Object to print.
   */
  info(msg: string, object: any = ''): void {
    if (this.active && this.level >= 2) {
      console.log(this.generateMessage(msg), object);
    }
  }

  /**
   * It displays an warning level message on the console.
   * @param msg Message to display.
   * @param object [Optional] Object to print.
   */
  warning(msg: string, object: any = ''): void {
    if (this.active && this.level >= 3) {
      console.warn(this.generateMessage(msg), object);
    }
  }

  /**
   * It displays an ERROR level message on the console.
   * @param msg Message to display.
   * @param object [Optional] Object to print.
   */
  error(msg: string, object: any = ''): void {
    if (this.active && this.level >= 4) {
      console.error(this.generateMessage(msg), object);
    }
  }

  /**
   * Displays a message to the console, skipping the defined log level and status.
   * @param msg  Message to display.
   * @param object [Optional] Object to print.
   */
  force(msg: string, object: any = ''): void {
    console.log(this.generateMessage(msg), object);
  }

  /**
   * Method that generates the string to print to the console.
   * @param msg Message to display.
   */
  private generateMessage(msg: string): string {
    if (msg) {
      return '[' + new Date().toLocaleString() + '] ' + msg;
    } else {
      return '';
    }
  }
}
