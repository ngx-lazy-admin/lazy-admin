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

ng build --stats-json
npm run bundle


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

### 访问 github 加速

https://juejin.cn/post/6876715404455051272

60356

- 代办 是要做的
- 通知 
- 消息: 


https://blog.csdn.net/henzhuanxin/article/details/109047195

### git 代理设置

# 设置ss
git config --global http.proxy 'socks5://127.0.0.1:1080'

git config --global https.proxy 'socks5://127.0.0.1:1080'

# 设置代理
git config --global https.proxy http://127.0.0.1:1080

git config --global https.proxy https://127.0.0.1:1080

# 取消代理
git config --global --unset http.proxy

git config --global --unset https.proxy


页面 => 拆分成大组件 => 组件组成页面

git config user.name "John Doe"
git config user.email johndoe@example.com


=> 复杂业务组件 

tab

table

list

desiption

step

card

打开方式有两种，弹窗 和 新标签页


### 跳过库的检查

"skipLibCheck": true,



xxl = "xxl", xl = "xl", lg = "lg",
md = "md",
sm = "sm",
xs = "xs"

xs      sm     md  lg  xl  xxl

isCollapsed

(0, 256)  (90 256)  (90 256)

收起    收起   收起  展开 展开  展开


风格指南
如果你正在寻找关于 Angular 语法、约定和应用组织结构的官方指南，那你就来对了。 本风格指南介绍了提倡的约定，更重要的是，解释了为什么。

风格指南的用词
每个指导原则都会描述好的或者坏的做法，所有指导原则都用同样的风格描述。

指导原则中使用的词汇用来表明推荐的程度。

坚持意味着总是应该遵循的约定。 说"总是"可能显得有点绝对，应该"总是"遵循的指导原则非常少，不过，只有遇到极不寻常的情况才能打破坚持的原则。

考虑表示通常应该遵循的指导原则。 如果你能完全理解指导原则背后的含义，并且有很好的理由违反它，那就改吧。但要注意保持一致。

避免表示你绝对不应该做的事。需要避免的代码范例会有明显的红色标题。

为何？会给出随后的建议的理由。

文件结构约定
在一些代码例子中，有的文件有一个或多个相似名字的配套文件。（例如 hero.component.ts 和 hero.component.html）。

本指南将会使用像 hero.component.ts|html|css|spec 的简写来表示上面描述的多个文件，目的是保持本指南的简洁性，增加描述文件结构时的可读性。

单一职责
对所有的组件、服务等等应用
单一职责原则(SRP)
。这样可以让应用更干净、更易读、更易维护、更易测试。

单一规则
风格 01-01
坚持每个文件只定义一样东西（例如服务或组件）。

考虑把文件大小限制在 400 行代码以内。

为何？单组件文件非常容易阅读、维护，并能防止在版本控制系统里与团队冲突。

为何？单组件文件可以防止一些隐蔽的程序缺陷，当把多个组件合写在同一个文件中时，可能造成共享变量、创建意外的闭包，或者与依赖之间产生意外耦合等情况。

为何？单独的组件通常是该文件默认的导出，可以用路由器实现按需加载。

最关键的是，可以让代码更加可复用、更容易阅读，减少出错的可能性。

下面的负面例子定义了 AppComponent，它来引导应用程序，定义了 Hero 模型对象，并从服务器加载了英雄 ... 所有都在同一个文件。不要这么做。

app/heroes/hero.component.ts
content_copy
/* avoid */
import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

interface Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  template: `
      <h1>{{title}}</h1>
      <pre>{{heroes | json}}</pre>
    `,
  styleUrls: ['app/app.component.css']
})
class AppComponent implements OnInit {
  title = 'Tour of Heroes';

  heroes: Hero[] = [];

  ngOnInit() {
    getHeroes().then(heroes => (this.heroes = heroes));
  }
}

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent],
  exports: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);

const HEROES: Hero[] = [
  { id: 1, name: 'Bombasto' },
  { id: 2, name: 'Tornado' },
  { id: 3, name: 'Magneta' }
];

function getHeroes(): Promise<Hero[]> {
  return Promise.resolve(HEROES); // TODO: get hero data from the server;
}
最好将组件及其支撑部件重新分配到独立的文件。

main.ts
app/app.module.ts
app/app.component.ts
app/heroes/heroes.component.ts
app/heroes/shared/hero.service.ts
app/heroes/shared/hero.model.ts
app/heroes/shared/mock-heroes.ts
content_copy
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
随着应用程序的成长，本法则会变得越来越重要。



小函数
风格 01-02
坚持定义简单函数

考虑限制在 75 行之内。

为何？简单函数更易于测试，特别是当它们只做一件事，只为一个目的服务时。

为何？简单函数促进代码复用。

为何？简单函数更易于阅读。

为何？简单函数更易于维护。

为何？小函数可避免易在大函数中产生的隐蔽性错误，例如与外界共享变量、创建意外的闭包或与依赖之间产生意外耦合等。



命名
命名约定对可维护性和可读性非常重要。本指南为文件名和符号名推荐了一套命名约定。

总体命名原则
风格 02-01
坚持所有符号使用一致的命名规则。

坚持遵循同一个模式来描述符号的特性和类型。推荐的模式为 feature.type.ts。

为何？命名约定提供了一致的方式来查找内容，让你一眼就能找到。 项目的一致性是至关重要的。团队内的一致性也很重要。整个公司的一致性会提供惊人的效率。

为何？命名约定帮助你更快得找到想找的代码，也更容易理解它。

为何？目录名和文件名应该清楚的传递它们的意图。 例如，app/heroes/hero-list.component.ts 包含了一个用来管理英雄列表的组件。



