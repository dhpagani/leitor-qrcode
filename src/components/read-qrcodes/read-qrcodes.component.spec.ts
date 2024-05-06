import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadQrcodesComponent } from './read-qrcodes.component';

describe('ReadQrcodesComponent', () => {
  let component: ReadQrcodesComponent;
  let fixture: ComponentFixture<ReadQrcodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadQrcodesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReadQrcodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
