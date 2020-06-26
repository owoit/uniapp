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
</style>
