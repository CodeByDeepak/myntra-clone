import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmgDealsComponent } from './omg-deals.component';

describe('OmgDealsComponent', () => {
  let component: OmgDealsComponent;
  let fixture: ComponentFixture<OmgDealsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OmgDealsComponent]
    });
    fixture = TestBed.createComponent(OmgDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
