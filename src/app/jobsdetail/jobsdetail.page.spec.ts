import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JobsdetailPage } from './jobsdetail.page';

describe('JobsdetailPage', () => {
  let component: JobsdetailPage;
  let fixture: ComponentFixture<JobsdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsdetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JobsdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
