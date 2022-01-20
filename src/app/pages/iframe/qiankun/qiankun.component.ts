import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { loadMicroApp, registerMicroApps, start } from 'qiankun';

@Component({
  selector: 'app-qiankun',
  templateUrl: './qiankun.component.html',
  styleUrls: ['./qiankun.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QiankunComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {

    loadMicroApp({
      name: 'app',
      entry: 'http://tdesign.tencent.com/',
      container: '#qiankun',
    });

    // registerMicroApps([
    //   {
    //     name: 'react app', // app name registered
    //     entry: 'https://tdesign.tencent.com/',
    //     container: '#qiankun',
    //     activeRule: '/iframe/qiankun',
    //   },
    //   // {
    //   //   name: 'vue app',
    //   //   entry: { scripts: ['//localhost:7100/main.js'] },
    //   //   container: '#yourContainer2',
    //   //   activeRule: '/yourActiveRule2',
    //   // },
    // ]);
    
    // start();
  }
}
