<template>
  <div class="set">
    <van-nav-bar
      title="设置"
      left-arrow
      safe-area-inset-top
      @click-left="$router.go(-1)"
    ></van-nav-bar>
    <van-cell title="修改密码" is-link to="modifypwd">
        <template #icon>
          <van-icon class-prefix="icon" name="mima" class="iconfont" />
        </template>
      </van-cell>
      <van-cell title="退出登录" @click="signOut">
        <template #icon>
          <van-icon class-prefix="icon" name="quit-s" class="iconfont" />
        </template>
      </van-cell>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
    }
  },

  components: {},
  computed: {},
  methods: {
    signOut() {
      localStorage.removeItem('token');
      this.$router.push('/login')
      this.$toast('退出成功！')
    }
  },
  created() {},
  mounted() {},
}
</script>

<style lang="less" scoped>
@import "../assets/css/public";
.set {
  background: #f5f5f5;
  height: 100%;
  .van-nav-bar {
    background-image: linear-gradient(to right, @Lcolor, @Rcolor);
    /deep/ .van-nav-bar__title {
      color: #fff;
    }
    /deep/ .van-icon {
      color: #fff;
    }
  }
  .iconfont{
    margin-right: .2rem;
  }
}
</style>