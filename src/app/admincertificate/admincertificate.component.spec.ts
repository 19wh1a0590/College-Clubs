import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincertificateComponent } from './admincertificate.component';

describe('AdmincertificateComponent', () => {
  let component: AdmincertificateComponent;
  let fixture: ComponentFixture<AdmincertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmincertificateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmincertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