使用点和横杠来分隔文件名
风格 02-02
坚持 在描述性名字中，用横杠来分隔单词。

坚持使用点来分隔描述性名字和类型。

坚持遵循先描述组件特性，再描述它的类型的模式，对所有组件使用一致的类型命名规则。推荐的模式为 feature.type.ts。

坚持使用惯用的后缀来描述类型，包括 *.service、*.component、*.pipe、.module、.directive。 必要时可以创建更多类型名，但必须注意，不要创建太多。

为何？类型名字提供一致的方式来快速的识别文件中有什么。

为何？ 类型名可以让你轻松利用编辑器或者 IDE 的模糊搜索功能找到特定文件类型。

为何？ 像 .service 这样的没有简写过的类型名字，描述清楚，毫不含糊。 像 .srv, .svc, 和 .serv 这样的简写可能令人困惑。

为何？为自动化任务提供模式匹配。



符号名与文件名
风格 02-03
坚持为所有东西使用一致的命名约定，以它们所代表的东西命名。

坚持使用大写驼峰命名法来命名类。

坚持匹配符号名与它所在的文件名。

坚持在符号名后面追加约定的类型后缀（例如 Component、Directive、Module、Pipe、Service）。

坚持在文件名后面追加约定的类型后缀（例如 .component.ts、.directive.ts、.module.ts、.pipe.ts、.service.ts）。

为何？遵循一致的约定可以快速识别和引用不同类型的资产。

符号名

文件名

@Component({ ... })
export class AppComponent { }
app.component.ts

@Component({ ... })
export class HeroesComponent { }
heroes.component.ts

@Component({ ... })
export class HeroListComponent { }
hero-list.component.ts

@Component({ ... })
export class HeroDetailComponent { }
hero-detail.component.ts

@Directive({ ... })
export class ValidationDirective { }
validation.directive.ts

@NgModule({ ... })
export class AppModule
app.module.ts

@Pipe({ name: 'initCaps' })
export class InitCapsPipe implements PipeTransform { }
init-caps.pipe.ts

@Injectable()
export class UserProfileService { }
user-profile.service.ts



服务名
风格 02-04
坚持使用一致的规则命名服务，以它们的特性来命名。

坚持为服务的类名加上 Service 后缀。 例如，获取数据或英雄列表的服务应该命名为 DataService 或 HeroService。

有些词汇显然就是服务，比如那些以“-er”后缀结尾的。比如把记日志的服务命名为 Logger 就比 LoggerService 更好些。需要在你的项目中决定这种特例是否可以接受。 但无论如何，都要尽量保持一致。

为何？提供一致的方式来快速识别和引用服务。

为何？像 Logger 这样的清楚的服务名不需要后缀。

为何？像 Credit 这样的，服务名是名词，需要一个后缀。当不能明显分辨它是服务还是其它东西时，应该添加后缀。

符号名

文件名

@Injectable()
export class HeroDataService { }
hero-data.service.ts

@Injectable()
export class CreditService { }
credit.service.ts

@Injectable()
export class Logger { }
logger.service.ts



引导
风格 02-05
坚持把应用的引导程序和平台相关的逻辑放到名为 main.ts 的文件里。

坚持在引导逻辑中包含错误处理代码。

避免把应用逻辑放在 main.ts 中，而应放在组件或服务里。

为何？应用的启动逻辑遵循一致的约定。

为何？这是从其它技术平台借鉴的常用约定。

main.ts
content_copy
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(success => console.log(`Bootstrap success`))
  .catch(err => console.error(err));


组件选择器
风格 05-02
坚持使用中线命名法（dashed-case）或叫烤串命名法（kebab-case）来命名组件的元素选择器。

为何？让元素名和自定义元素规范保持一致。

app/heroes/shared/hero-button/hero-button.component.ts
content_copy
/* avoid */

@Component({
  selector: 'tohHeroButton',
  templateUrl: './hero-button.component.html'
})
export class HeroButtonComponent {}
app/heroes/shared/hero-button/hero-button.component.ts
app/app.component.html
content_copy
@Component({
  selector: 'toh-hero-button',
  templateUrl: './hero-button.component.html'
})
export class HeroButtonComponent {}


为组件添加自定义前缀
风格 02-07
坚持使用带连字符的小写元素选择器值（例如 admin-users）。

