import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListQrcodesComponent } from './list-qrcodes.component';

describe('ListQrcodesComponent', () => {
  let component: ListQrcodesComponent;
  let fixture: ComponentFixture<ListQrcodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListQrcodesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListQrcodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
