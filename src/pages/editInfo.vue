<template>
  <div class="article">
    <section class="section-a">
      <el-row style="margin-top:20px;">
        <el-col :span="22" :offset="1">
          <el-form
            :model="form"
            label-width="80px"
            style="border: 1px solid #eaeefb;padding: 20px 20px 0;background:#ffffff;"
          >
            <el-form-item label="个人昵称">
              <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="个人简介">
              <el-input v-model="form.intro" type="textarea" disabled autosize></el-input>
            </el-form-item>
            <el-form-item label="头像">
              <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                :on-success="success"
                :on-preview="preview"
                :on-remove="remove"
                :limit="1"
                :before-upload="restrict"
              >
                <i class="el-icon-plus"></i>
              </el-upload>
              <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt />
              </el-dialog>
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
  name: "editInfo",
  data() {
    return {
      radio: "0",
      dialogImageUrl: "", //set预览图片
      dialogVisible: false, //set预览图片
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
  methods: {
    submitForm() {
      if (this.form.title.length > 20 || this.form.title.length < 10) {
        this.$message({
          message: "标题字数应在10-20之间",
          type: "warning"
        });
        return false;
      }
      if (this.textLength < 99) {
        this.$message({
          message: "文章内容不得小于100字",
          type: "warning"
        });
        return false;
      }
      if (this.form.imageUrl.length < 1) {
        this.$message({
          message: "请上传文章封面",
          type: "warning"
        });
        return false;
      }
    },
    // 提交
    saveHtml(event) {
      console.log(this.form.content);
    },
    //预览图片
    preview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    //上传成功
    success(response, file, fileList) {
      console.log(fileList);
    },
    //删除图片
    remove(file, fileList) {
      console.log(file, fileList);
    },
    //限制图片大小
    restrict(file) {
      const isLt2M = file.size / 1024 / 1024 < 1;
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 1MB!");
      }
      return isLt2M;
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