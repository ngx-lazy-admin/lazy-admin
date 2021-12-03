import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  constructor(
    public user: UserService,
    private cd: ChangeDetectorRef 
  ) { }

  users = {
    id: 10,
    name: 'Dr Nice',
  }

  ngOnInit(): void {

  }

  list = [0]

  add () {

  }
}
