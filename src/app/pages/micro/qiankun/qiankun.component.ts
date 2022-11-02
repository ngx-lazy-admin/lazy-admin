import { Component, OnInit, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef } from '@angular/core';
import { loadMicroApp, registerMicroApps, start } from 'qiankun';

@Component({
  selector: 'app-qiankun',
  templateUrl: './qiankun.component.html',
  styleUrls: ['./qiankun.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QiankunComponent implements OnInit {
  constructor(private elRef: ElementRef, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    loadMicroApp(
      {
        name: '',
        entry: '//localhost:7400',
        container: '#qiankun'
      },
      {
        sandbox: {
          strictStyleIsolation: true,
          experimentalStyleIsolation: true
        }
      }
    );
    // const getActiveRule = (hash: any) => (location: any) => location.pathname.startsWith(hash);
    // console.log(location.pathname.startsWith('/micro/qiankun/'))
    // console.log(getActiveRule('/micro/qiankun/'))
    // registerMicroApps([
    //   {
    //     name: 'app',
    //     entry: '//localhost:7400',
    //     container: '#qiankun',
    //     // activeRule: '/micro/qiankun/app',
    //     activeRule: getActiveRule('/micro/qiankun/'),
    //   },
    // ]);
  }

  ngAfterViewInit(): void {}
}
