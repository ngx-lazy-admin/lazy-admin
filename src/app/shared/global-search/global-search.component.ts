import {
  Component,
  OnInit,
  ViewContainerRef,
  ViewChild,
  TemplateRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ElementRef,
  HostListener
} from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal, ComponentPortal } from '@angular/cdk/portal';
import { NzContextMenuService, NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';
import hotkeys from 'hotkeys-js';
import { FullScreenService } from 'src/app/services/menu/full-screen.service';

import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { catchError, takeUntil } from 'rxjs/operators';

import { NzMessageService } from 'ng-zorro-antd/message';

export interface AutocompleteOptionGroups {
  title: string;
  count?: number;
  children?: AutocompleteOptionGroups[];
}

interface ItemData {
  gender: string;
  name: Name;
  email: string;
}

interface Name {
  title: string;
  first: string;
  last: string;
}

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
      // Prevent the default refresh event under WINDOWS system
      event.preventDefault();
      console.log('999999')
      this.isVisible = true;
      this.cd.markForCheck();
    });
  }

  ds = [];

  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);

  showModal(): void {
    this.isVisible = true;
  }

  onChange (value: any): void {
    console.log(value)
  }

  handleCancel (): void {
    console.log('value')
  }

}
