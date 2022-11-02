import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QiankunComponent } from './qiankun.component';

describe('QiankunComponent', () => {
  let component: QiankunComponent;
  let fixture: ComponentFixture<QiankunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QiankunComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QiankunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
