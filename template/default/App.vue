<script>
// ifdef H5
var jweixin = require("jweixin-module");
jweixin.config(wxConfig);
jweixin.ready(function() {
  jweixin.updateAppMessageShareData(shrData); //群、好友分享信息
  jweixin.updateTimelineShareData(shrData); //朋友圈分享信息：在需要改分享标题之类时可修改shrData中的值并重先注册本方法
  // wx.onMenuShareTimeline(shrData); //旧接口
  // wx.onMenuShareAppMessage(shrData);//旧j
  jweixin.hideMenuItems({
    menuList: [
      "menuItem:share:qq",
      "menuItem:share:weiboApp",
      "menuItem:share:facebook",
      "menuItem:share:QZone",
      "menuItem:originPage",
      "menuItem:readMode",
      "menuItem:openWithQQBrowser",
      "menuItem:openWithSafari",
      "menuItem:share:email",
      "menuItem:share:brand",
      "menuItem:copyUrl"
    ]
  });
});
// endif

	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>

	/*每个页面公共css */
</style>
