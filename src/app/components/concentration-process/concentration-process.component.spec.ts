import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcentrationProcessComponent } from './concentration-process.component';

describe('ConcentrationProcessComponent', () => {
  let component: ConcentrationProcessComponent;
  let fixture: ComponentFixture<ConcentrationProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcentrationProcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcentrationProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
