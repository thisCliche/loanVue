<template>
  <div class="index">
    <router-view />
    <van-tabbar v-model="active" route safe-area-inset-bottom>
      <van-tabbar-item to="/home">
        <van-icon class="iconfont" class-prefix="icon" slot="icon" name="home"></van-icon>
        <span>首页</span>
      </van-tabbar-item>
      <van-tabbar-item  to="/bill">
        <van-icon class="iconfont" class-prefix="icon" slot="icon" name="zhangdan"></van-icon>
        <span>账单</span>
      </van-tabbar-item>
      <van-tabbar-item  to="/new">
        <van-icon class="iconfont" class-prefix="icon" slot="icon" name="zixun1"></van-icon>
        <span>资讯</span>
      </van-tabbar-item>
      <van-tabbar-item  to="/my">
        <van-icon class="iconfont" class-prefix="icon" slot="icon" name="yonghu"></van-icon>
        <span>我的</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      active: 0,
    };
  },

  components: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>

<style lang="less" scoped>
.index{
  height: 100%;
}
</style>