import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroContatoFormComponent } from './cadastro-contato-form.component';

describe('CadastroContatoFormComponent', () => {
  let component: CadastroContatoFormComponent;
  let fixture: ComponentFixture<CadastroContatoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroContatoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroContatoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
