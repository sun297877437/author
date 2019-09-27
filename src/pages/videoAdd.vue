<template>
  <div class="article">
    <!-- <header>
      <span class="h-l">发布课程</span>
      <span class="h-r">
        <router-link to="/videoSpecification">课程规范</router-link>
      </span>
    </header>-->
    <section class="section-a">
      <el-row style="margin-top:20px;">
        <el-col :span="22" :offset="1">
          <el-form
            :model="form"
            label-width="80px"
            style="border: 1px solid #eaeefb;padding: 10px 10px 0;"
          >
            <el-form-item label="选择课程">
              <el-input v-model="form.intro"></el-input>
            </el-form-item>
            <el-form-item label="视频名称">
              <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="资费">
              <el-radio v-model="radio" label="0">免费</el-radio>
              <el-radio v-model="radio" label="1">付费</el-radio>
            </el-form-item>
            <el-form-item label="上传视频">
              <el-upload
                class="avatar-uploader el-upload--text"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleVideoSuccess"
                :before-upload="beforeUploadVideo"
                :on-progress="uploadVideoProcess"
              >
                <video
                  v-if="video !='' && videoFlag == false"
                  :src="video"
                  class="avatar"
                  controls="controls"
                >您的浏览器不支持视频播放</video>
                <i
                  v-else-if="video =='' && videoFlag == false"
                  class="el-icon-plus avatar-uploader-icon"
                ></i>
                <el-progress
                  v-if="videoFlag == true"
                  type="circle"
                  :percentage="videoUploadPercent"
                  style="margin-top:30px;"
                ></el-progress>
              </el-upload>
              <P class="text">请保证视频格式正确，且不超过100M</P>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </section>
    <footer class="footer">
      <p>课程: 视频小节</p>
      <el-button type="danger" @click="submitForm">立即发布</el-button>
    </footer>
  </div>
</template>

<script>
import { apiLogin } from "@/config/api.js";
import { mapState } from "vuex";
export default {
  name: "videoPub",
  data() {
    return {
      videoFlag: false,
      video: "",
      videoUploadPercent: "", //视频上传进度
      radio: "0",
      form: {
        title: "" //视频标题
      }
    };
  },
  created() {},
  computed: {
    ...mapState(["userInfo"])
  },
  methods: {
    beforeUploadVideo(file) {
      const isLt10M = file.size / 1024 / 1024 < 100;
      if (
        [
          "video/mp4",
          "video/ogg",
          "video/flv",
          "video/avi",
          "video/wmv",
          "video/rmvb"
        ].indexOf(file.type) == -1
      ) {
        this.$message.error("请上传正确的视频格式");
        return false;
      }
      if (!isLt10M) {
        this.$message.error("上传视频大小不能超过100MB哦!");
        return false;
      }
    },
    uploadVideoProcess(event, file, fileList) {
      this.videoFlag = true;
      this.videoUploadPercent = file.percentage.toFixed(0) * 1;
    },
    handleVideoSuccess(res, file) {
      this.videoFlag = false;
      console.log(res);
      this.videoUploadPercent = 0;
      if (res.status == 200) {
        this.video = res.data.uploadUrl;
      } else {
        this.$message.error("视频上传失败，请重新上传！");
      }
    },
    submitForm() {
      if (!this.form.title.length) {
        this.$message({
          message: "请输入视频标题",
          type: "warning"
        });
        return false;
      }
    },
    // 提交
    saveHtml(event) {
      console.log(this.form.content);
    }
  }
};
</script>
<style scope>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.video-avatar {
  width: 400px;
  height: 200px;
}
</style>
<style lang="scss" scope>
@import "@/assets/css/mixin.scss";
.article {
  height: calc(100% - 60px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
header {
  height: 60px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eaeaea;
  background: #fff;
  .h-l {
    font-size: 16px;
    font-weight: 500;
    color: #ed4040;
  }
  .h-r {
    font-size: 14px;
    font-weight: 500;
    color: #5990f2;
  }
}
.section-a {
  flex: 1;
  overflow: auto;
}
footer {
  padding: 0 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  border-top: 1px solid rgb(232, 232, 232);
  background-color: white;
  p {
    font-size: 14px;
    color: rgb(158, 158, 158);
  }
}
</style>