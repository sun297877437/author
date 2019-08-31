<template>
  <div class="manage_page fillcontain">
    <el-row style="height:100%;">
      <el-col :span="4" style="min-height:100%;background-color: #324057;overflow: hidden;">
        <v-side></v-side>
      </el-col>
      <el-col :span="20" style="height: 100%;overflow: auto;">
        <v-header></v-header>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import vHeader from "@/components/header";
import vSide from "@/components/sideBar";
export default {
  components: {
    vHeader,
    vSide
  }
};
</script>
<style lang='scss' scoped>
@import "@/assets/css/mixin.scss";
</style>