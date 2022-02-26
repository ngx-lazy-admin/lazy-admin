import {
  Component,
  OnInit, 
  ChangeDetectionStrategy, 
  ElementRef, 
  ChangeDetectorRef
} from '@angular/core';
import { loadMicroApp, registerMicroApps, start } from 'qiankun';

@Component({
  selector: 'app-qiankun',
  templateUrl: './qiankun.component.html',
  styleUrls: ['./qiankun.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QiankunComponent implements OnInit {

  constructor(
    private elRef: ElementRef,
    private cd: ChangeDetectorRef,
  ) {}

  
  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.loadMicroApp();
  }

  loadMicroApp () {
    loadMicroApp({
      name: 'qiankun',
      entry: '//strawbreey.github.io/qiankun-vue3',
      container: '#qiankun',
    });
  } 
}
