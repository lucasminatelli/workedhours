import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompaniesdetailPage } from './companiesdetail.page';

describe('CompaniesdetailPage', () => {
  let component: CompaniesdetailPage;
  let fixture: ComponentFixture<CompaniesdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompaniesdetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompaniesdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
