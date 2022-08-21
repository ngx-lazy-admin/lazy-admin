import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';
import { MenuService } from '../menu.service';
// import { MenuService } from 'src/app/services/api/menu';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.less']
})
export class TabsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public menu: MenuService,
  ) { }

  ngOnInit(): void {
    // this.
    // this.menu.change$?.subscribe(item => {
    //   console.log(item)
    // })

    // // console.log(this.route)
    // // console.log(this.router)

    // this.route.queryParams.subscribe(params => {
    //   console.log(params)
    // });

    // this.route.paramMap.pipe(
    //   map((params: ParamMap) => params.get('username'))
    // ).subscribe(res => {
    //   console.log(res)
    // });

    // this.route.params.subscribe(params => {
    //   console.log(params)
    // })

    // this.route.url.subscribe(url => {
    //   console.log(url)
    // })
  }
}