坚持为组件选择器添加自定义前缀。 例如，toh 前缀表示 Tour of Heroes（英雄之旅），而前缀 `admin 表示管理特性区。

坚持使用前缀来识别特性区或者应用程序本身。

为何？防止与其它应用中的组件和原生 HTML 元素发生命名冲突。

为何？更容易在其它应用中推广和共享组件。

为何？组件在 DOM 中更容易被区分出来。

app/heroes/hero.component.ts
content_copy
/* avoid */

// HeroComponent is in the Tour of Heroes feature
@Component({
  selector: 'hero'
})
export class HeroComponent {}
app/users/users.component.ts
content_copy
/* avoid */

// UsersComponent is in an Admin feature
@Component({
  selector: 'users'
})
export class UsersComponent {}
app/heroes/hero.component.ts
content_copy
@Component({
  selector: 'toh-hero'
})
export class HeroComponent {}
app/users/users.component.ts
content_copy
@Component({
  selector: 'admin-users'
})
export class UsersComponent {}


指令选择器
风格 02-06
坚持使用小驼峰形式命名指令的选择器。

为何？可以让指令中的属性名与视图中绑定的属性名保持一致。

为何？ Angular 的 HTML 解析器是大小写敏感的，可以识别小驼峰形式。



Back to top

为指令添加自定义前缀
风格 02-08
坚持为指令的选择器添加自定义前缀（例如前缀 toh 来自 Tour of Heroes）。

坚持用小驼峰形式拼写非元素选择器，除非该选择器用于匹配原生 HTML 属性。

Don't prefix a directive name with ng because that prefix is reserved for Angular and using it could cause bugs that are difficult to diagnose.

为何？防止名字冲突。

Why? Prevents name collisions.

为何？指令更加容易被识别。

app/shared/validate.directive.ts
content_copy
/* avoid */

@Directive({
  selector: '[validate]'
})
export class ValidateDirective {}
app/shared/validate.directive.ts
content_copy
@Directive({
  selector: '[tohValidate]'
})
export class ValidateDirective {}


管道名
风格 02-09
坚持为所有管道使用一致的命名约定，用它们的特性来命名。 管道类名应该使用 UpperCamelCase（类名的通用约定），而相应的 name 字符串应该使用 lowerCamelCase。 name 字符串中不应该使用中线（“中线格式”或“烤串格式”）。

为何？提供一致的方式快速识别和引用管道。

符号名

文件名

@Pipe({ name: 'ellipsis' })
export class EllipsisPipe implements PipeTransform { }
ellipsis.pipe.ts

@Pipe({ name: 'initCaps' })
export class InitCapsPipe implements PipeTransform { }
init-caps.pipe.ts



单元测试文件名
风格 02-10
坚持测试规格文件名与被测试组件文件名相同。

坚持测试规格文件名添加 .spec 后缀。

为何？提供一致的方式来快速识别测试。

为何？提供一个与 karma 或者其它测试运行器相配的命名模式。

测试类型

文件名

组件

heroes.component.spec.ts

hero-list.component.spec.ts

hero-detail.component.spec.ts

服务

logger.service.spec.ts

hero.service.spec.ts

filter-text.service.spec.ts

管道

ellipsis.pipe.spec.ts

init-caps.pipe.spec.ts



端到端（E2E）测试的文件名
风格 02-11
坚持端到端测试规格文件和它们所测试的特性同名，添加 .e2e-spec 后缀。

为何？提供一致的方式快速识别端到端测试文件。

为何？提供一个与测试运行器和构建自动化匹配的模式。

测试类型

文件名

端到端测试

app.e2e-spec.ts

heroes.e2e-spec.ts



Angular NgModule 命名
风格 02-12
坚持为符号名添加 Module 后缀

坚持为文件名添加 .module.ts 扩展名。

坚持用特性名和所在目录命名模块。

为何？提供一致的方式来快速标识和引用模块。

为何？大驼峰命名法是一种命名约定，用来标识可用构造函数实例化的对象。

为何？很容易就能看出这个模块是同名特性的根模块。

坚持为 RoutingModule 类名添加 RoutingModule 后缀。

坚持为 RoutingModule 的文件名添加 -routing.module.ts 后缀。

为何？RoutingModule 是一种专门用来配置 Angular 路由器的模块。 “类名和文件名保持一致”的约定使这些模块易于发现和验证。

符号名

文件名

@NgModule({ ... })
export class AppModule { }
app.module.ts

@NgModule({ ... })
export class HeroesModule { }
heroes.module.ts

@NgModule({ ... })
export class VillainsModule { }
villains.module.ts

@NgModule({ ... })
export class AppRoutingModule { }
app-routing.module.ts

@NgModule({ ... })
export class HeroesRoutingModule { }
heroes-routing.module.ts



应用程序结构与 NgModule
准备一个近期实施方案和一个长期的愿景。从零开始，但要考虑应用程序接下来的路往哪儿走。

所有应用程序的源代码都放到名叫 src 的目录里。 所有特性区都在自己的文件夹中，带有它们自己的 NgModule。

所有内容都遵循每个文件一个特性的原则。每个组件、服务和管道都在自己的文件里。 所有第三方程序包保存到其它目录里，而不是 src 目录。 你不会修改它们，所以不希望它们弄乱你的应用程序。 使用本指南介绍的文件命名约定。



LIFT
风格 04-01
坚持组织应用的结构，力求：快速定位 (Locate) 代码、一眼识别 (Identify) 代码、 尽量保持扁平结构 (Flattest) 和尝试 (Try) 遵循 DRY (Do Not Repeat Yourself, 不重复自己) 原则。

坚持四项基本原则定义文件结构，上面的原则是按重要顺序排列的。

为何？LIFT 提供了一致的结构，它具有扩展性强、模块化的特性。因为容易快速锁定代码，提高了开发者的效率。 另外，检查应用结构是否合理的方法是问问自己：我能快速打开与此特性有关的所有文件并开始工作吗？



定位
风格 04-02
坚持直观、简单和快速地定位代码。

为何？ 要想高效的工作，就必须能迅速找到文件，特别是当不知道（或不记得）文件名时。 把相关的文件一起放在一个直观的位置可以节省时间。 富有描述性的目录结构会让你和后面的维护者眼前一亮。



识别
风格 04-03
坚持命名文件到这个程度：看到名字立刻知道它包含了什么，代表了什么。

坚持文件名要具有说明性，确保文件中只包含一个组件。

避免创建包含多个组件、服务或者混合体的文件。

为何？花费更少的时间来查找和琢磨代码，就会变得更有效率。 较长的文件名远胜于较短却容易混淆的缩写名。

当你有一组小型、紧密相关的特性时，违反一物一文件的规则可能会更好， 这种情况下单一文件可能会比多个文件更容易发现和理解。注意这个例外。



扁平
风格 04-04
坚持尽可能保持扁平的目录结构。

考虑当同一目录下达到 7 个或更多个文件时创建子目录。

考虑配置 IDE，以隐藏无关的文件，例如生成出来的 .js 文件和 .js.map 文件等。

为何？没人想要在超过七层的目录中查找文件。扁平的结构有利于搜索。

另一方面，心理学家们相信， 当关注的事物超过 9 个时，人类就会开始感到吃力。 所以，当一个文件夹中的文件有 10 个或更多个文件时，可能就是创建子目录的时候了。

还是根据你自己的舒适度而定吧。 除非创建新文件夹能有显著的价值，否则尽量使用扁平结构。



T-DRY（尽量不重复自己）
风格 04-05
坚持 DRY（Don't Repeat Yourself，不重复自己）。

避免过度 DRY，以致牺牲了阅读性。

为何？虽然 DRY 很重要，但如果要以牺牲 LIFT 的其它原则为代价，那就不值得了。 这也就是为什么它被称为 T-DRY。 例如，把组件命名为 hero-view.component.html 是多余的，因为带有 .html 扩展名的文件显然就是一个视图 (view)。 但如果它不那么显著，或不符合常规，就把它写出来。



总体结构的指导原则
风格 04-06
坚持从零开始，但要考虑应用程序接下来的路往哪儿走。

坚持有一个近期实施方案和一个长期的愿景。

坚持把所有源代码都放到名为 src 的目录里。

坚持如果组件具有多个伴生文件 (.ts、.html、.css 和 .spec)，就为它创建一个文件夹。

为何？ 在早期阶段能够帮助保持应用的结构小巧且易于维护，这样当应用增长时就容易进化了。

为何? 组件通常有四个文件 (*.html、 *.css、 *.ts 和 *.spec.ts)，它们很容易把一个目录弄乱。

下面是符合规范的目录和文件结构

<project root>

src

app

core

exception.service.ts|spec.ts

user-profile.service.ts|spec.ts

heroes

hero

hero.component.ts|html|css|spec.ts

hero-list

hero-list.component.ts|html|css|spec.ts

shared

hero-button.component.ts|html|css|spec.ts

hero.model.ts

hero.service.ts|spec.ts

heroes.component.ts|html|css|spec.ts

heroes.module.ts

heroes-routing.module.ts

shared

shared.module.ts

init-caps.pipe.ts|spec.ts

filter-text.component.ts|spec.ts

filter-text.service.ts|spec.ts

villains

villain

...

villain-list

...

shared

...

villains.component.ts|html|css|spec.ts

villains.module.ts

villains-routing.module.ts

app.component.ts|html|css|spec.ts

app.module.ts

app-routing.module.ts

main.ts

index.html

...

node_modules/...

...

把组件放在专用目录中的方式广受欢迎，对于小型应用，还可以保持组件扁平化（而不是放在专用目录中）。 这样会把四个文件放在现有目录中，也会减少目录的嵌套。无论你如何选择，请保持一致。



按特性组织的目录结构
风格 04-07
坚持根据特性区命名目录。

为何？开发人员可以快速定位代码，扫一眼就能知道每个文件代表什么，目录尽可能保持扁平，既没有重复也没有多余的名字。

为何？ LIFT 原则中包含了所有这些。

为何？遵循 LIFT 原则精心组织内容，避免应用变得杂乱无章。

为何？当有很多文件时（例如 10 个以上），在专用目录型结构中定位它们会比在扁平结构中更容易。

坚持为每个特性区创建一个 NgModule。

为何？ NgModule 使惰性加载可路由的特性变得更容易。

为何？ NgModule 隔离、测试和复用特性更容易。

欲知详情，参阅目录和文件结构的范例



应用的根模块
风格 04-08
坚持在应用的根目录创建一个 NgModule（例如 /src/app）。

为何？每个应用都至少需要一个根 NgModule。

考虑把根模块命名为 app.module.ts。

为何？能让定位和识别根模块变得更容易。

app/app.module.ts
content_copy
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  exports: [ AppComponent ],
  entryComponents: [ AppComponent ]
})
export class AppModule {}


特性模块
风格 04-09
坚持为应用中每个明显的特性创建一个 NgModule。

坚持把特性模块放在与特性区同名的目录中（例如 app/heroes）。

坚持特性模块的文件名应该能反映出特性区的名字和目录（例如 app/heroes/heroes.module.ts）。

坚持特性模块的符号名应该能反映出特性区、目录和文件名（例如在 app/heroes/heroes.module.ts 中定义 HeroesModule）。

为何？特性模块可以对其它模块暴露或隐藏自己的实现。

为何？特性模块标记出组成该特性分区的相关组件集合。

为何？方便路由到特性模块 —— 无论是用主动加载还是惰性加载的方式。

为何？特性模块在特定的功能和其它应用特性之间定义了清晰的边界。

为何？特性模块帮助澄清开发职责，以便于把这些职责指派给不同的项目组。

为何？特性模块易于隔离，以便测试。



共享特性模块
风格 04-10
坚持在 shared 目录中创建名叫 SharedModule 的特性模块（例如在 app/shared/shared.module.ts 中定义 SharedModule）。

坚持在共享模块中声明那些可能被特性模块引用的可复用组件、指令和管道。

考虑把可能在整个应用中到处引用的模块命名为 SharedModule

考虑 不要在共享模块中提供服务。服务通常是单例的，应该在整个应用或一个特定的特性模块中只有一份。 不过也有例外，比如，在下面的范例代码中，注意 SharedModule 提供了 FilterTextService。这里可以这么做，因为该服务是无状态的，也就是说，该服务的消费者不会受到这些新实例的影响。

坚持在 SharedModule 中导入所有模块都需要的资产（例如 CommonModule 和 FormsModule）。

为何？ SharedModule 中包含的组件、指令和管道可能需要来自其它公共模块的特性（例如来自 CommonModule 中的 ngFor 指令）。

坚持在 SharedModule 中声明所有组件、指令和管道。

坚持从 SharedModule 中导出其它特性模块所需的全部符号。

为何？ SharedModule 的存在，能让常用的组件、指令和管道在很多其它模块的组件模板中都自动可用。

避免在 SharedModule 中指定应用级的单例服务提供者。如果是刻意要得到多个服务单例也行，不过还是要小心。

为何？惰性加载的特性模块如果导入了这个共享模块，会创建一份自己的服务副本，这可能会导致意料之外的后果。

为何？对于单例服务，你不希望每个模块都有自己的实例。 而如果 SharedModule 提供了一个服务，那就有可能发生这种情况。

src

app

shared

shared.module.ts

init-caps.pipe.ts|spec.ts

filter-text.component.ts|spec.ts

filter-text.service.ts|spec.ts

app.component.ts|html|css|spec.ts

app.module.ts

app-routing.module.ts

main.ts

index.html

...

app/shared/shared.module.ts
app/shared/init-caps.pipe.ts
app/shared/filter-text/filter-text.component.ts
app/shared/filter-text/filter-text.service.ts
app/heroes/heroes.component.ts
app/heroes/heroes.component.html
content_copy
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FilterTextComponent } from './filter-text/filter-text.component';
import { FilterTextService } from './filter-text/filter-text.service';
import { InitCapsPipe } from './init-caps.pipe';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    FilterTextComponent,
    InitCapsPipe
  ],
  providers: [FilterTextService],
  exports: [
    CommonModule,
    FormsModule,
    FilterTextComponent,
    InitCapsPipe
  ]
})
export class SharedModule { }


惰性加载文件夹
风格 04-11
某些边界清晰的应用特性或工作流可以做成惰性加载或按需加载的，而不用总是随着应用启动。

坚持把惰性加载特性下的内容放进惰性加载目录中。 典型的惰性加载目录包含路由组件及其子组件以及与它们有关的那些资产和模块。

为何？这种目录让标识和隔离这些特性内容变得更轻松。



永远不要直接导入惰性加载的目录
样式 04-14
避免让兄弟模块和父模块直接导入惰性加载特性中的模块。

为何？直接导入并使用此模块会立即加载它，而原本的设计意图是按需加载它。



不要往管道中添加过滤和排序逻辑
Style 04-13
避免往自定义管道中添加过滤或排序逻辑。

坚持在把模型绑定到模板中时，把过滤和排序逻辑在组件或服务中进行预先计算。

为何？ 过滤，尤其是排序，是非常昂贵的操作。因为 Angular 每秒可能调用很多次管道方法，所以对大型列表进行排序和过滤操作会严重降低用户体验。



组件
把组件当做元素
风格 05-03
考虑给组件一个元素选择器，而不是属性或类选择器。

为何？组件有很多包含 HTML 以及可选 Angular 模板语法的模板。 它们显示内容。开发人员会把组件像原生 HTML 元素和 WebComponents 一样放进页面中。

为何？查看组件模板的 HTML 时，更容易识别一个符号是组件还是指令。

少数情况下，你要为组件使用属性选择器，比如你要加强某个内置元素时。 比如，Material Design 组件库就会对 <button mat-button> 使用这项技术。不过，你不应该在自定义组件上使用这项技术。

app/heroes/hero-button/hero-button.component.ts
content_copy
/* avoid */

@Component({
  selector: '[tohHeroButton]',
  templateUrl: './hero-button.component.html'
})
export class HeroButtonComponent {}
app/app.component.html
content_copy
<!-- avoid -->

<div tohHeroButton></div>
app/heroes/shared/hero-button/hero-button.component.ts
app/app.component.html
content_copy
@Component({
  selector: 'toh-hero-button',
  templateUrl: './hero-button.component.html'
})
export class HeroButtonComponent {}


把模板和样式提取到它们自己的文件
风格 05-04
坚持当超过 3 行时，把模板和样式提取到一个单独的文件。

坚持把模板文件命名为 [component-name].component.html，其中，[component-name] 是组件名。

坚持把样式文件命名为 [component-name].component.css，其中，[component-name] 是组件名。

坚持指定相对于模块的 URL，给它加上 ./ 前缀。

为何？巨大的、内联的模板和样式表会遮盖组件的意图和实现方式，削弱可读性和可维护性。

为何？在多数编辑器中，编写内联的模板和样式表时都无法使用语法提示和代码片段功能。 Angular 的 TypeScript 语言服务（即将到来）可以帮助那些编辑器在编写 HTML 模板时克服这一缺陷，但对 CSS 样式没有帮助。

为何？当你移动组件文件时，相对于组件的 URL 不需要修改，因为这些文件始终会在一起。

为何？./ 前缀是相对 URL 的标准语法，不必依赖 Angular 的特殊处理，如果没有前缀则不行。

app/heroes/heroes.component.ts
content_copy
/* avoid */

@Component({
  selector: 'toh-heroes',
  template: `
    <div>
      <h2>My Heroes</h2>
      <ul class="heroes">
        <li *ngFor="let hero of heroes | async" (click)="selectedHero=hero">
          <span class="badge">{{hero.id}}</span> {{hero.name}}
        </li>
      </ul>
      <div *ngIf="selectedHero">
        <h2>{{selectedHero.name | uppercase}} is my hero</h2>
      </div>
    </div>
  `,
  styles: [`
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})
export class HeroesComponent {
  heroes: Observable<Hero[]>;
  selectedHero!: Hero;

