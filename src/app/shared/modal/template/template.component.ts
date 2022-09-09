import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
	Injector,
	TemplateRef,
	ViewChild,
} from '@angular/core';
import hotkeys from 'hotkeys-js';
import { DispatchService } from '../dispatch.service';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-share-template',
  template: `
		<!-- 标题模板 -->
		<ng-template #titleTemplate>
			<div class="p-0 d-block "
				cdkDrag
				cdkDragHandle
				cdkDragRootElement=".ant-modal-content"
				style="cursor: move;">
				<div class="d-flex justify-content-between">
					<div>{{ "标题" }} </div>
				</div>
			</div>
		</ng-template>

  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.bg-gray-100]': 'true',
    '[class.d-block]': 'true'
  }
})
export class SearchModal {

  @ViewChild('titleTemplate', { read: TemplateRef }) titleTemplateRef!:TemplateRef<any>;

	
  isVisible: boolean = false;
  searchValue = ''
  constructor(
    private cd: ChangeDetectorRef,
		private dispatch: DispatchService,
		private modal: ModalService
  ) {
		this.modal.addTemplate(titleTemplateRef)
  }
}
