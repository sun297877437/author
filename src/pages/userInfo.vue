<template>
  <div class="article">
    <header>
      <span class="h-l">信息修改</span>
    </header>
    <section class="section-a">
      <el-row style="margin-top:20px;">
        <el-col :span="22" :offset="1">
          <el-form
            :model="form"
            label-width="80px"
            style="border: 1px solid #eaeefb;padding: 10px 10px 0;"
          >
            <el-form-item label="个人昵称">
              <el-input v-model="form.title" disabled></el-input>
            </el-form-item>
            <el-form-item label="个人简介">
              <el-input v-model="form.intro" type="textarea" disabled autosize></el-input>
            </el-form-item>
            <el-form-item label="头像" disabled>
              <el-image style="width: 100px; height: 100px" :src="url" fit="fit"></el-image>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </section>
    <footer class="footer">
      <p></p>
      <el-button type="danger" @click="submitForm">立即修改</el-button>
    </footer>
  </div>
</template>

<script>
import { apiLogin } from "@/config/api.js";
import { mapState } from "vuex";
export default {
  name: "userInfo",
  data() {
    return {
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      form: {
        title: "", //标题
        intro: "", //内容
        imageUrl: [] //上传图片
      }
    };
  },
  created() {},
  computed: {
    ...mapState(["userInfo"])
  },
  methods: {}
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
  width: 180px;
  height: 100px;
  line-height: 100px;
  text-align: center;
}
.avatar {
  width: 180px;
  height: 100px;
  display: block;
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