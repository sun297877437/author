<template>
  <div class="page">
    <img class="ms-banner" src="~img/login/login01.png" />
    <div class="ms-login">
      <div class="ms-title">用户登录</div>
      <el-form label-width="0px" class="ms-content">
        <el-form-item>
          <el-input v-model="account" placeholder="输入账号">
            <el-button slot="prepend" icon="el-icon-mobile-phone"></el-button>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            :type="show ? 'text' : 'password'"
            placeholder="输入密码"
            v-model="password"
            @keyup.enter.native="login"
          >
            <el-button slot="prepend" icon="el-icon-view" @click="show = !show"></el-button>
          </el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="login">登录</el-button>
        </div>
        <p class="login-tips">Tips : 请注意输入字母的大小写</p>
      </el-form>
    </div>
  </div>
</template>

<script>
import { apiLogin } from "@/config/api.js";
import { mapState } from "vuex";
export default {
  name: "login",
  data() {
    return {
      show: false,
      account: "", //账号
      password: "", //密码
      fileList: [
        {
          name: "food.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        }
      ]
    };
  },
  created() {},
  computed: {
    ...mapState(["userInfo"])
  },
  methods: {
    login() {
      const vm = this;
      if (vm.account == "" || vm.password.length == "") {
        vm.$message({
          message: "请输入正确的账号和密码",
          type: "warning"
        });
        return false;
      }
      const params = {
        account: vm.account,
        password: vm.password
      };
      apiLogin(params)
        .then(() => {
          console.log("success");
        })
        .catch(() => {
          vm.$router.push({ name: "articlePub" });
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
.page {
  position: relative;
  width: 100%;
  height: 100%;
  background: url("~img/login/login-bg.jpg");
  background-size: 100%;
  .ms-banner {
    position: absolute;
    left: 50%;
    top: 60px;
    width: 520px;
    height: 360px;
    margin: 0px 0 0 -260px;
  }
  .ms-login {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 350px;
    margin: -190px 0 0 -175px;
    border-radius: 5px;
    background: #ffffff;
    overflow: hidden;
    .ms-title {
      width: 80%;
      margin: 0 auto;
      line-height: 50px;
      text-align: center;
      font-size: 18px;
      color: #000000;
      border-bottom: 1px solid #d9d9d9;
    }
    .ms-content {
      padding: 30px;
    }
    .login-btn {
      button {
        width: 100%;
        height: 36px;
        margin-bottom: 10px;
        background-color: #f85959;
        border-color: #ffffff;
        &:hover {
          border-color: #f85959;
        }
      }
    }
    .login-tips {
      font-size: 12px;
      line-height: 30px;
      color: gray;
    }
  }
}
</style>