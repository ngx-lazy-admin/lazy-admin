import { NgModule } from '@angular/core';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';

import {
  MenuFoldOutline,
  MenuUnfoldOutline,
  FormOutline,
  DashboardOutline,
  ExpandOutline,
  GlobalOutline,
  BellOutline,
  RedoOutline,
  MenuOutline,
  RightOutline,
  LeftOutline,
  GithubOutline,
  FullscreenOutline,
  ReloadOutline,
  SettingOutline,
  TableOutline,
  ProfileOutline,
  CheckCircleOutline,
  WarningOutline,
  RadiusSettingOutline,
  LockOutline,
  UserOutline,
  QuestionCircleOutline,
  HomeOutline,
  DeleteOutline,
  DownloadOutline,
  FileTwoTone,
  StepBackwardOutline,

} from '@ant-design/icons-angular/icons'; 

const icons = [
  MenuFoldOutline, MenuUnfoldOutline, DashboardOutline, FormOutline, ExpandOutline,
  GlobalOutline, BellOutline, RedoOutline, MenuOutline, RightOutline, LeftOutline,
  GithubOutline, FullscreenOutline, ReloadOutline, SettingOutline, TableOutline,
  ProfileOutline, CheckCircleOutline, WarningOutline, RadiusSettingOutline, LockOutline,
  UserOutline, QuestionCircleOutline, HomeOutline, DeleteOutline, DownloadOutline,
  FileTwoTone, StepBackwardOutline
];

@NgModule({
  imports: [NzIconModule],
  exports: [NzIconModule],
  providers: [
    { provide: NZ_ICONS, useValue: icons }
  ]
})
export class IconsProviderModule {}
