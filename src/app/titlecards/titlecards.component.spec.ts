import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlecardsComponent } from './titlecards.component';

describe('TitlecardsComponent', () => {
  let component: TitlecardsComponent;
  let fixture: ComponentFixture<TitlecardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TitlecardsComponent]
    });
    fixture = TestBed.createComponent(TitlecardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
