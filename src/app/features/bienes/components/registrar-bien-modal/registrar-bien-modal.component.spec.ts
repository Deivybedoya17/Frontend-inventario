import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarBienModalComponent } from './registrar-bien-modal.component';

describe('RegistrarBienModalComponent', () => {
  let component: RegistrarBienModalComponent;
  let fixture: ComponentFixture<RegistrarBienModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarBienModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarBienModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
