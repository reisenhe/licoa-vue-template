# vfeng-cli-mobile
移动模板创建

## 流程

1. postcss-pxtorem 解决不同移动端屏幕比例适配问题
2. vue-router 配置路由
2.1 使用 query 传参
3. axios 处理异步请求
3.1 封装 axios，提供 request 方法
4. 使用 env 文件为不同环境配置参数
4. devServer.proxy 配置跨域请求
5. vant 组件库提供功能组件
5.1 babel-plugin-import 按需加载组件    
5.2 二次封装符合项目需求的组件，弹窗、切换菜单等
6. 自定义事件解决简单的跨组件事件传递，要记得在 beforeDestroy 生命周期钩子里解绑以防内存泄漏
7. moment 处理日期格式等
7.1 使用 ContextReplacementPlugin 插件清除 moment 多语言打包
8. 使用 vuex 对项目数据进行管理