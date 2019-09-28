<template>
  <div class="header">
    <el-row style="height:100%;width:100%;">
      <el-col :span="22" :offset="1">
        <div class="context">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>
          </el-breadcrumb>
          <div class="h-right">
            <el-dropdown class="user-name" trigger="click" style="margin-right:20px;">
              <span class="el-dropdown-link">
                {{userInfo.name}}
                <i class="el-icon-caret-bottom"></i>
              </span>
              <el-dropdown-menu slot="dropdown" divided="false">
                <el-dropdown-item divided command="loginout" icon="el-icon-switch-button">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  components: {},
  data() {
    return {};
  },
  updated() {
    console.log(this.$route.meta);
  },
  mounted() {},
  computed: {
    ...mapState(["userInfo"])
  },
  methods: {
    loginout() {
      alert("1111");
      const vm = this;
      vm.$router.push({ name: "login" });
    }
  }
};
</script>
<style lang='scss' scoped>
@import "@/assets/css/mixin.scss";
.header {
  background-color: #ffffff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  .context {
    height: 70px;
    @include flex(space-between, center);
  }
  .h-right {
    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      margin-right: 20px;
    }
  }
}
</style>