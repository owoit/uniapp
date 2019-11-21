<template>
	<view class="content">
		<view>
			<image class="logo" src="/static/logo.png"></image>
		</view>
		<view>
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '现在你可以修改相关文件进行开发了'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 1206upx;
	}

	.logo {
		margin-top: 200upx;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
