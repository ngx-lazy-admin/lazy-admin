
import { Component, OnDestroy, OnInit, ChangeDetectorRef,  ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { takeUntil, filter } from 'rxjs/operators';
import { Observable, Subject, Observer } from 'rxjs';

import { NzButtonShape,  NzButtonType, NzButtonSize} from 'ng-zorro-antd/button';
import { FieldType } from '@ngx-formly/core';

// import { MessageService } from '../../../services/message.service';
// import { CosService } from '../../../services/cos.service';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
import { MessageService } from 'src/app/services/message/message.service';

@Component({
  selector: 'div[upload-field]',
  templateUrl: './upload.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UploadField extends FieldType implements OnInit {

  get disabled(): boolean {
		return this.props.disabled || false;
	}

	get nzGhost(): boolean {
		return this.props.nzGhost || false;
	}

	get control() : FormControl {
		return this.formControl as FormControl;
  }

  get nzShape() : NzButtonShape {
		return this.props.nzShape || '';
  }

  get nzLoading(): boolean {
    return this.props.nzLoading || false;
  }

  get nzSize() : NzButtonSize {
		return this.props.nzSize || 'default';
  }

  get nzType() : NzButtonType {
		return this.props.nzType || '';
  }

  get nzBlock() : boolean {
		return this.props.nzBlock || false;
  }

	get nzDanger(): boolean {
		return this.props.nzDanger || false;
	}

  private _destroy$ = new Subject<void>();

  constructor(
    private http: HttpClient,
    private msg: MessageService,
    private cd: ChangeDetectorRef,
  ) {
    super();
  }

  onClick ($event: Event) {
    if (this.props.click) {
      this.props.click(this.field, $event);
    }
  }

  ngModelChange (info: NzUploadChangeParam) {
    if (this.props.change) {
      this.props.change(this.field, info);
    }
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}

