import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TheYesAlbumPage } from './the-yes-album.page';

describe('TheYesAlbumPage', () => {
  let component: TheYesAlbumPage;
  let fixture: ComponentFixture<TheYesAlbumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheYesAlbumPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TheYesAlbumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
