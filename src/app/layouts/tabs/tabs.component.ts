import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.less']
})
export class TabsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router, public menu: MenuService) {}

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