  constructor(private heroService: HeroService) {
    this.heroes = this.heroService.getHeroes();
  }
}
app/heroes/heroes.component.ts
app/heroes/heroes.component.html
app/heroes/heroes.component.css
content_copy
@Component({
  selector: 'toh-heroes',
  templateUrl: './heroes.component.html',
  styleUrls:  ['./heroes.component.css']
})
export class HeroesComponent {
  heroes: Observable<Hero[]>;
  selectedHero!: Hero;

  constructor(private heroService: HeroService) {
    this.heroes = this.heroService.getHeroes();
  }
}


内联输入和输出属性装饰器
风格 05-12
坚持 使用 @Input() 和 @Output()，而非 @Directive 和 @Component 装饰器的 inputs 和 outputs 属性:

坚持把 @Input() 或者 @Output() 放到所装饰的属性的同一行。

为何？易于在类里面识别哪些属性是输入属性或输出属性。

为何？ 如果需要重命名与 @Input() 或者 @Output() 关联的属性或事件名，你可以在一个位置修改。

为何？依附到指令的元数据声明会比较简短，更易于阅读。

为何？把装饰器放到同一行可以精简代码，同时更易于识别输入或输出属性。

app/heroes/shared/hero-button/hero-button.component.ts
content_copy
/* avoid */

