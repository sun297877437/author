<template>
  <el-menu
    router
    :default-active="defaultActive"
    background-color="#1f2d3d"
    text-color="#fff"
    active-text-color="#20a0ff"
    style="min-height: 100%;border-right:none;"
  >
    <!-- 循环一级 -->
    <template v-for="item in items">
      <!-- 判断有无二级 -->
      <template v-if="item.subs">
        <el-submenu :index="item.index" :key="item.index">
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{item.title}}</span>
          </template>
          <!-- 循环二级 -->
          <template v-for="item in item.subs">
            <el-menu-item :index="item.index" :key="item.index">{{item.title}}</el-menu-item>
          </template>
        </el-submenu>
      </template>
      <!-- 无二级 -->
      <template v-else>
        <el-menu-item :index="item.index" :key="item.index">
          <i :class="item.icon"></i>
          <span slot="title">{{item.title}}</span>
        </el-menu-item>
      </template>
    </template>
  </el-menu>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      items: [
        {
          icon: "el-icon-menu",
          index: "0",
          title: "发表",
          subs: [
            {
              index: "articlePub",
              title: "文章发表"
            },
            {
              index: "videoPub",
              title: "课程发表"
            }
          ]
        },
        {
          icon: "el-icon-menu",
          index: "1",
          title: "个人中心",
          subs: [
            {
              index: "userInfo",
              title: "个人信息"
            },
            {
              index: "editInfo",
              title: "信息修改"
            },
            {
              index: "editPassword",
              title: "密码修改"
            }
          ]
        }
      ]
    };
  },
  computed: {
    defaultActive() {
      // return this.$router.path.replace("/", "");
      return this.$route.path.substr(1);
    }
  }
};
</script>
<style lang='scss' scoped>
@import "@/assets/css/mixin.scss";
</style>