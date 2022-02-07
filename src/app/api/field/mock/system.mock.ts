
export const system = [
  {
    id: 'user',
    fields: [
      {
        id: 'user',
        type: 'steps',
        key: 'name',
        className: "w-50 d-block",
        wrappers: ['inline'],
        templateOptions: {
          label: "姓名",
          required: true,
          placeholder: '姓名',
          readonly: true,
          nzShowArrow: false,
          status: 'wait',
          configOptions: [
            {
              label: 'Finished',
              description: 'This is a description.',
              subtitle: 'nzSubtitle'
            },
            {
              label: 'In Progress',
              description: 'This is a description.'
            },
            {
              label: 'Waiting',
              description: 'This is a description.'
            },
          ]
        }
      },
    ],
    info: {
      title: '用户管理',
      content: '页面数据为 Mock 示例数据，非真实数据。'
    }
  },
  {
    id: 'menu',
    fields: [
      {
        id: 'user',
        type: 'steps',
        key: 'name',
        className: "w-50 d-block",
        wrappers: ['inline'],
        templateOptions: {
          label: "姓名",
          required: true,
          placeholder: '姓名',
          readonly: true,
          nzShowArrow: false,
          status: 'wait',
          configOptions: [
            {
              label: 'Finished',
              description: 'This is a description.',
              subtitle: 'nzSubtitle'
            },
            {
              label: 'In Progress',
              description: 'This is a description.'
            },
            {
              label: 'Waiting',
              description: 'This is a description.'
            },
          ]
        }
      },
    ],
    info: {
      title: '菜单权限管理',
      content: '页面数据为 Mock 示例数据，非真实数据。'
    }
  },
  {
    id: 'role',
    fields: [
      {
        id: 'user',
        type: 'steps',
        key: 'name',
        className: "w-50 d-block",
        wrappers: ['inline'],
        templateOptions: {
          label: "姓名",
          required: true,
          placeholder: '姓名',
          readonly: true,
          nzShowArrow: false,
          status: 'wait',
          configOptions: [
            {
              label: 'Finished',
              description: 'This is a description.',
              subtitle: 'nzSubtitle'
            },
            {
              label: 'In Progress',
              description: 'This is a description.'
            },
            {
              label: 'Waiting',
              description: 'This is a description.'
            },
          ]
        }
      },
    ],
    info: {
      title: '角色权限管理',
      content: '页面数据为 Mock 示例数据，非真实数据。'
    }
  },
  {
    id: 'form',
    fields: [
      {
        id: 'user',
        type: 'steps',
        key: 'name',
        className: "w-50 d-block",
        wrappers: ['inline'],
        templateOptions: {
          label: "姓名",
          required: true,
          placeholder: '姓名',
          readonly: true,
          nzShowArrow: false,
          status: 'wait',
          configOptions: [
            {
              label: 'Finished',
              description: 'This is a description.',
              subtitle: 'nzSubtitle'
            },
            {
              label: 'In Progress',
              description: 'This is a description.'
            },
            {
              label: 'Waiting',
              description: 'This is a description.'
            },
          ]
        }
      },
    ],
    info: {
      title: '表单管理',
      content: '表单设计和分析'
    }
  }
]
