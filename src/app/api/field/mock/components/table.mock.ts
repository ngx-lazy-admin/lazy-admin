import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

export const TableMockFields = [
  {
    type: 'group',
    className: "d-block mb-3 col-12",
    templateOptions: {
    },
    fieldGroup: [
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: '基本用法',
          description: '简单的表格，最后一列是各种操作。',
        },
        fieldGroup: [
          {
            type: 'table',
            key: 'list',
            className: "col-12 d-block",
            templateOptions: {
              showPagination: true,
              pageSize: 20,
              bodyClass: 'row',
              bordered: false,
              bodyStyle: {
                paddingBottom: 0
              },
            },
            fieldArray: {
              fieldGroup: [
                {
                  key: 'id',
                  type: 'text',
                  wrappers: ['table'],
                  templateOptions: {
                    label: 'id',
                  },
                  hide: true
                },
                {
                  key: 'name',
                  type: 'input',
                  wrappers: ['table'],
                  templateOptions: {
                    label: 'Name',
                  }
                },
                {
                  key: 'age',
                  type: 'template',
                  wrappers: ['table'],
                  templateOptions: {
                    label: 'Age',
                  }
                },
                {
                  key: 'address',
                  type: 'template',
                  wrappers: ['table'],
                  templateOptions: {
                    label: 'Address',
                    layout : 'horizontal'
                  }
                },
                {
                  type: 'list-actions',
                  className: '',
                  templateOptions: {
                    maxTagCount: 3,
                    label: 'Action',
                    actionOptions: [
                      {
                        text: 'Action 一 John Brown',
                        click: `(field, _this) => {
                          _this.message.success(field?.model?.name)
                        }`
                      }, {
                        text: 'Delete'
                      }
                    ],
                  }
                }              
              ]
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: '选择和操作',
          description: '第一列是联动的选择框，增加 [nzChecked] 后，th 获得和 nz-checkbox 一样的功能，选择后进行操作，完成后清空选择，请注意：数据逻辑需要自行控制。',
        },
        fieldGroup: [
          {
            type: 'table',
            key: 'list',
            className: "col-12 d-block",
            templateOptions: {
              showPagination: true,
              pageSize: 20,
              bodyClass: 'row',
              bordered: false,
              bodyStyle: {
                paddingBottom: 0
              },
            },
            fieldArray: {
              fieldGroup: [
                {
                  key: 'id',
                  type: 'text',
                  wrappers: ['table'],
                  templateOptions: {
                    label: 'id',
                  },
                  hide: true
                },
                {
                  key: 'name',
                  type: 'template',
                  wrappers: ['table'],
                  templateOptions: {
                    label: 'Name',
                  }
                },
                {
                  key: 'age',
                  type: 'template',
                  wrappers: ['table'],
                  templateOptions: {
                    label: 'Age',
                  }
                },
                {
                  key: 'address',
                  type: 'template',
                  wrappers: ['table'],
                  templateOptions: {
                    label: 'Address',
                    layout : 'horizontal'
                  }
                },
                {
                  type: 'list-actions',
                  className: '',
                  templateOptions: {
                    maxTagCount: 3,
                    label: 'Action',
                    actionOptions: [
                      {
                        text: 'Action 一 John Brown'
                      }, {
                        text: 'Delete'
                      }
                    ],
                  }
                }              
              ]
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: '基本用法',
          description: '简单的表格，最后一列是各种操作。',
        },
        fieldGroup: [
          {
            type: 'table',
            key: 'list',
            className: "col-12 d-block",
            templateOptions: {
              showPagination: true,
              pageSize: 20,
              bodyClass: 'row',
              bordered: false,
              bodyStyle: {
                paddingBottom: 0
              },
            },
            fieldArray: {
              fieldGroup: [
                {
                  key: 'id',
                  type: 'text',
                  wrappers: ['table'],
                  templateOptions: {
                    label: 'id',
                  },
                  hide: true
                },
                {
                  key: 'name',
                  type: 'template',
                  wrappers: ['table'],
                  templateOptions: {
                    label: 'Name',
                  }
                },
                {
                  key: 'age',
                  type: 'template',
                  wrappers: ['table'],
                  templateOptions: {
                    label: 'Age',
                  }
                },
                {
                  key: 'address',
                  type: 'template',
                  wrappers: ['table'],
                  templateOptions: {
                    label: 'Address',
                    layout : 'horizontal'
                  }
                },
                {
                  type: 'list-actions',
                  className: '',
                  templateOptions: {
                    maxTagCount: 3,
                    label: 'Action',
                    actionOptions: [
                      {
                        text: 'Action 一 John Brown'
                      }, {
                        text: 'Delete'
                      }
                    ],
                  }
                }              
              ]
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: '基本用法',
          description: '简单的表格，最后一列是各种操作。',
        },
        fieldGroup: [
          {
            type: 'table',
            key: 'list',
            className: "col-12 d-block",
            templateOptions: {
              showPagination: true,
              pageSize: 20,
              bodyClass: 'row',
              bordered: false,
              bodyStyle: {
                paddingBottom: 0
              },
            },
            fieldArray: {
              fieldGroup: [
                {
                  key: 'id',
                  type: 'text',
                  wrappers: ['table'],
                  templateOptions: {
                    label: 'id',
                  },
                  hide: true
                },
                {
                  key: 'name',
                  type: 'template',
                  wrappers: ['table'],
                  templateOptions: {
                    label: 'Name',
                  }
                },
                {
                  key: 'age',
                  type: 'template',
                  wrappers: ['table'],
                  templateOptions: {
                    label: 'Age',
                  }
                },
                {
                  key: 'address',
                  type: 'template',
                  wrappers: ['table'],
                  templateOptions: {
                    label: 'Address',
                    layout : 'horizontal'
                  }
                },
                {
                  type: 'list-actions',
                  className: '',
                  templateOptions: {
                    maxTagCount: 3,
                    label: 'Action',
                    actionOptions: [
                      {
                        text: 'Action 一 John Brown'
                      }, {
                        text: 'Delete'
                      }
                    ],
                  }
                }              
              ]
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: '基本用法',
          description: '简单的表格，最后一列是各种操作。',
        },
        fieldGroup: [
          {
            type: 'table',
            key: 'list',
            className: "col-12 d-block",
            templateOptions: {
              showPagination: true,
              pageSize: 20,
              bodyClass: 'row',
              bordered: false,
              bodyStyle: {
                paddingBottom: 0
              },
            },
            fieldArray: {
              fieldGroup: [
                {
                  key: 'id',
                  type: 'text',
                  wrappers: ['table'],
                  templateOptions: {
                    label: 'id',
                  },
                  hide: true
                },
                {
                  key: 'name',
                  type: 'template',
                  wrappers: ['table'],
                  templateOptions: {
                    label: 'Name',
                  }
                },
                {
                  key: 'age',
                  type: 'template',
                  wrappers: ['table'],
                  templateOptions: {
                    label: 'Age',
                  }
                },
                {
                  key: 'address',
                  type: 'template',
                  wrappers: ['table'],
                  templateOptions: {
                    label: 'Address',
                    layout : 'horizontal'
                  }
                },
                {
                  type: 'list-actions',
                  className: '',
                  templateOptions: {
                    maxTagCount: 3,
                    label: 'Action',
                    actionOptions: [
                      {
                        text: 'Action 一 John Brown'
                      }, {
                        text: 'Delete'
                      }
                    ],
                  }
                }              
              ]
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: '基本用法',
          description: '简单的表格，最后一列是各种操作。',
        },
        fieldGroup: [
          {
            type: 'table',
            key: 'list',
            className: "col-12 d-block",
            templateOptions: {
              showPagination: true,
              pageSize: 20,
              bodyClass: 'row',
              bordered: false,
              bodyStyle: {
                paddingBottom: 0
              },
            },
            fieldArray: {
              fieldGroup: [
                {
                  key: 'id',
                  type: 'text',
                  wrappers: ['table'],
                  templateOptions: {
                    label: 'id',
                  },
                  hide: true
                },
                {
                  key: 'name',
                  type: 'template',
                  wrappers: ['table'],
                  templateOptions: {
                    label: 'Name',
                  }
                },
                {
                  key: 'age',
                  type: 'template',
                  wrappers: ['table'],
                  templateOptions: {
                    label: 'Age',
                  }
                },
                {
                  key: 'address',
                  type: 'template',
                  wrappers: ['table'],
                  templateOptions: {
                    label: 'Address',
                    layout : 'horizontal'
                  }
                },
                {
                  type: 'list-actions',
                  className: '',
                  templateOptions: {
                    maxTagCount: 3,
                    label: 'Action',
                    actionOptions: [
                      {
                        text: 'Action 一 John Brown'
                      }, {
                        text: 'Delete'
                      }
                    ],
                  }
                }              
              ]
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: '基本用法',
          description: '简单的表格，最后一列是各种操作。',
        },
        fieldGroup: [
          {
            type: 'table',
            key: 'list',
            className: "col-12 d-block",
            templateOptions: {
              showPagination: true,
              pageSize: 20,
              bodyClass: 'row',
              bordered: false,
              bodyStyle: {
                paddingBottom: 0
              },
            },
            fieldArray: {
              fieldGroup: [
                {
                  key: 'id',
                  type: 'text',
                  wrappers: ['table'],
                  templateOptions: {
                    label: 'id',
                  },
                  hide: true
                },
                {
                  key: 'name',
                  type: 'template',
                  wrappers: ['table'],
                  templateOptions: {
                    label: 'Name',
                  }
                },
                {
                  key: 'age',
                  type: 'template',
                  wrappers: ['table'],
                  templateOptions: {
                    label: 'Age',
                  }
                },
                {
                  key: 'address',
                  type: 'template',
                  wrappers: ['table'],
                  templateOptions: {
                    label: 'Address',
                    layout : 'horizontal'
                  }
                },
                {
                  type: 'list-actions',
                  className: '',
                  templateOptions: {
                    maxTagCount: 3,
                    label: 'Action',
                    actionOptions: [
                      {
                        text: 'Action 一 John Brown'
                      }, {
                        text: 'Delete'
                      }
                    ],
                  }
                }              
              ]
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: '基本用法',
          description: '简单的表格，最后一列是各种操作。',
        },
        fieldGroup: [
          {
            type: 'table',
            key: 'list',
            className: "col-12 d-block",
            templateOptions: {
              showPagination: true,
              pageSize: 20,
              bodyClass: 'row',
              bordered: false,
              bodyStyle: {
                paddingBottom: 0
              },
            },
            fieldArray: {
              fieldGroup: [
                {
                  key: 'id',
                  type: 'text',
                  wrappers: ['table'],
                  templateOptions: {
                    label: 'id',
                  },
                  hide: true
                },
                {
                  key: 'name',
                  type: 'template',
                  wrappers: ['table'],
                  templateOptions: {
                    label: 'Name',
                  }
                },
                {
                  key: 'age',
                  type: 'template',
                  wrappers: ['table'],
                  templateOptions: {
                    label: 'Age',
                  }
                },
                {
                  key: 'address',
                  type: 'template',
                  wrappers: ['table'],
                  templateOptions: {
                    label: 'Address',
                    layout : 'horizontal'
                  }
                },
                {
                  type: 'list-actions',
                  className: '',
                  templateOptions: {
                    maxTagCount: 3,
                    label: 'Action',
                    actionOptions: [
                      {
                        text: 'Action 一 John Brown'
                      }, {
                        text: 'Delete'
                      }
                    ],
                  }
                }              
              ]
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: '基本用法',
          description: '简单的表格，最后一列是各种操作。',
        },
        fieldGroup: [
          {
            type: 'table',
            key: 'list',
            className: "col-12 d-block",
            templateOptions: {
              showPagination: true,
              pageSize: 20,
              bodyClass: 'row',
              bordered: false,
              bodyStyle: {
                paddingBottom: 0
              },
            },
            fieldArray: {
              fieldGroup: [
                {
                  key: 'id',
                  type: 'text',
                  wrappers: ['table'],
                  templateOptions: {
                    label: 'id',
                  },
                  hide: true
                },
                {
                  key: 'name',
                  type: 'template',
                  wrappers: ['table'],
                  templateOptions: {
                    label: 'Name',
                  }
                },
                {
                  key: 'age',
                  type: 'template',
                  wrappers: ['table'],
                  templateOptions: {
                    label: 'Age',
                  }
                },
                {
                  key: 'address',
                  type: 'template',
                  wrappers: ['table'],
                  templateOptions: {
                    label: 'Address',
                    layout : 'horizontal'
                  }
                },
                {
                  type: 'list-actions',
                  className: '',
                  templateOptions: {
                    maxTagCount: 3,
                    label: 'Action',
                    actionOptions: [
                      {
                        text: 'Action 一 John Brown'
                      }, {
                        text: 'Delete'
                      }
                    ],
                  }
                }              
              ]
            }
          }
        ]
      },
      {
        type: 'code-card',
        className: "d-block mb-3 col-12",
        templateOptions: {
          title: '基本用法',
          description: '简单的表格，最后一列是各种操作。',
        },
        fieldGroup: [
          {
            type: 'table',
            key: 'list',
            className: "col-12 d-block",
            templateOptions: {
              showPagination: true,
              pageSize: 20,
              bodyClass: 'row',
              bordered: false,
              bodyStyle: {
                paddingBottom: 0
              },
            },
            fieldArray: {
              fieldGroup: [
                {
                  key: 'id',
                  type: 'text',
                  wrappers: ['table'],
                  templateOptions: {
                    label: 'id',
                  },
                  hide: true
                },
                {
                  key: 'name',
                  type: 'template',
                  wrappers: ['table'],
                  templateOptions: {
                    label: 'Name',
                  }
                },
                {
                  key: 'age',
                  type: 'template',
                  wrappers: ['table'],
                  templateOptions: {
                    label: 'Age',
                  }
                },
                {
                  key: 'address',
                  type: 'template',
                  wrappers: ['table'],
                  templateOptions: {
                    label: 'Address',
                    layout : 'horizontal'
                  }
                },
                {
                  type: 'list-actions',
                  className: '',
                  templateOptions: {
                    maxTagCount: 3,
                    label: 'Action',
                    actionOptions: [
                      {
                        text: 'Action 一 John Brown'
                      }, {
                        text: 'Delete'
                      }
                    ],
                  }
                }              
              ]
            }
          }
        ]
      }
    ]
  },
]