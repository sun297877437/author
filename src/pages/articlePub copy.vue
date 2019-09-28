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
                :on-prediv="prediv"
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
      <div>
        <el-button type="danger" @click="dialogVisible1 = true">预览</el-button>
        <el-button type="danger" @click="submitForm">立即发表</el-button>
      </div>
    </footer>
    <el-dialog title="预览" :visible.sync="dialogVisible1" width="418px">
      <div class="section-b">
        <div class="item">
          <div class="item-t">
            <div class="userInfo">
              <img src="~img/test/avi.jpg" />
              <div class="name">
                <span>爱我所爱</span>
                <span>2019.0808</span>
              </div>
            </div>
          </div>
          <div class="item-a">
            <span class="title">{{form.title}}</span>
          </div>
          <div class="item-b" v-html="form.content"></div>
        </div>
      </div>
    </el-dialog>
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
      // ["bold"], //加粗，斜体，
      // ["blockquote"], //引用，代码块
      // [{ list: "ordered" }, { list: "bullet" }], //列表
      ["image"] //上传图片、上传视频
      // ["clean"] //清除字体样式
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
      dialogVisible1: false,
      dialogImageUrl: "", //set预览图片
      dialogVisible: false, //set预览图片
      editorOption, //配置富文本
      radio: 1, //单图多图
      form: {
        title: "时政新闻眼丨半年之后又“豫”见", //标题
        content:
          "9月17日，习近平河南之行进入第二天。这次赴河南考察，是总书记半年以来与河南的第二次零距离接触。今年3月8日，习近平在全国两会期间来到河南代表团参加审议，针对实施乡村振兴战略、做好“三农”工作提出六点要求。继前一天在信阳市新县考察后，17日这一天，习近平辗转信阳、郑州两地，连续看了五个考察点。", //内容
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
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    submitForm() {
      console.log(this.form.content);
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
      console.log(this.form.content);
      this.textLength = e.text.replace(/\s*/g, "").length;
    },
    // 提交
    saveHtml(event) {
      console.log(this.form.content);
    },
    //预览图片
    prediv(file) {
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
  height: calc(100% - 70px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.section-a {
  flex: 1;
  overflow: auto;
}
//
.section-b {
  width: 325px;
  height: 600px;
  padding: 10px;
  overflow: auto;
  border: 16px solid #eeeeee;
  border-radius: 26px;
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbIAAANICAYAAACi5WpKAADWv0lEQ…hstKv9Hg+FZUZEE6+aQTNlQsvPob5RPtTfPxFNLVM6sIL8/8I+65iMaciKAAAAAElFTkSuQmCC");
  h1 {
    font-size: 14px;
    padding-bottom: 5px;
  }
  li {
    list-style: disc;
  }
  .item {
    padding: 15px 0;
    .item-t {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 5px;
      .userInfo {
        display: flex;
        width: 50%;
        img {
          width: 30px;
          height: 30px;
          border-radius: 50%;
        }

        .name {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          margin-left: 11px;
          height: 30px;

          span {
            display: block;

            &:first-child {
              font-size: 12px;
              color: #414141;
            }

            &:last-child {
              font-size: 9px;
              color: #8e8e8e;
            }
          }
        }
      }

      .focus {
        width: 39px;
        font-size: 110px;
        height: 18px;
        line-height: 18px;
      }
    }

    .item-a {
      padding: 8px 5px 0;
      margin-bottom: -3px;

      .title {
        font-weight: bold;
        color: #414141;
        font-size: 12px;
      }
    }

    .item-b {
      padding: 16px 5px 0;
      margin: 0 auto;
      font-size: 12px;
      img {
        width: 100%;
      }
    }

    .item-c {
      overflow: hidden;
      display: flex;
      flex-wrap: wrap;

      img {
        width: 102px;
        height: 102px;
        border-radius: 1px;
        margin-left: 2px;

        &:first-child {
          margin-left: 5px;
        }
      }

      .image-one {
        width: 100%;
        height: 130px;
        border-radius: 1px;
        margin: 0 5px;
      }
    }
  }
}
//
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