<template>
  <view>
   <button @click="uploadToServer">上传到自建服务器测试</button> 
  </view>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    uploadToServer() {
      uni.chooseImage({
       success: chooseImageRes => {
          const tempFilePaths = chooseImageRes.tempFilePaths;
          const uploadTask = uni.uploadFile({
            url: apiUrl + "Post.Post", //仅为示例，非真实的接口地址
            filePath: tempFilePaths[0],
            name: "file",
            formData: {
              uid: 59820,
              why: why,
              keyid: keyid
            },
            success: uploadFileRes => {
              console.log(uploadFileRes.data);
            }
          });
          uploadTask.onProgressUpdate(res => {
            console.log("上传进度" + res.progress);
            console.log("已经上传的数据长度" + res.totalBytesSent);
            console.log(
              "预期需要上传的数据总长度" + res.totalBytesExpectedToSend
            );
          });
        }
      });
    }
  }
};
</script>
