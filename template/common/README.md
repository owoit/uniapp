#施南传媒H5 uni-app脚手架
- [使用说明](https://git.owoit.com/OwOItReadMe/workflow/-/tree/master/wiki/H5)
## git 协作说明
> 从2021年起启用先的git规范，脚手架默认只允许git cz提交代码变更
- 分支说明
    - release 正式版部署分支
    - develop 开发版部署分支
    - test    测试版部署分支
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
如果你是用wsl或者docker运行的那么默认的情况下是没办法直接用你电脑的ip来访问的，这个时候需要做端口转发，以及防火墙设置
```powershell
netsh interface portproxy add v4tov4 listenport=8080 listenaddress=* connectport=8080 connectaddress=你docker或wsl的ip通常会在运行yarn serve后显示出来 protocol=tcp
```

 更多命令查看[package.json](package.json)中scripts字段

