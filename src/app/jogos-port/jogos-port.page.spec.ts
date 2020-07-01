import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JogosPortPage } from './jogos-port.page';

describe('JogosPortPage', () => {
  let component: JogosPortPage;
  let fixture: ComponentFixture<JogosPortPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JogosPortPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JogosPortPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
