import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GoingForTheOnePage } from './going-for-the-one.page';

describe('GoingForTheOnePage', () => {
  let component: GoingForTheOnePage;
  let fixture: ComponentFixture<GoingForTheOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoingForTheOnePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GoingForTheOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
