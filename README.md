# GoAdminNg

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

新建一个控制面板模块
ng generate module chart --route chart --module app.module

ng generate module list --route list --module app.module

ng generate module modal --route modal --module app.module

ng generate module form --route form --module app.module

ng generate module exception --route exception --module app.module

ng generate module pages/exception --route exception --module app.module

ng generate module pages/system --route system --module app.module

ng generate module pages/code --route code --module app.module


新建一个过滤器
ng generate pipe user

新建一个服务
ng generate pipe service

添加mock数据
yarn add angular-in-memory-web-api --save

新建一个菜单组件
ng g component layout/basic/menus --skip-import --change-detection OnPush --view-encapsulation none

ng g component layout/basic/footer-bar --skip-import --change-detection OnPush --view-encapsulation ""

ng g component layout/basic/header-tabset --skip-import --change-detection OnPush

ng g component layout/basic/header-tabset --skip-import --change-detection OnPush


ng g component pages/list/test --skip-import --change-detection OnPush


ng g component layout/basic/search/search-item --skip-import --change-detection OnPush

生成路由守卫
ng g guard guards/routeGuard


新建一个接口
ng g interface menu

--change-detection 在新组件中使用的变更检测策略。

添加 AppRoutingModule

ng generate module app-routing --flat --module=app 

--flat 把这个文件放进了 src/app 中，而不是单独的目录中。
--module=app 告诉 CLI 把它注册到 AppModule 的 imports 数组中。

新建一个菜单服务

ng g service services/menu

# 分析页面大小

# todo

- 拦截post请求, 获取通知信息
- 使用service实现单向数据流
    - 用户信息
    - 通知信息
    - 菜单栏信息
    - 配置信息

# 添加bootstrap-utilities
    "./node_modules/bootstrap/dist/css/bootstrap-utilities.min.css"



页面配置器
列表配置器
表单配置器
弹窗配置器

1. 后端生成路由
2. 通过路由获取页面配置
3. 通过数据渲染页面
4. 配置数据缓存 (indexedDB, web SQL)

5. 页面通常由列表，图标，弹窗组成

前端缓存

1. 建立用户表
2. 用户配置表
3. 路由配置表
4. 表单配置表

优点

1. 是一个通过配置生成的微服务系统，可以集成在任何系统中
2. 优先的弹窗系统, 可以通过自由放大，正常，关闭。类似window的操作体验



单页面 + 单接口

### 快捷键设计

打开关闭侧边栏
打开消息通知
搜索
全屏
切换中英文
退出
上一页/下一页 Page Up / Page Down
提交
取消

确定 Enter

退出 Esc 
全选 ctrl + A 
保存 Ctrl + S
搜索 Ctrl + K

历史记录 ctrl + h 
帮助/快捷键 F1


取消全选 

### UI

padding 0.25rem 0.5rem 1rem 1.5rem 3rem => 4px 8px 16px 24px 48px

header => 16 * 2 = 32px + 20px  => 52px  

tab => 36px

88px

4.5rem => 16 * 4.5 = 64 + 8 = 72px

1

### 分析包大小

ng build --prod --stats-json
npm run bundle-report


### 规范

1. 内部私有变量下划线开头


### 一些小需求

双击选中

双击复制

文本添加复制按钮

### 通用的搜索

1. Input输入框
2. InputNumber 数字输入框
3. Select 选择器
4. TimePicker 时间选择框
5. TreeSelect 树选择
6. Cascader级联选择

### 底部栏常见功能

### 批量操作

全选, 反选，确认，提交，取消， 导入, 保存, 全部展开，全部收起, 删除, 驳回，

### 列表常用功能 

1. 查询选择
2. 展示列过滤
3. 搜索过滤
4. 数据导出
5. 刷新
6. 全屏


### 第三方组件库

ng-zorro-antd
bootstarp
quill/slmditor
rxjs
momentjs/dayjs => 待定

lazyload-image
cos-js-sdk-v5 (七牛云/阿里云/腾讯云/华为云)
```

### 环境配置

1. cos 的配置
2. 样式配置
3. 接口配置
4. 路由配置
5. 域名配置
6. 部署配置



xs: '480px',  1
sm: '768px',  2
md: '992px',  3
lg: '1200px', 3
xl: '1600px', 4 =>



常见问题

1. OpenSSL SSL_read: Connection was reset, errno 10054

这是服务器的SSL证书没有经过第三方机构的签署，所以报错。

解决办法：

git config --global http.sslVerify "false"

2. Failed to connect to github.com port 443: Timed out

查询域名ip, https://tool.lu/ip

1. windows
C:\Windows\System32\drivers\etc\hosts

2. linux
/etc/hosts


添加 hosts 地址

# 访问 github 的方式
https://zhuanlan.zhihu.com/p/107334179?ivk_sa=1024320u

127.0.0.1:58641

https://www.jianshu.com/p/b9047a59ffc9

git config --global http.proxy http://127.0.0.1:58641
git config --global https.proxy http://127.0.0.1:58641


- 代办 是要做的
- 通知 
- 消息: 


https://blog.csdn.net/henzhuanxin/article/details/109047195