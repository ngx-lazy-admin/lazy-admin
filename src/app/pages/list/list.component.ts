import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { UserService } from 'src/app/api/user';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  constructor(
    public user: UserService,
    private cd: ChangeDetectorRef,
    private http: HttpClient,

  ) { }

  users = {
    id: 10,
    name: 'Dr Nice',
  }

  ngOnInit(): void {
    this.http.get('api/menu').subscribe(item => {
      console.log(item)
    })
  }

  list = [0]

  add () {

  }
}
