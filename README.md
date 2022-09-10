# allst-vue

vue项目初始化命令：
vue init webpack project-name

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


# Git
```text
…or create a new repository on the command line
echo "# allst-vue2" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/ReturnTears/allst-vue2.git
git push -u origin main

…or push an existing repository from the command line
git remote add origin https://github.com/ReturnTears/allst-vue2.git
git branch -M main
git push -u origin main
```

## Vue2.x

**Day1 WebStorm中Vue项目的目录介绍**
```
build:webpack相关的配置文件
config:Vue基本配置文件
node_modules:依赖包
src:项目核心文件(我们所写的代码都放在这里)
src/assets:静态资源文件(样式类文件)
src/components:公共组件
src/router:路由
src/App.vue:根组件,又叫项目入口文件,一个vue页面通常由三部分组成:模板(template)、js(script)、样式(style)
src/main.js:程序入口文件,main.js主要是引入vue框架，根组件及路由设置，并且定义vue实例
static:静态资源(一般存放图片资源)
.babelrc:babel编译参数
.editorconfig:代码格式
.eslintignore:eslint代码规范文件,(需要忽略的目录)
.eslintrc.js:eslint代码规范文件(在该文件下plugins属性中添加相应的组件类型,默认是vue,可以添加'html','standard','promise',添加了类型还需要添加相应的插件才能生效:npm  install eslint-plugin-html -save-dev,这样html代码规范就生效了)
.gitignore:git上传需要忽略的文件位置
.postcssrs.js:转换css的工具
index.html:主页,ndex.html如其他html一样，但一般只定义一个空的根节点，在main.js里面定义的实例将挂载在根节点下，内容都通过vue组件来填充
package.json:项目基本信息
README.md:markdown文档
External Libraries:外部依赖包
Scratches and Consoles:(临时的文件编辑环境，通过临时的编辑环境，你可以写一些文本内容或者一些代码片段。)
```
**build目录 webpack配置**
```
build.js:生产环境构建
check-versions.js:版本检查(node,npm)
logo.png:logo
utils.js:构建相关工具
vue-loader.conf.js:css加载器配置
webpack.base.conf.js:webpack基础配置
webpack.dev.conf.js:webpack开发环境配置
webpack.prod.conf.js:webpack生产环境配置
```
**config vue配置**
```
dev.env.js:项目开发环境配置
index.js:项目主要配置(监听端口,打包路径)
prod.env.js:项目生产环境配置
```
**node_modules**
```
项目依赖包,缺少什么包直接在终端输入:npm install [依赖包名] / cnpm install [依赖包名]

```
**src**
```
项目核心目录,我们写的代码都是在这里

```

**Vue钩子函数生命周期**
![Image](https://github.com/ReturnTears/allst-vue2/blob/master/src/assets/vimg/Vue钩子函数生命周期图.png)

**Vue整合Mint UI**
```
Mint UI 官方使用中文文档:https://mint-ui.github.io/docs/#/zh-cn2
```

**Vue整合Element UI**
```
安装
npm i element-ui -S

安装Axios
npm install axios --save

安装vue-router
npm install vue-router
```

## Vue3.x
```

```

## Mock
```
Mock.js
官方地址：http://mockjs.com/
示例地址：http://mockjs.com/examples.html

# 安装
npm install mockjs


```


## EventLoop
JavaScript主线程从“任务队列”中读取一部任务的回调函数，放到执行栈中依次执行。这个过程是循环不断的，所以整个的这种运行机制又称为EvevtLoop （事件循环）

## 宏任务和微任务
JavaScript把异步任务又做了进一步的划分，异步任务又分为两类：宏任务（macrotask）、微任务（microtask）

## 创建服务
运行命令 nodemon app.js

## 错误解决方案
1、SyntaxError: Cannot use import statement outside a module
npm init -y
初始化package.json文件，添加"type": "module"

