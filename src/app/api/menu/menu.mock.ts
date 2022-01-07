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
        count: 1
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
        link: '/list/search',
        badge: '',
        children: [
          {
            id: '',
            label: '搜索列表(文章)',
            link: '/list/search/articles',
            badge: '',
          },
          {
            id: '',
            label: '搜索列表(项目)',

            link: '/list/search/project',
            badge: '',
          },
          {
            id: '',
            label: '搜索列表(应用)',
            link: '/list/search/applications',
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
    label: '设置页面',
    icon: 'setting',
    link: '',
    badge: '',
    children: [
      {
        id: '',
        label: '个人中心',
        link: '/setting/user',
        badge: '',
      },
      {
        id: '',
        label: '个人设置',
        link: '/setting/account',
        badge: '',
      },
    ]
  },
  {
    id: '',
    label: '编辑器',
    icon: 'edit',
    link: '',
    badge: '',
    children: [
      {
        id: '',
        label: '富文本编辑器',
        link: '/editor/editor',
        badge: '',
      },
      {
        id: '',
        label: 'Markdown编辑器',
        link: '/editor/markdonw',
        badge: '',
      },
    ]
  },
  {
    id: '',
    label: '工具',
    icon: 'warning',
    link: '',
    badge: '',
    children: [
      {
        id: '',
        label: '内嵌页面',
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
    label: 'ant-design',
    icon: 'ant-design',
    link: '',
    badge: '',
    children: [
      {
        id: '',
        label: 'Autocomplete',
        link: '/components/autocomplete',
        badge: '',
      },
      {
        id: '',
        label: 'Button',
        link: '/components/button',
        badge: '',
      },
      {
        id: '',
        label: 'Card',
        link: '/components/card',
        badge: '',
      },
      {
        id: '',
        label: 'Cascader',
        link: '/components/cascader',
        badge: '',
      },
      {
        id: '',
        label: 'Checkbox',
        link: '/components/checkbox',
        badge: '',
      },
      {
        id: '',
        label: 'Collapse',
        link: '/components/collapse',
        badge: '',
      },
      {
        id: '',
        label: 'date-picker',
        link: '/components/date-picker',
        badge: '',
      },
      {
        id: '',
        label: 'descriptions',
        link: '/components/descriptions',
        badge: '',
      },
      {
        id: '',
        label: 'dropdown',
        link: '/components/dropdown',
        badge: '',
      },
      {
        id: '',
        label: 'input',
        link: '/components/input',
        badge: '',
      },
      {
        id: '',
        label: 'input-number',
        link: '/components/input-numper',
        badge: '',
      },
      {
        id: '',
        label: 'list',
        link: '/components/list',
        badge: '',
      },
      {
        id: '',
        label: 'mention',
        link: '/components/mention',
        badge: '',
      },
      {
        id: '',
        label: 'pagination',
        link: '/components/pagination',
        badge: '',
      },
      {
        id: '',
        label: 'radio',
        link: '/components/radio',
        badge: '',
      },
      {
        id: '',
        label: 'rate',
        link: '/components/rate',
        badge: '',
      },
      {
        id: '',
        label: 'repeat',
        link: '/components/repeat',
        badge: '',
      },
      {
        id: '',
        label: 'result',
        link: '/components/result',
        badge: '',
      },
      {
        id: '',
        label: 'select',
        link: '/components/select',
        badge: '',
      },
      {
        id: '',
        label: 'slider',
        link: '/components/slider',
        badge: '',
      },
      {
        id: '',
        label: 'steps',
        link: '/components/steps',
        badge: '',
      },
      {
        id: '',
        label: 'switch',
        link: '/components/switch',
        badge: '',
      },
      {
        id: '',
        label: 'table',
        link: '/components/table',
        badge: '',
      },
      {
        id: '',
        label: 'tabs',
        link: '/components/tabs',
        badge: '',
      },
      {
        id: '',
        label: 'tag',
        link: '/components/tag',
        badge: '',
      },
      {
        id: '',
        label: 'template',
        link: '/components/template',
        badge: '',
      },
      {
        id: '',
        label: 'time-picker',
        link: '/components/time-picker',
        badge: '',
      },
      {
        id: '',
        label: 'transfer',
        link: '/components/transfer',
        badge: '',
      },
      {
        id: '',
        label: 'tree-select',
        link: '/components/tree-select',
        badge: '',
      },
      {
        id: '',
        label: 'upload',
        link: '/components/upload',
        badge: '',
      }
    ]
  },
  {
    id: '',
    label: 'Bootstrap Utilities',
    icon: 'warning',
    link: '',
    badge: '',
    children: [
      {
        id: '',
        label: 'API',
        link: '/bootstrap/api',
        badge: '',
      },
      {
        id: '',
        label: 'Background',
        link: '/bootstrap/two',
        badge: '',
      },
      {
        id: '',
        label: 'Borders',
        link: '/bootstrap/borders',
        badge: '',
      },
      {
        id: '',
        label: 'Colors',
        link: '/bootstrap/colors',
        badge: '',
      },
      {
        id: '',
        label: 'Display',
        link: '/bootstrap/display',
        badge: '',
      },
      {
        id: '',
        label: 'Flex',
        link: '/bootstrap/flex',
        badge: '',
      },
      {
        id: '',
        label: 'Float',
        link: '/bootstrap/float',
        badge: '',
      },
      {
        id: '',
        label: 'Interactions',
        link: '/bootstrap/interactions',
        badge: '',
      },
      {
        id: '',
        label: 'Opacity',
        link: '/bootstrap/opacity',
        badge: '',
      },
      {
        id: '',
        label: 'Overflow',
        link: '/bootstrap/overflow',
        badge: '',
      },
      {
        id: '',
        label: 'Position',
        link: '/bootstrap/position',
        badge: '',
      },
      {
        id: '',
        label: 'Shadows',
        link: '/bootstrap/shadows',
        badge: '',
      },
      {
        id: '',
        label: 'Sizing',
        link: '/bootstrap/sizing',
        badge: '',
      },
      {
        id: '',
        label: 'Spacing',
        link: '/bootstrap/spacing',
        badge: '',
      },
      {
        id: '',
        label: 'Text',
        link: '/bootstrap/Text',
        badge: '',
      },
      {
        id: '',
        label: 'Vertical align',
        link: '/bootstrap/vertical-align',
        badge: '',
      },
      {
        id: '',
        label: 'Visibility',
        link: '/bootstrap/visibility',
        badge: '',
      },
    ]
  },
]
