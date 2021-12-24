import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestComponent implements OnInit {

  constructor(
    public user: UserService,

  ) { }

  // get users(): User {
  //   return this.user.users;
  // }

  ngOnInit(): void {
  }

}
