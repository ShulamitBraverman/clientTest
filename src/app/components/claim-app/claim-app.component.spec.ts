import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimAppComponent } from './claim-app.component';

describe('ClaimAppComponent', () => {
  let component: ClaimAppComponent;
  let fixture: ComponentFixture<ClaimAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
