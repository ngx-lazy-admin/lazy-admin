微前端模块

主应用路由
xxx.woa.com/wuJie?vue=/a/b

理想情况下: 访问的子路由
xxx.woa/a/b

现实可能会访问
xxx.woa/a/b

但其中 静态资源 设置 publicPath(baseUrl) xxx.woa/a

希望的是，publicPath(baseUrl) 可以单独设置，而不是默认设置
