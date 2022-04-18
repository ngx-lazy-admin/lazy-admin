import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { GroupField } from './group.component'

@NgModule({
  declarations: [
    GroupField
  ],
  imports: [
    CommonModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'group',
          component: GroupField,
        }
      ]
    })
  ]
})
export class GroupFieldModule {}