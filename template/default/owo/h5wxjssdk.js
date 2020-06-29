/**
 * Created by OWOIT.
 * User: i炮兵(iDawn)
 * Date: 2020/5/15
 * Time: 6:55
 */
var jweixin = require('jweixin-module');
export default {
    //判断是否在微信中
    isWechat: function() {
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/micromessenger/i) == 'micromessenger') {
            //console.log('是微信客户端')
            return true;
        } else {
            //console.log('不是微信客户端')
            return false;
        }
    },
    sdk:function(callback){
        if(callback){
            callback(jweixin);
        }
    },
    initJssdk:function(){
        jweixin.config(wxConfig);
        jweixin.ready(function () {
            jweixin.updateAppMessageShareData(shrData);
            jweixin.updateTimelineShareData(shrData);
            jweixin.hideMenuItems({
                menuList:hideMenuList
            });
        });
    },
    updateAppMessageShareData:function(shareData){
        jweixin.ready(function () {
            jweixin.updateAppMessageShareData(shareData);
        });
    },
    updateTimelineShareData:function(shareData){
        jweixin.ready(function () {
            jweixin.updateTimelineShareData(shareData);
        });
    },
    //在需要定位页面调用
    getLocation: function(callback) {
        if (!this.isWechat()) {
            //console.log('不是微信客户端')
            return;
        }
        this.initJssdk(function(res) {
            jweixin.ready(function() {
                jweixin.getLocation({
                    type: 'gcj02', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
                    success: function (res) {
                        // console.log(res);
                        callback(res)
                    },
                    fail:function(res){
                        console.log(res)
                    },
                    // complete:function(res){
                    //     console.log(res)
                    // }
                });
            });
        });
    },
    openLocation:function(data,callback){//打开位置
        if (!this.isWechat()) {
            //console.log('不是微信客户端')
            return;
        }
        this.initJssdk(function(res) {
            jweixin.ready(function() {
                jweixin.openLocation({//根据传入的坐标打开地图
                    latitude:data.latitude,
                    longitude:data.longitude
                });
            });
        });
    },
    chooseImage:function(callback){//选择图片
        if (!this.isWechat()) {
            //console.log('不是微信客户端')
            return;
        }
        //console.log(data);
        this.initJssdk(function(res) {
            jweixin.ready(function() {
                jweixin.chooseImage({
                    count:1,
                    sizeType:['compressed'],
                    sourceType:['album'],
                    success:function(rs){
                        callback(rs)
                    }
                })
            });
        });
    },
    //微信支付
    wxpay: function(data,callback) {
        if (!this.isWechat()) {
            //console.log('不是微信客户端')
            return;
        }
        this.initJssdk(function(res) {
            jweixin.ready(function() {
                jweixin.chooseWXPay({
                    timestamp: data.timestamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
                    nonceStr: data.nonceStr, // 支付签名随机串，不长于 32 位
                    package: data.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
                    signType: data.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
                    paySign: data.paysign, // 支付签名
                    success: function (res) {
                        // console.log(res);
                        callback(res)
                    },
                    fail:function(res){
                        callback(res)
                    },
                    // complete:function(res){
                    //     console.log(res)
                    // }
                });
            });
        });
    }
}