/**
 * Created by OWOIT.
 * User: i炮兵(iDawn)
 * Date: 2020/6/17
 * Time: 9:55
 */
let that = null; //全局VUE组件对象 mounted() 中赋值

export default {
    data() {
        return {
            showPage: {
                loading: true
                , loadingAd: true
            }
            ,djsTimer:3
            ,title: '现在你可以修改相关文件进行开发了'
        };
    },
    methods: {
        initPage() {

        },
        showToast(title, duration = 2000, icon = 'success') {
            uni.showToast({
                title: title,
                duration: duration,
                icon: icon,
            });
        },
        showErrorToast(title, mask = false, duration = 2000) {
            uni.showToast({
                title: title,
                duration: duration,
                icon: "none",
                mask: mask
            });
        },
        showLoading(title, mask = true) {
            uni.showLoading({
                title: title,
                mask: mask
            });
        },
        hideLoading() {
            uni.hideLoading();
        },
        request(url, data = {}, method = 'POST') {
            return new Promise((resolve, reject) => {
                let URL = ''
                if (url.includes('http://') || url.includes('https://')) {
                    URL = url;
                } else {
                    URL = apiUrl + url;
                }
                uni.request({
                    url: URL,
                    data: data,
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    method: method,
                    success: function (res) {
                        if (res.statusCode === 200) {
                            console.log(res.data);
                            resolve(res.data);
                        } else {
                            that.flag = true;
                            that.showErrorToast('服务器繁忙，请稍后重试');
                            reject(res);
                        }
                    },
                    fail: function (err) {
                        that.flag = true;
                        that.showErrorToast('服务器繁忙，请稍后重试');
                        reject(err);
                    }
                })
            })
        }
    },
    computed: {},
    onLoad(query) {
        let that = this;
        // #ifdef H5
        //jssdk调用方法1 注意此方法只适用于owo/h5wxjssdk.js中有的方法
        this.$jwx.updateAppMessageShareData(shrData); //好友
        this.$jwx.updateTimelineShareData(shrData); //朋友圈
        //jssdk调用方法二 支持所有官方api https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#8
        this.$jwx.sdk(function (jwx) {
                jwx.updateAppMessageShareData(shrData);
                jwx.updateTimelineShareData(shrData);
            }
        );
       // #endif
       // #ifndef H5
        //小程序环境下的广告倒计时或加载页面，h5模式请修改public下的index.html 仅为示例请自行修改
         var addjstimer = setInterval(function () {
             that.djsTimer--;
            if(that.djsTimer<=0){
                that.showPage.loadingAd = false;
                that.showPage.loading=false;
                clearInterval(addjstimer)
            }
        },1000);
        //#endif
    },
    mounted: function () {
        that = this;
        this.$nextTick(function () {
            that.initPage();
        });
    }
};
