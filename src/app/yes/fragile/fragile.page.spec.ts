import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FragilePage } from './fragile.page';

describe('FragilePage', () => {
  let component: FragilePage;
  let fixture: ComponentFixture<FragilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FragilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FragilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
