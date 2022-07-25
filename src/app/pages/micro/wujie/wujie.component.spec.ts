import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WuJieComponent } from './wujie.component';

describe('WuJieComponent', () => {
  let component: WuJieComponent;
  let fixture: ComponentFixture<WuJieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WuJieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WuJieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
