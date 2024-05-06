import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BarcodeFormat } from '@zxing/library';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-read-qrcodes',
  standalone: true,
  imports: [ZXingScannerModule, MatCardModule,MatButtonModule],
  templateUrl: './read-qrcodes.component.html',
  styleUrl: './read-qrcodes.component.sass'
})
export class ReadQrcodesComponent  {
    hasDevices: boolean;
    torchEnabled: boolean = false;

    allowedFormats = [ BarcodeFormat.QR_CODE ];
    torchAvailable$ = new BehaviorSubject<boolean>(false);

    availableDevices: MediaDeviceInfo[];
    currentDevice: MediaDeviceInfo = null;

    toggleTorch(): void {
      this.torchEnabled = !this.torchEnabled;
    }

    onCamerasFound(devices: MediaDeviceInfo[]): void {
      this.availableDevices = devices;
      this.hasDevices = Boolean(devices && devices.length);
      if(devices.length > 0) {
        this.currentDevice = devices[0];
      }
    }

    scanSuccess(event: any) {
      console.log('Scan successful!', event)
    }

}
