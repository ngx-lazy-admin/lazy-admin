import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { FormlyFormOptions } from '@ngx-formly/core';
import { ModalService } from 'src/app/shared/modal';

import { DispatchService } from 'src/app/shared/modal/dispatch.service';

import { ModalTemplateComponent } from 'src/app/shared/modal/template/template.component';
import { CollectionViewer, ListRange } from '@angular/cdk/collections';
import { Observable, Subject } from 'rxjs';
import { ScrollDispatcher, ScrollingModule } from '@angular/cdk/scrolling';
import { number } from 'echarts';
import { delay, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.less']
})
export class ImageComponent implements OnInit {
  ngOnInit(): void {}

  @ViewChild('titleTemplate', { read: TemplateRef }) titleTemplateRef!: TemplateRef<any>;

  @ViewChild(ModalTemplateComponent) private modalTemplate!: ModalTemplateComponent;

  source$ = new Subject();

  constructor(
    private modalService: ModalService,
    private dispatch: DispatchService,
    private sanitizer: DomSanitizer,
    private scrollDispatcher: ScrollDispatcher
  ) {
    this.source$
      .pipe(throttleTime(10))
      // .pipe(delay(60))
      .subscribe((index: any) => {
        this.current = index;
        console.log(index);
      });
  }

  list: any[] = new Array(100);

  current: number = 0;

  change($event: any) {
    this.source$.next($event);
    if ($event + 49 > this.list.length) {
      this.list = [...this.list, ...new Array(20)];
      console.log('list', $event, this.list.length);
    }
  }

  range($event: any) {
    console.log($event);
  }
}
