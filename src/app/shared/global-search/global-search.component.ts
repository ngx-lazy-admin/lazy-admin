import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import hotkeys from 'hotkeys-js';

@Component({
  selector: 'app-global-search',
  templateUrl: './global-search.component.html',
  styleUrls: ['./global-search.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.bg-gray-100]': 'true',
    '[class.d-block]': 'true'
  }
})
export class GlobalSearchComponent {


  isVisible: boolean = false;
  searchValue = ''
  constructor(
    private cd: ChangeDetectorRef,
  ) {

    hotkeys('ctrl + k', (event, handler) => {
      event.preventDefault();
      this.isVisible = true;
      this.cd.markForCheck();
    });
  }

  ds = [];

  items = Array.from({length: 100}).map((_, i) => `Item #${i}`);

  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  showModal(): void {
    this.isVisible = true;
  }

  onChange (value: any): void {
    console.log(value)
  }

  handleCancel (): void {
    console.log('handleCancel')
    this.isVisible = false;
    this.cd.markForCheck();
  }

}
