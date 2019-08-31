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
            <el-form-item label="账号">
              <el-input v-model="form.title" disabled></el-input>
            </el-form-item>
            <el-form-item label="原始密码">
              <el-input v-model="form.intro"></el-input>
            </el-form-item>
            <el-form-item label="新密码">
              <el-input v-model="form.intro"></el-input>
            </el-form-item>
            <el-form-item label="确认密码">
              <el-input v-model="form.intro"></el-input>
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
  name: "editPassword",
  data() {
    return {
      form: {
        title: "", //标题
        intro: "" //内容
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
    },
    // 提交
    saveHtml(event) {
      console.log(this.form.content);
    }
  }
};
</script>
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