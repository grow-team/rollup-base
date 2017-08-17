# Rollup简介及demo

# 一、基本介绍及安装

说明：rollup是一个js模块打包工具。和weabpack相比，更加small-light,功能相对也少一些。最大的特殊是Tree Shaking的实现（webpack后面的版本也开始支持了）

安装 

    npm install rollup --global

尝试公司电脑局部安装（npm install rollup --dev-save)失败，需要在你电脑上再测试下


# 二、使用方式

#### 1、通过命令行，相当于使用cli工具（忽略）

#### 2、通过[javscript api](https://github.com/rollup/rollup/wiki/JavaScript-API)使用

#### 2-1、方法 rollup.rollup( options )  返回：Promise promis中result参数为bundle.
传入参数：

    entry：入口文件路径
    cache：缓存之前的返回
    external: 不要被打包的模块（可以是模块名、文件路径）
    plugins：打包使用插件
    ....
    ....
    
#### 2-2、方法 bundle.generate( options ) 返回：Promise 其中resolves返回{ code, map }对象
传入参数

    format：amd -----返回amd规范的js，像是Require.js
            cjs -----CommonJS
            es  -----返回官方ES模块（es几需要再看下）
            iife -----返回一个自执行的方法
            umd ------返回混合模式的js，同时支持amd、CommonJS
    注意：使用iife和umd两种模式时候，需要指定moduleName


.......待续！


# 三、关键技术点

1、Tree shaking。。。

2、rullup.config.js的export可以是数组

# 三、插件

[完整插件列表](https://github.com/rollup/rollup/wiki/Plugins)

1、[rollup-plugin-node-resolve](https://github.com/rollup/rollup-plugin-node-resolve)

作用：引入node_modules中的模块时，需要调用此插件，否则找不到引用的模块。

2、[rollup-plugin-commonjs](https://github.com/rollup/rollup-plugin-commonjs)

作用：rollup只能处理es6模块，需要在其他插件转换之前用此插件对commonjs模块进行转换处理。

3、[rollup-plugin-babel](https://github.com/rollup/rollup-plugin-babel)

作用：恰如其名，在rollup中使用babel

4、[rollup-plugin-typescript](https://github.com/rollup/rollup-plugin-typescript)

作用：恰如其名，在rollup中使用typescript
 
 # 官方示例

[https://github.com/rollup/rollup-starter-lib](https://github.com/rollup/rollup-starter-lib)

