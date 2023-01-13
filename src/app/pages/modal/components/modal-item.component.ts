import { Component, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { FormlyFormOptions } from '@ngx-formly/core';
import { ModalService } from 'src/app/shared/modal';

import { ModalTemplateComponent } from 'src/app/shared/modal/template/template.component';
import { ThemeSettingService } from 'src/app/shared/theme-setting/theme-setting.service';

@Component({
  selector: 'app-modal-item',
  template: `
    嵌套业务组件{{id}}
  `,
})
export class ModalItemComponent implements OnInit {
  ngOnInit(): void {}

  @ViewChild('titleTemplate', { read: TemplateRef }) titleTemplateRef!: TemplateRef<any>;

  @ViewChild(ModalTemplateComponent) private modalTemplate!: ModalTemplateComponent;

  @Input() id?: string;

  constructor(
    private modalService: ModalService,
    private sanitizer: DomSanitizer,
    private themeService: ThemeSettingService
  ) {}

  model = {
    email: 'email@gmail.com'
  };

  field = [
    {
      key: 'email',
      type: 'nz-input',
      className: 'w-100 mb-2 d-inline-block',
      wrappers: ['form'],
      templateOptions: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true
      }
    }
  ];

  form = new FormGroup({});
  options: FormlyFormOptions = {
    formState: {
      caches: '1'
    }
  };

  list: any[] = [];

  // create modal template
  create(template: any, mask: boolean = true) {
    // 获取空模拟
    const contentTemplateRef = this.modalTemplate.getTemplateRef('blank');

    const ModalOptions = {
      nzTitle: null,
      nzFooter: null,
      nzWidth: '960px',
      nzMask: mask,
      nzComponentParams: {
        nzTitle: '这是一个标题1',
        nzContent: template
      }
    };

    this.modalService.create(contentTemplateRef, ModalOptions);
  }

  // 创建一个没有遮罩层的弹窗
  createNotMaskModal(template: any, mask: boolean = true) {
    // 获取空模拟
    const contentTemplateRef = this.modalTemplate.getTemplateRef('blank');

    const ModalOptions = {
      nzTitle: null,
      nzFooter: null,
      nzWidth: '960px',
      nzComponentParams: {
        nzTitle: '这是一个标题1',
        nzContent: template
      },
      nzMask: false,
    };

    this.modalService.create(contentTemplateRef, ModalOptions);
  }

  createOne(template: any, mask: boolean = true) {
    const contentTemplateRef = this.modalTemplate.getTemplateRef('blank');
    const ModalOptions = {
      id: '99999999',
      nzTitle: null,
      nzFooter: null,
      nzWidth: '960px',
      nzMask: false,
      nzComponentParams: {
        nzTitle: '只能打开一个对话框',
        nzContent: template
      }
    };

    this.modalService.create(contentTemplateRef, ModalOptions);
  }

  // create iframe modal
  iframe(mask: boolean = true) {
    const contentRef = this.modalTemplate.getTemplateRef('iframe');

    const modalOptions = {
      nzTitle: null,
      nzBodyStyle: {
        padding: 0
      },
      nzFooter: null,
      nzMask: false,
      nzComponentParams: {
        nzTitle: 'Iframe',
        url: this.sanitizer.bypassSecurityTrustResourceUrl('/modal')
      },
      nzWidth: '960px'
    };

    this.modalService.create(contentRef, modalOptions);
  }

  // create formly modal
  formly(mask: boolean = true) {
    const contentTemplateRef = this.modalTemplate.getTemplateRef('form');
    const ModalOptions = {
      nzTitle: null,
      nzFooter: null,
      nzWidth: '960px',
      nzMask: false,
      nzComponentParams: {
        nzTitle: '这是一个标题',
        field: this.field,
        model: this.model,
        options: this.options
      }
    };
    this.modalService.create(contentTemplateRef, ModalOptions);
  }

  blank(template: TemplateRef<any>, mask: boolean = true) {
    const contentTemplateRef = this.modalTemplate.getTemplateRef('blank');
    const ModalOptions = {
      nzTitle: null,
      nzFooter: null,
      nzWidth: '960px',
      nzMask: false,
      nzComponentParams: {
        nzTitle: '这是一个标题',
        field: this.field,
        model: this.model,
        options: this.options
      }
    };
    this.modalService.create(contentTemplateRef, ModalOptions);
  }

  image(imageRef: any, mask: boolean = true) {
    // 弹窗的 overlay 的层级默认是 1000
    // 事件穿透之后，弹窗无法向下滚动
    // 事件不穿透，遮罩层在在弹窗上面
    // 不修改弹窗层级，多个弹窗无法实现层级替换
    // 修改弹窗层级，会影响其他的overlay

    const contentTemplateRef = this.modalTemplate.getTemplateRef('blank');
    const ModalOptions = {
      nzTitle: null,
      nzFooter: null,
      nzWidth: '960px',
      nzMask: mask,
      nzMaskClosable: false,
      nzComponentParams: {
        nzTitle: null,
        nzBodyStyle: {
          padding: 0
        },
        nzContent: imageRef
      }
    };
    this.modalService.create(contentTemplateRef, ModalOptions);
  }

  // 自定义组成部分
  custom(template: TemplateRef<any>, mask: boolean = true) {
    this.modalService.create(template, {
      nzTitle: this.titleTemplateRef
    });
  }

  // search ($event: any) {
  //   this.modalService.open('search')
  // }

  // 隐藏全部弹窗
  hideAll($event: any) {
    this.modalService.hideAll();
  }

  // 显示全部弹窗
  showAll($event: any) {
    this.modalService.showAll();
  }

  theme() {
    this.themeService.open();
  }
}
