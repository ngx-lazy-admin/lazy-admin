// import * as faker from 'faker/locale/en_US';

export const menu = [
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
      }
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
        label: '角色管理',
        link: '/system/role',
        badge: '',
      },
      {
        id: '',
        label: '表单管理',
        link: '/system/form',
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
        link: '/form/basic',
        badge: '',
      },
      {
        id: '',
        label: '分步表单',
        link: '/form/step',
        badge: '',
      },
      {
        id: '',
        label: '高级表单',
        link: '/form/advanced',
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
        link: 'list/search',
        badge: '',
        children: [
          {
            id: '',
            label: '搜索列表(文章)',
            link: 'list/search/articles',
            badge: '',
          },
          {
            id: '',
            label: '搜索列表(项目)',

            link: 'list/search/articles',
            badge: '',
          },
          {
            id: '',
            label: '搜索列表(应用)',
            link: 'list/search/articles',
            badge: '',
          },
        ]
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
  {
    id: '',
    label: 'Tabs',
    icon: 'warning',
    link: '',
    badge: '',
    children: [
      {
        id: '',
        label: 'one',
        link: '/tabs/one',
        badge: '',
      },
      {
        id: '',
        label: 'two',
        link: '/tabs/two',
        badge: '',
      },
      {
        id: '',
        label: 'three',
        link: '/tabs/three',
        badge: '',
      },
    ]
  },
  {
    id: '',
    label: 'Dashboard',
    icon: 'dashboard',
    link: '',
    badge: '',
    children: [
      {
        id: '',
        label: '分析页1',
        link: '/tabs/one/1',
        icon: 'dashboard',
        badge: '',
        children: [
          {
            id: '',
            label: '分析页11',
            link: '/tabs/one/1',
            icon: 'dashboard',
            badge: '',
          },
          {
            id: '',
            label: '分析页12',
            link: '/tabs/one/2',
            icon: 'dashboard',
            badge: '',
          },
        ]
      },
      {
        id: '',
        label: '分析页2',
        link: '/tabs/two',
        icon: 'dashboard',
        isTabs: true,
        badge: '',
        children: [
          {
            id: '',
            label: '分析页21',
            link: '/tabs/two/1',
            icon: 'dashboard',
            badge: '',
          },
          {
            id: '',
            label: '分析页22',
            link: '/tabs/two/2',
            icon: 'dashboard',
            badge: '',
          },
        ]
      },
      {
        id: '',
        label: '工作台',
        link: '/tabs/three',
        badge: '',
      },
      {
        id: '',
        label: '编辑器',
        link: '/tabs/four',
        badge: '',
      },
      {
        id: '',
        label: '弹窗管理',
        link: '/tabs/five',
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
]
