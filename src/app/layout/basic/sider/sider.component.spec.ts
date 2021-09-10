import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutSiderComponent } from './sider.component';

describe('SiderComponent', () => {
  let component: LayoutSiderComponent;
  let fixture: ComponentFixture<LayoutSiderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutSiderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutSiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
