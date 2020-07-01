import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Jogo01Page } from './jogo01.page';

describe('Jogo01Page', () => {
  let component: Jogo01Page;
  let fixture: ComponentFixture<Jogo01Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Jogo01Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Jogo01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
