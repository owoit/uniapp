#施南传媒H5 uni-app脚手架
- [使用说明](https://git.owoit.com/OwOItReadMe/workflow/-/tree/master/wiki/H5)
## git 协作说明
> 从2021年起启用先的git规范，脚手架默认只允许git cz提交代码变更
- 分支说明
    - release 正式版部署分支 默认压缩代码 使用cdn
    - develop 开发版部署分支 默认不压缩代码 方便调试
    - test    测试版部署分支  默认压缩代码 不使用cdn
- 版本管理
   
   使用`yarn version` 配置版本，系统会自动生成更新日志
## 项目启动
- 安装依赖：
```shell
yarn
```
- 启动H5 测试：
```shell
yarn serve
```

 更多命令查看[package.json](package.json)中scripts字段

如果你是用wsl或者docker运行的那么默认的情况下是没办法直接用你电脑的ip来访问的，这个时候需要做端口转发，以及防火墙设置
```powershell
netsh interface portproxy add v4tov4 listenport=8080 listenaddress=* connectport=8080 connectaddress=你docker或wsl的ip通常会在运行yarn serve后显示出来 protocol=tcp
```
## 动画库
> 框架默认使用animate.css 4.0以下版本为动画库（[4.0以上版本最大区别是增加了前缀，这样可以减少类名冲突，后期内部项目也将会升级到4.0的版本，详情点击进入官网请查看](https://animate.style/#migration)）
- H5模式加载的为服务器上公用静态资源库中的css库
- 其他如小程序模式下使用的库在项目下css文件夹下ani.css


