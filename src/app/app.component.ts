import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { ListQrcodesComponent } from '../components/list-qrcodes/list-qrcodes.component';
import { ReadQrcodesComponent } from '../components/read-qrcodes/read-qrcodes.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    MatToolbarModule, MatCardModule,MatButtonModule,
    ListQrcodesComponent, ReadQrcodesComponent,MatSidenavModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'Leitor de QRCode - contagem de ingressos';
}
