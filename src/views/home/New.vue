<template>
  <div class="new">
    <van-nav-bar title="资讯" :border="false" safe-area-inset-top></van-nav-bar>
    <div style="margin-top:-78px;">
      <img style="width:100%;" src="../../assets/img/ze.png" alt="">
    </div>
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
  methods: {},
  created() {},
  mounted() {},
}
</script>

<style lang="less" scoped>
.new{
  padding-bottom: 50px;
    height: 100%;
    overflow: auto;
  .van-nav-bar {
    background: transparent;
    /deep/ .van-nav-bar__title {
      color: #fff;
    }
  }
}
</style>