import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JogosLogPage } from './jogos-log.page';

describe('JogosLogPage', () => {
  let component: JogosLogPage;
  let fixture: ComponentFixture<JogosLogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JogosLogPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JogosLogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