@Component({
  selector: 'toh-hero-button',
  template: `<button></button>`,
  inputs: [
    'label'
  ],
  outputs: [
    'heroChange'
  ]
})
export class HeroButtonComponent {
  heroChange = new EventEmitter<any>();
  label: string;
}
app/heroes/shared/hero-button/hero-button.component.ts
content_copy
@Component({
  selector: 'toh-hero-button',
  template: `<button>{{label}}</button>`
})
export class HeroButtonComponent {
  @Output() heroChange = new EventEmitter<any>();
  @Input() label = '';
}


避免为输入和输出属性指定别名
风格 05-13
避免除非有重要目的，否则不要为输入和输出指定别名。

为何？同一个属性有两个名字（一个对内一个对外）很容易导致混淆。

为何？如果指令名也同时用作输入属性，而且指令名无法准确描述这个属性的用途时，应该使用别名。

app/heroes/shared/hero-button/hero-button.component.ts
content_copy
/* avoid pointless aliasing */

@Component({
  selector: 'toh-hero-button',
  template: `<button>{{label}}</button>`
})
export class HeroButtonComponent {
  // Pointless aliases
  @Output('heroChangeEvent') heroChange = new EventEmitter<any>();
  @Input('labelAttribute') label: string;
}
app/app.component.html
content_copy
<!-- avoid -->

