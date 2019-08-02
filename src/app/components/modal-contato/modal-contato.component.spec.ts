import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalContatoComponent } from './modal-contato.component';

describe('ModalContatoComponent', () => {
  let component: ModalContatoComponent;
  let fixture: ComponentFixture<ModalContatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalContatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
