import { Component, OnInit, Renderer2, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import { FormlyFormOptions } from '@ngx-formly/core';
import { ModalService } from 'src/app/shared/modal';

import { DispatchService } from 'src/app/shared/modal/dispatch.service';

import { ModalTemplateComponent } from 'src/app/shared/modal/template/template.component'
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})
export class ModalComponent implements OnInit {

  ngOnInit(): void {}

  @ViewChild('titleTemplate', { read: TemplateRef }) titleTemplateRef!:TemplateRef<any>;

  @ViewChild(ModalTemplateComponent) private modalTemplate!: ModalTemplateComponent;
  
  constructor(
    private modalService: ModalService,
    private dispatch: DispatchService,
    private _viewContainer: ViewContainerRef,
    private sanitizer: DomSanitizer,
    private http: HttpClient
  ) {
    this.getList()
  }

  model = {
    email: 'email@gmail.com'
  }

  field = [
    {
      key: 'email',
      type: 'nz-input',
      className: 'w-100 mb-2 d-inline-block',
      wrappers: ['form'],
      templateOptions: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      }
    }
  ]

  form = new FormGroup({});
  options: FormlyFormOptions = {
    formState: {
      caches: '1'
    }
  };

  list: any[] = []

  // 创建弹窗
  create(template: any) {     
    this.modalService.create(template)
  }

  // create iframe modal
  iframe() {    
    const contentRef = this.modalTemplate.getTemplateRef('iframe')

    const modalOptions = {
      nzTitle: null,
      nzBodyStyle: {
        padding: 0
      },
      nzFooter: null,
      nzComponentParams: {
        nzTitle: 'Iframe',
        url: this.sanitizer.bypassSecurityTrustResourceUrl('/blank/components/autocomplete')
      },
      nzWidth: '960px'
    }

    this.modalService.create(contentRef, modalOptions)
  }

  // create formly modal
  formly () {
    const contentTemplateRef = this.modalTemplate.getTemplateRef('form')
    const ModalOptions = {
      nzTitle: null,
      nzFooter: null,
      nzWidth: '960px',
      nzComponentParams: {
        nzTitle: '这是一个标题',
        field: this.field,
        model: this.model,
        options: this.options
      }
    }
    this.modalService.create(contentTemplateRef, ModalOptions) 
  }

  blank (template: TemplateRef<any>) {
    const contentTemplateRef = this.modalTemplate.getTemplateRef('blank')
    const ModalOptions = {
      nzTitle: null,
      nzFooter: null,
      nzWidth: '960px',
      nzComponentParams: {
        nzTitle: '这是一个标题',
        field: this.field,
        model: this.model,
        options: this.options,
      }
    }
    this.modalService.create(contentTemplateRef, ModalOptions) 
  }


  // 自定义组成部分
  custom (template: TemplateRef<any>) {
    this.modalService.create(template, {
      nzTitle: this.titleTemplateRef
    })
  }

  close ($event: any) {
    // this.modalService.closeAll()
  }

  open ($event: any) {
    // this.modalService.show($event)
    console.log($event)
  }

  search ($event: any) {
    this.modalService.open('search')
  }

  dispatchSearch ($event: any) {
    // 需求一个回调, 时间
    let params = {
      afterClose: () => {
        console.log('弹窗关闭了')
      }
    }
    let componentParams = null 
    this.dispatch.open('search', params, componentParams)
  }

  dispatchForm ($event: any) {
    this.dispatch.open('form')
  }

  // blank ($event: any) {
  //   this.dispatch.open('blank')
  // }

  modalId: string = ''

  openBlank ($event: any) {
    let params = {
      afterOpen: (modal: any) => {
        console.log('弹窗打开了')
        console.log(modal)
        this.modalId = modal.componentInstance.id
      }
    }
    this.dispatch.open('blank', params)
  }

  closeBlank ($event: any) {
    this.dispatch.close(this.modalId)
  }

  hideBlank ($event: any) {
    this.dispatch.hide(this.modalId)
  }

  showBlank ($event: any) {
    this.dispatch.open('blank')
  }

  hideAllBlank ($event: any) {
    this.dispatch.hideAll()
  }

  showAllBlank ($event: any) {
    this.dispatch.showAll()
  }

  getList () {
    // this.http.get('/srv.model/get_detail?project=artcool&schema=product&id=11').subscribe(item => {
    //   console.log(item)
    // })

    this.http.post('/srv.model/get_list?schems=product&project=artcool', {
      filter: [{field: "status", op: "in", value: "1,10"}],
      include: "id,status,reason,cover_url,like_count,share_count,view_count,company_id,attachment_info",
      page: 1,
      page_size: 1000,
      project: "artcool",
      schema: "product",
      sorter: {field: "_ctime", sort: "desc"}
    }).subscribe((item: any) => {
      console.log(item)
      this.list = item?.data?.list
      console.log(this.list)
    })
  }
}
