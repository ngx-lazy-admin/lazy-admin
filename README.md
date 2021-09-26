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


新建一个接口
ng g interface menu

--change-detection 在新组件中使用的变更检测策略。

添加 AppRoutingModule

ng generate module app-routing --flat --module=app 

--flat 把这个文件放进了 src/app 中，而不是单独的目录中。
--module=app 告诉 CLI 把它注册到 AppModule 的 imports 数组中。


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





