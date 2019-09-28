<template>
  <div>
    <div class="logo">日源</div>
    <el-menu
      router
      :default-active="defaultActive"
      background-color="#464c5b"
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
              <i
                :class="item.icon"
                style="padding-left: 30px;font-size: 16px;color: hsla(0,0%,100%,.7);"
              ></i>
              <span>{{item.title}}</span>
            </template>
            <!-- 循环二级 -->
            <template v-for="item in item.subs">
              <el-menu-item
                :index="item.index"
                :key="item.index"
                style="padding-left: 80px;"
              >{{item.title}}</el-menu-item>
            </template>
          </el-submenu>
        </template>
        <!-- 无二级 -->
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i
              :class="item.icon"
              style="padding-left: 30px;font-size: 16px;color: hsla(0,0%,100%,.7);"
            ></i>
            <span slot="title">{{item.title}}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      items: [
        {
          icon: "el-icon-s-home",
          index: "home",
          title: "主页"
        },
        {
          icon: "el-icon-s-promotion",
          index: "1",
          title: "美文管理",
          subs: [
            {
              index: "articlePub",
              title: "美文发表"
            },
            {
              index: "articleList",
              title: "美文列表"
            }
          ]
        },
        {
          icon: "el-icon-s-data",
          index: "0",
          title: "课程管理",
          subs: [
            {
              index: "videoPub",
              title: "课程发表"
            },
            {
              index: "videoAdd",
              title: "添加视频"
            },
            {
              index: "videoList",
              title: "课程列表"
            }
          ]
        },
        {
          icon: "el-icon-user-solid",
          index: "2",
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
.logo {
  height: 70px;
  line-height: 70px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: aliceblue;
  background: #495060;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
</style>