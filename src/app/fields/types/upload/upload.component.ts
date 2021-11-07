
import { Component, OnDestroy, OnInit, ChangeDetectorRef,  ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { takeUntil, filter } from 'rxjs/operators';
import { Observable, Subject, Observer } from 'rxjs';

import { NzButtonShape,  NzButtonType, NzButtonSize} from 'ng-zorro-antd/button';
import { FieldType } from '@ngx-formly/core';

import { MessageService } from '../../../services/message.service';
import { CosService } from '../../../services/cos.service';

@Component({
  selector: 'div[upload-field]',
  templateUrl: './upload.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class UploadField extends FieldType implements OnInit {

  get disabled(): boolean {
		return this.to.disabled || false;
	}

	get nzGhost(): boolean {
		return this.to.nzGhost || false;
	}

	get control() : FormControl {
		return this.formControl as FormControl;
  }

  get nzShape() : NzButtonShape {
		return this.to.nzShape || '';
  }

  get nzLoading(): boolean {
    return this.to.nzLoading || false;
  }

  get nzSize() : NzButtonSize {
		return this.to.nzSize || 'default';
  }

  get nzType() : NzButtonType {
		return this.to.nzType || '';
  }

  get nzBlock() : boolean {
		return this.to.nzBlock || false;
  }

	get nzDanger(): boolean {
		return this.to.nzDanger || false;
	}

  private _destroy$ = new Subject<void>();

  constructor(
    private http: HttpClient,
    private msg: MessageService,
    private cd: ChangeDetectorRef,
    public cos: CosService
  ) {
    super();
  }

  onClick ($event: Event) {
    if (this.to.click) {
      this.to.click(this.field, $event);
    }
  }

  ngModelChange ($event: Event) {
    if (this.to.change) {
      this.to.change(this.field, $event);
    }
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}

