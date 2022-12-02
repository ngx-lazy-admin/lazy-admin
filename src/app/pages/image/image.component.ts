import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ModalTemplateComponent } from 'src/app/shared/modal/template/template.component';
import { Subject } from 'rxjs';
import { delay, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageComponent implements OnInit {
  source$ = new Subject();

  constructor(private cd: ChangeDetectorRef) {
    this.source$.pipe(throttleTime(100)).subscribe((index: any) => {
      index = index + 28;

      // if (index - this.current > 0) {
      //   if (index - this.current >= 0 && index - this.current < 28) {
      //     const timer = setInterval(() => {
      //       this.current++;

      //       if (this.current >= index) {
      //         clearInterval(timer);
      //         console.log(this.current, index);
      //       }
      //     }, 60);
      //   } else {
      //     this.current = index;
      //   }
      // }

      if (index - this.current > 28) {
        this.current = index - 28;
      }

      const timer = setInterval(() => {
        this.current++;

        if (this.current >= index) {
          clearInterval(timer);
        }
        this.cd.markForCheck();
        console.log(this.current);
      }, 60);
      console.log(index);

      this.cd.markForCheck();
    });

    this.source$.next(28);
  }

  list: any[] = new Array(100);

  current: number = 0;

  ngOnInit(): void {}

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
