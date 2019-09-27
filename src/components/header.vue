<template>
  <div class="header">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="h-right">
      <img src="~img/test/avi.jpg" alt />
      <el-dropdown class="user-name" trigger="click" style="margin-right:20px;">
        <span class="el-dropdown-link">
          {{userInfo.name}}
          <i class="el-icon-caret-bottom"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item divided command="loginout" icon="el-icon-switch-button">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
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
    loginout() {}
  }
};
</script>
<style lang='scss' scoped>
@import "@/assets/css/mixin.scss";
.header {
  @include flex(space-between, center);
  padding-left: 20px;
  background-color: #eff2f7;
  height: 60px;
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