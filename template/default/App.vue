<script>
	export default {
		onLaunch: function() {
            // #ifdef H5
            this.$jwx.initJssdk();
            // #endif

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
	/*#ifndef H5*/
	@import 'css/ani.css';/*动画库animate.css* h5模式直接通过index.html引用了无需重复引用/
	/*endif*/
</style>
