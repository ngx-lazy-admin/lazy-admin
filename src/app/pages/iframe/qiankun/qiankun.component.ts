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
    // loadMicroApp({
    //   name: 'app1',
    //   // entry: 'https://wujie-angular12.pages.woa.com',
    //   entry: '//localhost:7105',
    //   container: this.elRef.nativeElement.querySelector('#qiankun'),
    // });
    // start();
    // const getActiveRule  = (location: any) => location.hash.startsWith(hash);

    // let home = getActiveRule('/home')
    // console.log( location.hash)

  }

  ngAfterViewInit(): void {
    // if (!this.qiankunStarted) {
    //   this.qiankunStarted = true;
    //   start();
    // }
    // loadMicroApp({
    //   name: 'angular12',
    //   entry: 'https://wujie-angular12.pages.woa.com',
    //   container: this.elRef.nativeElement.querySelector('#qiankuns'),
    //   props: { brand: 'qiankun' },
    // });
  }
}
