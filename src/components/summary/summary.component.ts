import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { db } from '../../app/indexeddb';
@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [MatInputModule, MatIconModule, MatButtonModule, MatListModule, MatTableModule, MatPaginatorModule],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.sass'
})
export class SummaryComponent {
  totalFichas = 0;
  totalDinheiro = 0;

  async gerarCsv() {
    const data = await db.qrCodes.toArray();

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

  }
}
