import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautyComponent } from './beauty.component';

describe('BeautyComponent', () => {
  let component: BeautyComponent;
  let fixture: ComponentFixture<BeautyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeautyComponent]
    });
    fixture = TestBed.createComponent(BeautyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
