export const menu = [
  {
    id: '1',
    name: 'Dashboard',
    icon: 'dashboard',
    link: '',
    badge: '',
    pid: '0',
    children: [
      {
        id: '1001',
        pid: '1',
        name: '分析页',
        link: '/dashboard/analysis',
        badge: '',
        count: 1
      },
      {
        id: '1002',
        pid: '1',
        name: '监控页',
        link: '/dashboard/monitor',
        badge: '',
      },
      {
        id: '1003',
        pid: '1',
        name: '工作台',
        link: '/dashboard/workplace',
        badge: '',
      }
    ]
  },
  {
    id: '2',
    pid: '0',
    name: '系统管理',
    icon: 'setting',
    link: 'system',
    badge: '',
    children: [
      {
        id: '0201',
        pid: '2',
        name: '用户管理',
        link: '/system/user',
        badge: '',
      },
      {
        id: '0202',
        pid: '2',
        name: '菜单管理',
        link: '/system/menu',
        badge: '',
      },
      {
        id: '0203',
        pid: '2',
        name: '角色管理',
        link: '/system/role',
        badge: '',
      },
      {
        id: '0204',
        pid: '2',
        name: '表单管理',
        link: '/system/form',
        badge: '',
      }
    ]
  },
  {
    id: '3',
    pid: '0',
    name: '表单页',
    icon: 'form',
    link: '',
    badge: '',
    children: [
      {
        id: '0301',
        pid: '3',
        name: '基础表单',
        link: '/form/basic',
        badge: '',
      },
      {
        id: '0302',
        pid: '3',
        name: '分步表单',
        link: '/form/step',
        badge: '',
      },
      {
        id: '0302',
        pid: '3',
        name: '高级表单',
        link: '/form/advanced',
        badge: '',
      } 
    ]
  },
  {
    id: '4',
    pid: '0',
    name: '列表页',
    icon: 'table',
    link: '',
    badge: '',
    children: [
      {
        id: '0401',
        pid: '4',
        name: '搜索列表',
        link: '/list/search',
        badge: '',
        children: [
          {
            id: '040101',
            pid: '0401',
            name: '搜索列表(文章)',
            link: '/list/search/articles',
            badge: '',
          },
          {
            id: '040102',
            pid: '0401', 
            name: '搜索列表(项目)',
            link: '/list/search/project',
            badge: '',
          },
          {
            id: '040103',
            pid: '0401',
            name: '搜索列表(应用)',
            link: '/list/search/applications',
            badge: '',
          },
        ]
      },
      {
        id: '0402',
        pid: '4',
        name: '查询表格',
        link: '/list/table',
        badge: '',
      },
      {
        id: '0403',
        pid: '4',
        name: '标准卡片',
        link: '/list/basic',
        badge: '',
      },
      {
        id: '0404',
        pid: '4',
        name: '卡片列表',
        link: '/list/card',
        badge: '',
      }
    ]
  },
  {
    id: '5',
    pid: '0',
    name: '详情页',
    icon: 'profile',
    link: '',
    badge: '',
    children: [
      {
        id: '0501',
        pid: '5',
        name: '基础详情页',
        link: '/profile/basic',
        badge: '',
      },
      {
        id: '0502',
        pid: '5',
        name: '高级详情页',
        link: '/profile/advanced',
        badge: '',
      }
    ]
  },
  {
    id: '6',
    pid: '0',
    name: '结果页',
    icon: 'check-circle',
    link: '',
    badge: '',
    children: [
      {
        id: '0601',
        pid: '6',
        name: '成功页',
        link: '/result/success',
        badge: '',
      },
      {
        id: '0601',
        pid: '6',
        name: '失败页',
        link: '/result/fail',
        badge: '',
      },
    ]
  },
  {
    id: '7',
    pid: '0',
    name: '异常页',
    icon: 'warning',
    link: '',
    badge: '',
    children: [
      {
        id: '0701',
        pid: '7',
        name: '403',
        link: '/exception/403',
        badge: '',
      },
      {
        id: '0702',
        pid: '7',
        name: '404',
        link: '/exception/404',
        badge: '',
      },
      {
        id: '0703',
        pid: '7',
        name: '405',
        link: '/exception/405',
        badge: '',
      },
    ]
  },
  {
    id: '8',
    name: '设置页面',
    icon: 'setting',
    link: '',
    badge: '',
    children: [
      {
        id: '0801',
        pid: '8',
        name: '个人中心',
        link: '/setting/user',
        badge: '',
      },
      {
        id: '0802',
        pid: '8',
        name: '个人设置',
        link: '/setting/account',
        badge: '',
      },
    ]
  },
  {
    id: '14',
    pid: '0',
    name: '嵌套页面',
    icon: 'edit',
    link: '',
    badge: '',
    children: [
      {
        id: '1401',
        pid: '14',
        name: 'iframe',
        link: '/iframe/iframe',
        badge: '',
      },
      {
        id: '1402',
        pid: '14',
        name: 'qiankun',
        link: '/iframe/qiankun',
        badge: '',
      }
    ]
  },
  {
    id: '9',
    pid: '0',
    name: '编辑器',
    icon: 'edit',
    link: '',
    badge: '',
    children: [
      {
        id: '0901',
        pid: '9',
        name: '富文本编辑器',
        link: '/editor/editor',
        badge: '',
      },
      {
        id: '0901',
        pid: '9',
        name: 'Markdown编辑器',
        link: '/editor/markdonw',
        badge: '',
      },
    ]
  },
  {
    id: '10',
    pid: '0',
    name: '工具',
    icon: 'warning',
    link: '',
    badge: '',
    children: [
      {
        id: '1001',
        pid: '10',
        name: '内嵌页面',
        link: '/tabs/one',
        badge: '',
      },
      {
        id: '1002',
        pid: '10',
        name: 'two',
        link: '/tabs/two',
        badge: '',
      },
      {
        id: '1003',
        pid: '10',
        name: 'three',
        link: '/tabs/three',
        badge: '',
      },
    ]
  },
  {
    id: '11',
    name: 'ant-design',
    icon: 'ant-design',
    link: '',
    badge: '',
    children: [
      {
        pid: '11',
        id: '1101',
        name: 'Autocomplete',
        link: '/components/autocomplete',
        badge: '',
      },
      {
        id: '1102',
        pid: '11',
        name: 'Button',
        link: '/components/button',
        badge: '',
      },
      {
        id: '1103',
        pid: '11',
        name: 'Card',
        link: '/components/card',
        badge: '',
      },
      {
        id: '1104',
        pid: '11',
        name: 'Cascader',
        link: '/components/cascader',
        badge: '',
      },
      {
        id: '1105',
        pid: '11',
        name: 'Checkbox',
        link: '/components/checkbox',
        badge: '',
      },
      {
        id: '1106',
        pid: '11',
        name: 'Collapse',
        link: '/components/collapse',
        badge: '',
      },
      {
        id: '1107',
        pid: '11',
        name: 'date-picker',
        link: '/components/date-picker',
        badge: '',
      },
      {
        id: '1108',
        pid: '11',
        name: 'descriptions',
        link: '/components/descriptions',
        badge: '',
      },
      {
        id: '1109',
        pid: '11',
        name: 'dropdown',
        link: '/components/dropdown',
        badge: '',
      },
      {
        id: '1110',
        pid: '11',
        name: 'input',
        link: '/components/input',
        badge: '',
      },
      {
        id: '1111',
        pid: '11',
        name: 'input-number',
        link: '/components/input-numper',
        badge: '',
      },
      {
        id: '1112',
        pid: '11',
        name: 'list',
        link: '/components/list',
        badge: '',
      },
      {
        id: '1113',
        pid: '11',
        name: 'mention',
        link: '/components/mention',
        badge: '',
      },
      {
        id: '1114',
        pid: '11',
        name: 'pagination',
        link: '/components/pagination',
        badge: '',
      },
      {
        id: '1115',
        pid: '11',
        name: 'radio',
        link: '/components/radio',
        badge: '',
      },
      {
        id: '1116',
        pid: '11',
        name: 'rate',
        link: '/components/rate',
        badge: '',
      },
      {
        id: '1117',
        pid: '11',
        name: 'repeat',
        link: '/components/repeat',
        badge: '',
      },
      {
        id: '1118',
        pid: '11',
        name: 'result',
        link: '/components/result',
        badge: '',
      },
      {
        id: '1119',
        pid: '11',
        name: 'select',
        link: '/components/select',
        badge: '',
      },
      {
        id: '1120',
        pid: '11',
        name: 'slider',
        link: '/components/slider',
        badge: '',
      },
      {
        id: '1121',
        pid: '11',
        name: 'steps',
        link: '/components/steps',
        badge: '',
      },
      {
        id: '1122',
        pid: '11',
        name: 'switch',
        link: '/components/switch',
        badge: '',
      },
      {
        id: '1123',
        pid: '11',
        name: 'table',
        link: '/components/table',
        badge: '',
      },
      {
        id: '1124',
        pid: '11',
        name: 'tabs',
        link: '/components/tabs',
        badge: '',
      },
      {
        id: '1125',
        pid: '11',
        name: 'tag',
        link: '/components/tag',
        badge: '',
      },
      {
        pid: '11',
        id: '1126',
        name: 'template',
        link: '/components/template',
        badge: '',
      },
      {
        pid: '11',
        id: '1127',
        name: 'time-picker',
        link: '/components/time-picker',
        badge: '',
      },
      {
        pid: '11',
        id: '1128',
        name: 'transfer',
        link: '/components/transfer',
        badge: '',
      },
      {
        id: '1129',
        pid: '11',
        name: 'tree-select',
        link: '/components/tree-select',
        badge: '',
      },
      {
        id: '1130',
        pid: '11',
        name: 'upload',
        link: '/components/upload',
        badge: '',
      }
    ]
  },
  {
    id: '12',
    name: 'Bootstrap Utilities',
    icon: 'warning',
    link: '',
    badge: '',
    children: [
      {
        id: '1201',
        pid: '12',
        name: 'API',
        link: '/bootstrap/api',
        badge: '',
      },
      {
        id: '1202',
        pid: '12',

        name: 'Background',
        link: '/bootstrap/two',
        badge: '',
      },
      {
        id: '1203',
        pid: '12',

        name: 'Borders',
        link: '/bootstrap/borders',
        badge: '',
      },
      {
        id: '1204',
        pid: '12',

        name: 'Colors',
        link: '/bootstrap/colors',
        badge: '',
      },
      {
        id: '1205',
        pid: '12',

        name: 'Display',
        link: '/bootstrap/display',
        badge: '',
      },
      {
        id: '1206',
        pid: '12',

        name: 'Flex',
        link: '/bootstrap/flex',
        badge: '',
      },
      {
        id: '1207',
        pid: '12',

        name: 'Float',
        link: '/bootstrap/float',
        badge: '',
      },
      {
        id: '1208',
        pid: '12',

        name: 'Interactions',
        link: '/bootstrap/interactions',
        badge: '',
      },
      {
        id: '1209',
        pid: '12',

        name: 'Opacity',
        link: '/bootstrap/opacity',
        badge: '',
      },
      {
        id: '1210',
        pid: '12',

        name: 'Overflow',
        link: '/bootstrap/overflow',
        badge: '',
      },
      {
        id: '1211',
        pid: '12',
        name: 'Position',
        link: '/bootstrap/position',
        badge: '',
      },
      {
        id: '1212',
        pid: '12',
        name: 'Shadows',
        link: '/bootstrap/shadows',
        badge: '',
      },
      {
        id: '1213',
        pid: '12',
        name: 'Sizing',
        link: '/bootstrap/sizing',
        badge: '',
      },
      {
        id: '1214',
        pid: '12',
        name: 'Spacing',
        link: '/bootstrap/spacing',
        badge: '',
      },
      {
        id: '1215',
        pid: '12',
        name: 'Text',
        link: '/bootstrap/Text',
        badge: '',
      },
      {
        id: '1216',
        pid: '12',
        name: 'Vertical align',
        link: '/bootstrap/vertical-align',
        badge: '',
      },
      {
        id: '1217',
        pid: '12',
        name: 'Visibility',
        link: '/bootstrap/visibility',
        badge: '',
      },
    ]
  },
]
