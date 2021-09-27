import { Component, OnInit } from '@angular/core';
import { NzCodeEditorModule } from 'ng-zorro-antd/code-editor';
import { NzConfigService } from 'ng-zorro-antd/core/config';


@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.less']
})
export class CodeComponent implements OnInit {

  code = ``;

  constructor(private nzConfigService: NzConfigService) {
    const defaultEditorOption = this.nzConfigService.getConfigForComponent('codeEditor')?.defaultEditorOption || {};
    this.nzConfigService.set('codeEditor', {
      defaultEditorOption: {
        ...defaultEditorOption,
        theme: 'vs-dark',
        minimap: {
          enabled: false
        }
      }
    });
  }

  ngOnInit(): void {
  }

  dark = false;
  onDarkModeChange(dark: boolean): void {
    this.dark = dark;

  }

  editorInitialized ($event: any) {
    console.log($event);
    $event.onMouseLeave.
  } 
}
