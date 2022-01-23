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

  qiankunStarted: boolean = false;
  
  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    if (!this.qiankunStarted) {
      this.qiankunStarted = true;
      start();
    }
  }
}
