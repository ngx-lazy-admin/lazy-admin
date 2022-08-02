import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import hotkeys from 'hotkeys-js';

@Component({
  selector: 'app-search-modal',
  template: `
  		<div style="height: 500px;" class="position-relative">
			<div class="py-2 px-3 border-bottom">
				<input
					placeholder="Type a command or search"
					nzBorderless="true"
					class="f20 py-2"
					nz-input
					[(ngModel)]="searchValue"
					(ngModelChange)="onChange($event)"
				/>
			</div>
			<div class="list">
				<cdk-virtual-scroll-viewport itemSize="50" class="example-viewport w-100" style="height: 380px;">
					<nz-list>
						<nz-list-item *cdkVirtualFor="let item of items" class="py-1 hover">
							<nz-list-item-meta
								*ngIf="item"
								class="px-4"
								nzAvatar="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
								[nzDescription]="item"
							>
								<nz-list-item-meta-title>
									<a href="https://ng.ant.design">{{ item }}</a>
								</nz-list-item-meta-title>
							</nz-list-item-meta>
						</nz-list-item>
					</nz-list>
				</cdk-virtual-scroll-viewport>
				<!-- <mat-selection-list #shoes [multiple]="false">
					<mat-list-option *ngFor="let shoe of items" class="hover" [value]="shoe">
						{{shoe}}
					</mat-list-option>
				</mat-selection-list> -->
			</div>
			<footer class="d-flex f14 px-4 flex-nowrap position-absolute bottom-0 justify-content-between p-3 w-100  border-top">
				<div class="result">180 result</div>
				<div class="arrows">
					<div id="omni-arrows">Use arrow keys <span class="omni-shortcut bg-light mx-2">↑</span><span class="omni-shortcut bg-light ">↓</span> to navigate</div>
				</div>
			</footer>
		</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.bg-gray-100]': 'true',
    '[class.d-block]': 'true'
  }
})
export class SearchModal {


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
