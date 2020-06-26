<template>
<!--	#ifndef H5-->
	<view id="pageLoading" v-show="showPage.loading">
		<view class="cont">
			<view class="loader">
				<view class="face">
					<view class="circle"></view>
				</view>
				<view class="face">
					<view class="circle"></view>
				</view>
			</view>
		</view>
	</view>
	<view class="pageAD" v-show="showPage.loadingAd">
		<image src="../../static/img/loadingad.jpg" class="panelAD"></image>
		<view class="timer">{{djsTimer}}</view>
	</view>
<!--#endif-->
	<view class="content">
		<view>
			<image class="logo" src="/static/logo.png"></image>
		</view>
		<view>
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>
<script src="./index.js"></script>
<style lang="scss">
		@import "./index.scss";
</style>
