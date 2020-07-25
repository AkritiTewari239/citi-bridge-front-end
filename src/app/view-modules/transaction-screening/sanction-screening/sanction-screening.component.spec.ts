import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SanctionScreeningComponent } from './sanction-screening.component';

describe('SanctionScreeningComponent', () => {
  let component: SanctionScreeningComponent;
  let fixture: ComponentFixture<SanctionScreeningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanctionScreeningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanctionScreeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