<toh-hero-button labelAttribute="OK" (changeEvent)="doSomething()">
</toh-hero-button>
app/heroes/shared/hero-button/hero-button.component.ts
app/heroes/shared/hero-button/hero-highlight.directive.ts
app/app.component.html
content_copy
@Component({
  selector: 'toh-hero-button',
  template: `<button>{{label}}</button>`
})
export class HeroButtonComponent {
  // No aliases
  @Output() heroChange = new EventEmitter<any>();
  @Input() label = '';
}


成员顺序
风格 05-14
坚持把属性成员放在前面，方法成员放在后面。

坚持先放公共成员，再放私有成员，并按照字母顺序排列。

为何？把类的成员按照统一的顺序排列，易于阅读，能立即识别出组件的哪个成员服务于何种目的。

app/shared/toast/toast.component.ts
content_copy
/* avoid */

export class ToastComponent implements OnInit {

  private defaults = {
    title: '',
    message: 'May the Force be with you'
  };
  message: string;
  title: string;
  private toastElement: any;

  ngOnInit() {
    this.toastElement = document.getElementById('toh-toast');
  }

  // private methods
  private hide() {
    this.toastElement.style.opacity = 0;
    window.setTimeout(() => this.toastElement.style.zIndex = 0, 400);
  }

  activate(message = this.defaults.message, title = this.defaults.title) {
    this.title = title;
    this.message = message;
    this.show();
  }

  private show() {
    console.log(this.message);
    this.toastElement.style.opacity = 1;
    this.toastElement.style.zIndex = 9999;

    window.setTimeout(() => this.hide(), 2500);
  }
}
app/shared/toast/toast.component.ts
content_copy
export class ToastComponent implements OnInit {
  // public properties
  message = '';
  title = '';

  // private fields
  private defaults = {
    title: '',
    message: 'May the Force be with you'
  };
  private toastElement: any;

  // public methods
  activate(message = this.defaults.message, title = this.defaults.title) {
    this.title = title;
    this.message = message;
    this.show();
  }

  ngOnInit() {
    this.toastElement = document.getElementById('toh-toast');
  }

  // private methods
  private hide() {
    this.toastElement.style.opacity = 0;
    window.setTimeout(() => this.toastElement.style.zIndex = 0, 400);
  }

  private show() {
    console.log(this.message);
    this.toastElement.style.opacity = 1;
    this.toastElement.style.zIndex = 9999;
    window.setTimeout(() => this.hide(), 2500);
  }
}


把逻辑放到服务里
风格 05-15
坚持在组件中只包含与视图相关的逻辑。所有其它逻辑都应该放到服务中。

坚持把可复用的逻辑放到服务中，保持组件简单，聚焦于它们预期目的。

为何？当逻辑被放置到服务里，并以函数的形式暴露时，可以被多个组件重复使用。

为何？在单元测试时，服务里的逻辑更容易被隔离。当组件中调用逻辑时，也很容易被模拟。

为何？从组件移除依赖并隐藏实现细节。

为何？保持组件苗条、精简和聚焦。

app/heroes/hero-list/hero-list.component.ts
content_copy
/* avoid */

import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';

import { Hero } from '../shared/hero.model';

