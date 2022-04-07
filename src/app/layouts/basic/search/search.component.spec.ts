import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutSearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: LayoutSearchComponent;
  let fixture: ComponentFixture<LayoutSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
