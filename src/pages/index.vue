<template>
  <div class="page">aaa</div>
</template>

<script>
import { apiLogin } from "js/api";
import { mapState } from "vuex";
export default {
  name: "Login",
  data() {
    return {};
  },
  created() {},
  computed: {
    ...mapState(["userInfo"])
  },
  methods: {}
};
</script>

<style lang="scss">
@import "@/assets/css/mixin.scss";
.page {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>