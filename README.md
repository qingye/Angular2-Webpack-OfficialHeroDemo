# Angular2-Webpack-OfficialHeroDemo

一、引言：
本项目为学习项目，但也可以拿来直接使用在项目中，特别是涉及到项目在不同环境中的开发，测试，以及发布的脚本出理。
参考【github】社区
https://github.com/AngularClass/angular2-webpack-starter

本文Demo来自于Angular.io / Angular.cn官方的《英雄指南》
https://angular.cn/docs/ts/latest/tutorial/

二、本项目对官方的代码有所改动：
官方建议 .ts / .html / .css 文件并排在同一个目录下，而本项目以实际出发，分开了这些文件至不同目录；

三、Webpack
如果直接使用社区的angular2-webpack-starter，则会有一些问题：
> 打包很有可能报各种错误;
> RangeError: Maximum call stack size exceeded;

我对 package.json 以及 tsconfig.json 做了修改：
3.1 package.json: 由于官方例子的http请求，实际是用的in-memory-web-api的方式从本地获取mock数据，所以，dependencies中加入了"angular2-in-memory-web-api";
3.2 tsconfig.json: 
    3.2.1 noEmitHelpers一定要设置为false，否则就会 RangeError;
    3.2.2 experimentalDecorators一定要设置，且必需为true;