const heroesUrl = 'http://angular.io';

export class HeroListComponent implements OnInit {
  heroes: Hero[];
  constructor(private http: HttpClient) {}
  getHeroes() {
    this.heroes = [];
    this.http.get(heroesUrl).pipe(
      catchError(this.catchBadResponse),
      finalize(() => this.hideSpinner())
    ).subscribe((heroes: Hero[]) => this.heroes = heroes);
  }
  ngOnInit() {
    this.getHeroes();
  }

  private catchBadResponse(err: any, source: Observable<any>) {
    // log and handle the exception
    return new Observable();
  }

  private hideSpinner() {
    // hide the spinner
  }
}
app/heroes/hero-list/hero-list.component.ts
content_copy
import { Component, OnInit } from '@angular/core';

import { Hero, HeroService } from '../shared';

@Component({
  selector: 'toh-hero-list',
  template: `...`
})
export class HeroListComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(private heroService: HeroService) {}
  getHeroes() {
    this.heroes = [];
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
  ngOnInit() {
    this.getHeroes();
  }
}


不要给输出属性加前缀
风格 05-16
坚持命名事件时，不要带前缀 on。

坚持把事件处理器方法命名为 on 前缀之后紧跟着事件名。

为何？与内置事件命名一致，例如按钮点击。

为何？Angular 允许另一种备选语法 on-*。如果事件的名字本身带有前缀 on，那么绑定的表达式可能是 on-onEvent。

app/heroes/hero.component.ts
content_copy
/* avoid */

@Component({
  selector: 'toh-hero',
  template: `...`
})
export class HeroComponent {
  @Output() onSavedTheDay = new EventEmitter<boolean>();
}
app/app.component.html
content_copy
<!-- avoid -->

<toh-hero (onSavedTheDay)="onSavedTheDay($event)"></toh-hero>
app/heroes/hero.component.ts
app/app.component.html
content_copy
export class HeroComponent {
  @Output() savedTheDay = new EventEmitter<boolean>();
}


把表现层逻辑放到组件类里
风格 05-17
坚持把表现层逻辑放进组件类中，而不要放在模板里。

为何？逻辑应该只出现在一个地方（组件类里）而不应分散在两个地方。

为何？将组件的表现层逻辑放到组件类而非模板里，可以增强测试性、维护性和重复使用性。

app/heroes/hero-list/hero-list.component.ts
content_copy
/* avoid */

@Component({
  selector: 'toh-hero-list',
  template: `
    <section>
      Our list of heroes:
      <toh-hero *ngFor="let hero of heroes" [hero]="hero">
      </toh-hero>
      Total powers: {{totalPowers}}<br>
      Average power: {{totalPowers / heroes.length}}
    </section>
  `
})
export class HeroListComponent {
  heroes: Hero[];
  totalPowers: number;
}
app/heroes/hero-list/hero-list.component.ts
content_copy
@Component({
  selector: 'toh-hero-list',
  template: `
    <section>
      Our list of heroes:
      <toh-hero *ngFor="let hero of heroes" [hero]="hero">
      </toh-hero>
      Total powers: {{totalPowers}}<br>
      Average power: {{avgPower}}
    </section>
  `
})
export class HeroListComponent {
  heroes: Hero[];
  totalPowers = 0;

  get avgPower() {
    return this.totalPowers / this.heroes.length;
  }
}


初始化输入属性
Style 05-18
TypeScript 的编译器选项 --strictPropertyInitialization，会确保某个类在构造函数中初始化其属性。当启用时，如果该类没有对任何未显式标为可选值的属性提供初始值，TypeScript 编译器就会报错。

按照设计，Angular 把所有 @Input 都视为可选值。只要有可能，你就应该通过提供默认值来满足 --strictPropertyInitialization 的要求。

app/heroes/hero/hero.component.ts
content_copy
@Component({
  selector: 'toh-hero',
  template: `...`
})
export class HeroComponent {
  @Input() id = 'default_id';
}
如果该属性很难构造出默认值，请使用 ? 来把该属性显式标记为可选的。

app/heroes/hero/hero.component.ts
content_copy
@Component({
  selector: 'toh-hero',
  template: `...`
})
export class HeroComponent {
  @Input() id?: string;

  process() {
    if (this.id) {
      // ...
    }
  }
}
你可能希望某个 @Input 字段是必填的，也就是说此组件的所有用户都必须传入该属性。这种情况下，请使用默认值。仅仅使用 ! 来抑制 TypeScript 报错是不够的，应该避免它，因为这样做会阻止类型检查器来确保必须提供此输入值。

app/heroes/hero/hero.component.ts
content_copy
@Component({
  selector: 'toh-hero',
  template: `...`
})
export class HeroComponent {
  // The exclamation mark suppresses errors that a property is
  // not initialized.
  // Ignoring this enforcement can prevent the type checker
  // from finding potential issues.
  @Input() id!: string;
}
指令
使用指令来增强已有元素
风格 06-01
坚持当你需要有表现层逻辑，但没有模板时，使用属性型指令。

为何？属性型指令没有模板。

为何？一个元素可以使用多个属性型指令。

app/shared/highlight.directive.ts
content_copy
@Directive({
  selector: '[tohHighlight]'
})
export class HighlightDirective {
  @HostListener('mouseover') onMouseEnter() {
    // do highlight work
  }
}
app/app.component.html
content_copy
<div tohHighlight>Bombasta</div>


HostListener 和 HostBinding 装饰器 vs. 组件元数据 host
风格 06-03
考虑优先使用 @HostListener 和 @HostBinding，而不是 @Directive 和 @Component 装饰器的 host 属性。

坚持让你的选择保持一致。

