import { AfterViewInit, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { liveQuery } from 'dexie';
import { QrCodes, db } from '../../app/indexeddb';
@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [MatInputModule, MatIconModule, MatButtonModule, MatListModule, MatTableModule, MatPaginatorModule, MatDialogModule],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.sass'
})
export class SummaryComponent implements AfterViewInit {
  totalFichas = 0;
  totalDinheiro = 0;
  qrCodeList$ = liveQuery(() => db.qrCodes.toArray());
  dialog: any;

  ngAfterViewInit() {
    this.qrCodeList$.subscribe(things => {
      this.totalFichas = things.length;
      this.totalDinheiro = things.reduce((acc: number, cur: QrCodes) => acc + cur.value, 0);
    });
  }

  async gerarCsv() {
    const data = await db.qrCodes.toArray();
    if (data.length === 0) {
      alert('Nenhum registro encontrado');
      return;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const replacer = (key: any, value: any) => (value === null ? '' : value); // specify how you want to handle null values here
    const header = Object.keys(data[0]);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const csv = data.map((row: any) =>
      header
        .map((fieldName) => JSON.stringify(row[fieldName], replacer))
        .join(',')
    );
    csv.unshift(header.join(','));
    const csvArray = csv.join('\r\n');

    const a = document.createElement('a');
    const blob = new Blob([csvArray], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);

    a.href = url;
    a.download = new Date().toISOString().replace(/:/g, '-') + '.csv';
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
  }

  deleteAll() {
    confirm('Tem certeza que deseja excluir todos os registros?') && db.qrCodes.clear();
  }
}
