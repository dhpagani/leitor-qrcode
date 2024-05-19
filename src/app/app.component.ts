import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { ListQrcodesComponent } from '../components/list-qrcodes/list-qrcodes.component';
import { ReadQrcodesComponent } from '../components/read-qrcodes/read-qrcodes.component';
import { SummaryComponent } from '../components/summary/summary.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    MatToolbarModule, MatCardModule, MatButtonModule,
    ListQrcodesComponent, ReadQrcodesComponent, MatSidenavModule, SummaryComponent, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'Contador de Fichas';
}
