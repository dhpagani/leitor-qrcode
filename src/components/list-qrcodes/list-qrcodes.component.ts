import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-list-qrcodes',
  standalone: true,
  imports: [MatListModule, CommonModule],
  templateUrl: './list-qrcodes.component.html',
  styleUrl: './list-qrcodes.component.sass'
})
export class ListQrcodesComponent {
  items = [];
}
