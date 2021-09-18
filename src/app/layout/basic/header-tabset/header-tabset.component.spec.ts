import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutHeaderTabsetComponent } from './header-tabset.component';

describe('HeaderTabsetComponent', () => {
  let component: LayoutHeaderTabsetComponent;
  let fixture: ComponentFixture<LayoutHeaderTabsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutHeaderTabsetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutHeaderTabsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
