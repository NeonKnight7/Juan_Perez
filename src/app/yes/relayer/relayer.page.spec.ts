import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RelayerPage } from './relayer.page';

describe('RelayerPage', () => {
  let component: RelayerPage;
  let fixture: ComponentFixture<RelayerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelayerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RelayerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
