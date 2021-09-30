import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'app-form-input-array',
    templateUrl: './input-array.component.html',
    styleUrls: ['./input-array.component.css'],
})
export class FormlyFieldInputArrayComponent extends FieldType implements OnInit {

  constructor(
    private fb: FormBuilder
  ) {
    super();
  }

  controlArray = [];

  addField(e?: MouseEvent, index?): void {
    if (e) {
      e.preventDefault();
    }

    const control = {
      zh: null,
      en: null
    };
    this.controlArray.splice(index + 1, 0, control);

    this.change();
  }

  removeField(i, e: MouseEvent): void {
    e.preventDefault();
    if (this.controlArray.length > 1) {
      const index = this.controlArray.indexOf(i);
      this.controlArray.splice(index, 1);
    }
    this.change();
  }

  change () {
    this.formControl.patchValue({
      zh: this.controlArray.map(item => item.zh).join('|'),
      en: this.controlArray.map(item => item.en).join('|'),
      len: this.controlArray.length
    });
  }

  ngOnInit(): void {
    if (this.formControl.value && this.formControl.value.zh) {
      const zh = this.formControl.value.zh.split('|');
      let en = null;

      if (this.formControl.value.en) {
          en = this.formControl.value.en.split('|');
      }

      this.controlArray = zh.map((val, index) => {
        return {
          zh: val,
          en: en && en[index] ? en[index] : null,
        };
      });

      console.log(this.controlArray);
    } else {
      this.addField();
    }
  }
}
