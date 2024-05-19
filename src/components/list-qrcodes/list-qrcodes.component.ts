import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { liveQuery } from 'dexie';
import { QrCodes, db } from '../../app/indexeddb';
@Component({
  selector: 'app-list-qrcodes',
  standalone: true,
  imports: [MatListModule, CommonModule, MatButtonModule, MatIconModule, MatTableModule, MatPaginatorModule],
  templateUrl: './list-qrcodes.component.html',
  styleUrl: './list-qrcodes.component.sass',
  host: { ngSkipHydration: 'true' },
})
export class ListQrcodesComponent implements AfterViewInit {
  items = [];
  qrCodeList$ = liveQuery(() => db.qrCodes.toArray());
  columnsToDisplay = ['tscad', 'value', 'actions'];

  @ViewChild(MatPaginator) paginator?: MatPaginator;


  tabledataSource = new MatTableDataSource<QrCodes>();

  ngAfterViewInit() {
    this.qrCodeList$.subscribe(things => {
      this.tabledataSource.data = things;
      this.tabledataSource.paginator = this.paginator ?? null;
    });
  }

  identifyList(index: number, list: QrCodes) {
    return list.qrcode;
  }

  async delete(qrcode: QrCodes) {
    await db.qrCodes.where('qrcode').equals(qrcode.qrcode).delete();
  }

}
