import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../interfaces/hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];

    const user = {
      id: 11,
      name: 'Dr Nice'
    }

    const menu = [
      {
        id: '',
        label: 'Dashboard',
        icon: 'dashboard',
        link: '',
        badge: '',
        children: [
          {
            id: '',
            label: '分析页',
            link: '/dashboard/analysis',
            icon: 'dashboard',
            badge: '',
          },
          {
            id: '',
            label: '监控页',
            link: '/dashboard/monitor',
            badge: '',
          },
          {
            id: '',
            label: '工作台',
            link: '/dashboard/workplace',
            badge: '',
          },
          {
            id: '',
            label: '编辑器',
            link: '/dashboard/code',
            badge: '',
          },
          {
            id: '',
            label: '弹窗管理',
            link: '/dashboard/modal',
            badge: '',
          },
          {
            id: '',
            label: '表单管理',
            link: '/dashboard/form',
            badge: '',
          },
          {
            id: '',
            label: '表格管理',
            link: '/dashboard/table',
            badge: '',
          },
          {
            id: '',
            label: '表格管理',
            link: '/dashboard/charts',
            badge: '',
          },
        ]
      },
      {
        id: '',
        label: '系统管理',
        icon: 'setting',
        link: 'system',
        badge: '',
        children: [
          {
            id: '',
            label: '用户管理',
            link: '/system/user',
            badge: '',
          },
          {
            id: '',
            label: '菜单管理',
            link: '/system/menu',
            badge: '',
          },
          {
            id: '',
            label: '表单管理',
            link: '/system/form',
            badge: '',
          },
          {
            id: '',
            label: '弹窗管理',
            link: '/system/modal',
            badge: '',
          }   
        ]
      },
      {
        id: '',
        label: '表单页',
        icon: 'form',
        link: '',
        badge: '',
        children: [
          {
            id: '',
            label: '基础表单',
            link: '/form/basic-form',
            badge: '',
          },
          {
            id: '',
            label: '分步表单',
            link: '/form/step-form',
            badge: '',
          },
          {
            id: '',
            label: '高级表单',
            link: '/form/advanced-form',
            badge: '',
          }
          
        ]
      },
      {
        id: '',
        label: '列表页',
        icon: 'table',
        link: '',
        badge: '',
        children: [
          {
            id: '',
            label: '搜索列表',
            link: 'list/search-list',
            badge: '',
          },
          {
            id: '',
            label: '查询表格',
            link: 'list/table-list',
            badge: '',
          },
          {
            id: '',
            label: '标准卡片',
            link: 'list/basic-list',
            badge: '',
          },
          {
            id: '',
            label: '卡片列表',
            link: 'list/card-list',
            badge: '',
          }
        ]
      },
      {
        id: '',
        label: '详情页',
        icon: 'profile',
        link: '',
        badge: '',
        children: [
          {
            id: '',
            label: '基础详情页',
            link: '/profile/basic',
            badge: '',
          },
          {
            id: '',
            label: '高级详情页',
            link: '/profile/advanced',
            badge: '',
          }
        ]
      },
      {
        id: '',
        label: '结果页',
        icon: 'check-circle',
        link: '',
        badge: '',
        children: [
          {
            id: '',
            label: '成功页',
            link: '/result/success',
            badge: '',
          },
          {
            id: '',
            label: '失败页',
            link: '/result/fail',
            badge: '',
          },
        ]
      },
      {
        id: '',
        label: '异常页',
        icon: 'warning',
        link: '',
        badge: '',
        children: [
          {
            id: '',
            label: '403',
            link: '/exception/403',
            badge: '',
          },
          {
            id: '',
            label: '404',
            link: '/exception/404',
            badge: '',
          },
          {
            id: '',
            label: '405',
            link: '/exception/405',
            badge: '',
          },
        ]
      },
      {
        id: '',
        label: 'Bootstarp',
        icon: 'warning',
        link: '',
        badge: '',
        children: [
          {
            id: '',
            label: '403',
            link: '/exception/403',
            badge: '',
          },
          {
            id: '',
            label: '404',
            link: '/exception/404',
            badge: '',
          },
          {
            id: '',
            label: '405',
            link: '/exception/405',
            badge: '',
          },
        ]
      },
    ]

    return { heroes, user, menu };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}