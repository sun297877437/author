<template>
  <div class="article">
    <header>
      <span class="h-l">发布文章</span>
      <span class="h-r">
        <router-link to="/articleSpecification">发文规范</router-link>
      </span>
    </header>
    <section class="section-a">
      <el-row style="margin-top:20px;">
        <el-col :span="22" :offset="1">
          <el-form
            :model="form"
            label-width="80px"
            style="border: 1px solid #eaeefb;padding: 10px 10px 0;"
          >
            <el-form-item label="标题">
              <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="内容">
              <quill-editor
                v-model="form.content"
                ref="myQuillEditor"
                class="editer"
                :options="editorOption"
                @change="onEditorChange($event)"
              ></quill-editor>
            </el-form-item>
            <el-form-item label="封面">
              <el-radio-group v-model="radio">
                <el-radio :label="1">单图</el-radio>
                <el-radio :label="3">三图</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item>
              <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                :on-success="success"
                :on-preview="preview"
                :on-remove="remove"
                :limit="form.radio"
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
      <p>字数 {{textLength}}（已保存）</p>
      <el-button type="danger" @click="submitForm">立即发表</el-button>
    </footer>
  </div>
</template>

<script>
import { quillEditor } from "vue-quill-editor";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { apiLogin } from "@/config/api.js";
import { mapState } from "vuex";
const editorOption = {
  modules: {
    toolbar: [
      [{ header: 1 }], // 标题，键值对的形式；1、2表示字体大小
      ["bold"], //加粗，斜体，
      ["blockquote"], //引用，代码块
      [{ list: "ordered" }, { list: "bullet" }], //列表
      ["image"], //上传图片、上传视频
      ["clean"] //清除字体样式
    ]
  }
};
export default {
  name: "articlePub",
  components: {
    quillEditor
  },
  data() {
    return {
      dialogImageUrl: "", //set预览图片
      dialogVisible: false, //set预览图片
      editorOption, //配置富文本
      radio: 1, //单图多图
      form: {
        title: "", //标题
        content: "", //内容
        imageUrl: [] //上传图片
      },
      textLength: 0
    };
  },
  created() {},
  computed: {
    ...mapState(["userInfo"]),
    editor() {
      return this.$refs.myQuillEditor.quill;
    }
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
    // 字数计算
    onEditorChange(e) {
      this.textLength = e.text.replace(/\s*/g, "").length;
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
.ql-editor {
  height: auto;
  min-height: 300px;
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