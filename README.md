# Rollup简介及demo

# 一、基本介绍及安装

说明：rollup是一个js模块打包工具。和webpack相比，更加small-light,功能相对也少一些。最大的特殊是Tree Shaking的实现（webpack后面的版本也开始支持了）

安装 

    npm install rollup --global

尝试公司电脑局部安装（npm install rollup --dev-save)失败，需要在你电脑上再测试下


# 二、使用方式

#### 1、通过命令行，相当于使用cli工具

#### 1-1、直接在dos窗口输入命令
#### 1-2、用rollup.config.js文件

常用命令：
    
    rollup -c(config) filepath?
    rollup -w(watch) filepath?
    
[所有命令](https://github.com/rollup/rollup/wiki/Command-Line-Interface)
    

#### 2、通过[javscript api](https://github.com/rollup/rollup/wiki/JavaScript-API)使用

#### 2-1、方法 rollup.rollup( options )  返回：Promise promis中result参数为bundle.
关键参数：

    entry：入口文件路径
    cache：缓存之前的返回
    external: 不要被打包的模块（可以是模块名、文件路径）
    plugins：打包使用插件
    ....
    ....
    
#### 2-2、方法 bundle.generate( options ) 返回：Promise 其中resolves返回{ code, map }对象
关键参数

    format：amd -----返回amd规范的js，像是Require.js
            cjs -----CommonJS
            es  -----返回官方ES模块（es几需要再看下）
            iife -----返回一个自执行的方法
            umd ------返回混合模式的js，同时支持amd、CommonJS
    注意：使用iife和umd两种模式时候，需要指定moduleName


#### 2-3、方法 bundle.write( options ) 返回:Promise，同时将内容写入对应文件

关键参数

    dest：要写入文件的地址


# 三、关键技术点

1、Tree shaking。。。

    tree-shaking 都是因为 ES6 modules 的静态特性才得以实现的。ES6 modules 的 import 和 export statements 相比完全动态的 CommonJS require，有着本质的区别。举例来说：
    1. 只能作为模块顶层的语句出现，不能出现在 function 里面或是 if 里面。（ECMA-262 15.2)
    2. import 的模块名只能是字符串常量。(ECMA-262 15.2.2)
    3. 不管 import 的语句出现的位置在哪里，在模块初始化的时候所有的 import 都必须已经导入完成。换句话说，ES6 imports are hoisted。(ECMA-262 15.2.1.16.4 - 8.a)
    4. import binding 是 immutable 的，类似 const。比如说你不能 import { a } from './a' 然后给 a 赋值个其他什么东西。(ECMA-262 15.2.1.16.4 - 12.c.3)
    
    这些设计虽然使得灵活性不如 CommonJS 的 require，但却保证了 ES6 modules 的依赖关系是确定 (deterministic) 的，和运行时的状态无关，从而也就保证了 ES6 modules 是可以进行可靠的静态分析的。对于主要在服务端运行的 Node 来说，所有的代码都在本地，按需动态 require 即可，但对于要下发到客户端的 web 代码而言，要做到高效的按需使用，不能等到代码执行了才知道模块的依赖，必须要从模块的静态分析入手。这是 ES6 modules 在设计时的一个重要考量，也是为什么没有直接采用 CommonJS。正是基于这个基础上，才使得 tree-shaking 成为可能（这也是为什么 rollup 和 webpack 2 都要用 ES6 module syntax 才能 tree-shaking），所以说与其说 tree-shaking 这个技术怎么了不起，不如说是 ES6 module 的设计在模块静态分析上的种种考量值得赞赏。
    
    [出处](https://www.zhihu.com/question/41922432/answer/93346223)



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

5、[rollup-plugin-uglify](https://github.com/TrySound/rollup-plugin-uglify)

作用：在rollup中使用uglify压缩混淆代码

 
 # 官方示例

[https://github.com/rollup/rollup-starter-lib](https://github.com/rollup/rollup-starter-lib)

