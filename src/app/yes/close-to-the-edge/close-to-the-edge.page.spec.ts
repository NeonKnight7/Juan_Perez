import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CloseToTheEdgePage } from './close-to-the-edge.page';

describe('CloseToTheEdgePage', () => {
  let component: CloseToTheEdgePage;
  let fixture: ComponentFixture<CloseToTheEdgePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloseToTheEdgePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CloseToTheEdgePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
