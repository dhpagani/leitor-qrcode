import { UUID } from 'crypto';
import Dexie, { Table } from 'dexie';

export interface QrCodes {
  ts_cad: Date;
  qrcode: string;
  value: number;
}

export class AppDB extends Dexie {
  qrCodes!: Table<QrCodes, UUID>;

  constructor() {
    super('ngdexieliveQuery');
    this.version(3).stores({
      qrCodes: '&qrcode'
    });
  }

}

export const db = new AppDB();
