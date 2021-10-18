import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { MenuService } from '../../../services/menu.service';

@Component({
  selector: 'app-layout-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutSearchComponent implements OnInit {

  validateForm!: FormGroup;

  list: Array<{ index: number; show: boolean }> = [];

  lists = [
    {
      key: '',
      value: '',
      type: '',
      label: '',
      icon: '',
      info: ''
    }
  ]

  isCollapse = false

  private destroy$ = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private menu: MenuService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({});
    this.isCollapse = true;
    for (let i = 0; i < 10; i++) {
      this.list.push({ index: i, show: i < 6 });
    }
  }

  submitForm(): void {
    console.log('submitForm');
    this.menu.getMenu().subscribe(item => {
      console.log('6666')
    })
  }

  toggleCollapse () {
    this.isCollapse = !this.isCollapse;
    this.list.forEach((c, index) => {
      c.show = this.isCollapse ? index < 6 : true;
    });
    this.cd.markForCheck();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
