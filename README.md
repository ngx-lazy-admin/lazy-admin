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

新建一个过滤器
ng generate pipe user

新建一个服务
ng generate pipe service

添加mock数据
yarn add angular-in-memory-web-api --save


# todo

- 拦截post请求, 获取通知信息
- 使用service实现单向数据流
    - 用户信息
    - 通知信息
    - 菜单栏信息
    - 配置信息

# 添加bootstrap-utilities
    "./node_modules/bootstrap/dist/css/bootstrap-utilities.min.css"




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


