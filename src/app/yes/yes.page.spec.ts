import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YesPage } from './yes.page';

describe('YesPage', () => {
  let component: YesPage;
  let fixture: ComponentFixture<YesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