为何？对于关联到 @HostBinding 的属性或关联到 @HostListener 的方法，要修改时，只需在指令类中的一个地方修改。 如果使用元数据属性 host，你就得在组件类中修改属性声明的同时修改相关的元数据。

app/shared/validator.directive.ts
content_copy
import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[tohValidator]'
})
export class ValidatorDirective {
  @HostBinding('attr.role') role = 'button';
  @HostListener('mouseenter') onMouseEnter() {
    // do work
  }
}
与不推荐的方式（host 元数据）比较一下。

为何？host 元数据只是一个便于记忆的名字而已，并不需要额外的 ES 导入。

app/shared/validator2.directive.ts
content_copy
import { Directive } from '@angular/core';

@Directive({
  selector: '[tohValidator2]',
  host: {
    '[attr.role]': 'role',
    '(mouseenter)': 'onMouseEnter()'
  }
})
export class Validator2Directive {
  role = 'button';
  onMouseEnter() {
    // do work
  }
}


服务
服务总是单例的
风格 07-01
坚持在同一个注入器内，把服务当做单例使用。用它们来共享数据和功能。

为何？服务是在特性范围或应用内共享方法的理想载体。

为何？服务是共享状态性内存数据的理想载体。

app/heroes/shared/hero.service.ts
content_copy
export class HeroService {
  constructor(private http: HttpClient) { }

  getHeroes() {
    return this.http.get<Hero[]>('api/heroes');
  }
}


单一职责
风格 07-02
坚持创建封装在上下文中的单一职责的服务。

坚持当服务成长到超出单一用途时，创建一个新服务。

为何？当服务有多个职责时，它很难被测试。

为何？当某个服务有多个职责时，每个注入它的组件或服务都会承担这些职责的全部开销。



提供一个服务
风格 07-03
坚持在服务的 @Injectable 装饰器上指定通过应用的根注入器提供服务。

为何？ Angular 注入器是层次化的。

为何？当你在根注入器上提供该服务时，该服务实例在每个需要该服务的类中是共享的。当服务要共享方法或状态时，这是最理想的选择。

为何？当你在服务的 @Injectable 中注册服务时，Angular CLI 生产环境构建时使用的优化工具可以进行摇树优化，从而移除那些你的应用中从未用过的服务。

为何？当不同的两个组件需要一个服务的不同的实例时，上面的方法这就不理想了。在这种情况下，对于需要崭新和单独服务实例的组件，最好在组件级提供服务。

src/app/treeshaking/service.ts
content_copy
@Injectable({
  providedIn: 'root',
})
export class Service {
}


使用 @Injectable() 类装饰器
风格 07-04
坚持当使用类型作为令牌来注入服务的依赖时，使用 @Injectable() 类装饰器，而非 @Inject() 参数装饰器。

为何？ Angular 的 DI 机制会根据服务的构造函数参数的声明类型来解析服务的所有依赖。

为何？当服务只接受类型令牌相关的依赖时，比起在每个构造函数参数上使用 @Inject()，@Injectable() 的语法简洁多了。

app/heroes/shared/hero-arena.service.ts
content_copy
/* avoid */

export class HeroArena {
  constructor(
      @Inject(HeroService) private heroService: HeroService,
      @Inject(HttpClient) private http: HttpClient) {}
}
app/heroes/shared/hero-arena.service.ts
content_copy
@Injectable()
export class HeroArena {
  constructor(
    private heroService: HeroService,
    private http: HttpClient) {}
}


数据服务
通过服务与 Web 服务器通讯
风格 08-01
坚持把数据操作和与数据交互的逻辑重构到服务里。

坚持让数据服务来负责 XHR 调用、本地储存、内存储存或者其它数据操作。

为何？组件的职责是为视图展示或收集信息。它不应该关心如何获取数据，它只需要知道向谁请求数据。把如何获取数据的逻辑移动到数据服务里，简化了组件，让其聚焦于视图。

为何？在测试使用数据服务的组件时，可以让数据调用更容易被测试（模拟或者真实）。

为何？数据管理的详情，比如头信息、方法、缓存、错误处理和重试逻辑，不是组件和其它的数据消费者应该关心的事情。

数据服务应该封装这些细节。这样，在服务内部修改细节，就不会影响到它的消费者。并且更容易通过实现一个模拟服务来对消费者进行测试。



生命周期钩子
使用生命周期钩子来介入到 Angular 暴露的重要事件里。



实现生命周期钩子接口
风格 09-01
坚持实现生命周期钩子接口。

为何？如果使用强类型的方法签名，编译器和编辑器可以帮你揪出拼写错误。

app/heroes/shared/hero-button/hero-button.component.ts
content_copy
/* avoid */

@Component({
  selector: 'toh-hero-button',
  template: `<button>OK<button>`
})
export class HeroButtonComponent {
  onInit() { // misspelled
    console.log('The component is initialized');
  }
}
app/heroes/shared/hero-button/hero-button.component.ts
content_copy
@Component({
  selector: 'toh-hero-button',
  template: `<button>OK</button>`
})
export class HeroButtonComponent implements OnInit {
  ngOnInit() {
    console.log('The component is initialized');
  }
}


附录
有用的 Angular 工具和小提示



文档模板和代码片段
风格 A-02
坚持使用文件模板或代码片段来帮助实现一致的风格和模式。下面是为一些网络开发编辑器和 IDE 准备的模板和/或代码片段：

考虑使用 Visual Studio Code的代码片段 来实施本风格指南。

Use Extension
考虑使用 Atom 的代码片断来实施本风格指南。

考虑使用 Sublime Text的代码片断 来实施本风格指南。

考虑使用 Vim 的代码片断来实施本风格指南。