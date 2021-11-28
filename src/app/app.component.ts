import { Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  isCollapsed = false;
  title = 'go-admin-ng'

  closeModal () {
    console.log('closeModal')
  }
}
