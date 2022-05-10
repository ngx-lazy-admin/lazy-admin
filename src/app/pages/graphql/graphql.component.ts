import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  NgZone,
} from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { FormGroup } from '@angular/forms';

import { inNextTick } from 'ng-zorro-antd/core/util';
import { NzConfigService } from 'ng-zorro-antd/core/config';

import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import hotkeys from 'hotkeys-js';
import * as beautify from 'js-beautify';
import { editor } from 'monaco-editor';

import { FieldService } from 'src/app/services/api/field';
import { execEval } from 'src/app/modules/fields/antd/share-field.type';
import { CacheService } from 'src/app/services/router/cache.service';
import { ModalService } from 'src/app/modules/modal';
import { PreviewService } from 'src/app/modules/preview';

import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import { ThemeSettingService } from 'src/app/modules/theme-setting/theme-setting.service';

var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return 'world 1';
        },
      },
    },
  }),
});

export interface headerInfoType {
  title: string,
  content: string,
  subtitle: string,
}

export interface errorResultType {
  status: string,
  subTitle: string,
}

@Component({
  selector: 'app-graphql',
  templateUrl: './graphql.component.html',
  styleUrls: ['./graphql.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'p-3 d-block',
  }
})
export class GraphqlComponent {

  private destroy$ = new Subject<void>();

  constructor(
    public route: ActivatedRoute,
    private themeSettingService: ThemeSettingService
  ) {
    var source = '{ hello }';

    graphql({ schema, source }).then((result) => {
      console.log(result?.data?.hello);
    });
  }

  open () {
    this.themeSettingService.open()
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
