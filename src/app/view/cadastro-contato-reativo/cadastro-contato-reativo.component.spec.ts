import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroContatoReativoComponent } from './cadastro-contato-reativo.component';

describe('CadastroContatoReativoComponent', () => {
  let component: CadastroContatoReativoComponent;
  let fixture: ComponentFixture<CadastroContatoReativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroContatoReativoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroContatoReativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
