<template>
  <div class="feedback">
    <van-nav-bar
      title="意见反馈"
      left-arrow
      safe-area-inset-top
      @click-left="$router.go(-1)"
    ></van-nav-bar>
    <div style="margin:0 .24rem;">
      <p style="font-size:.32rem;line-height:1rem;">内容描述</p>
    <van-field
  v-model="message"
  rows="6"
  type="textarea"
  maxlength="300"
  placeholder="您遇到的问题均可在此反馈"
  show-word-limit
  :rules="[{ required: true, message: '请填写内容' }]"
/>
<div style="text-align:center;margin-top:1.2rem"><van-button @click="submit" style="width:5.32rem;" round color="linear-gradient(to right,#5e4ffe, #ca98ff)">确定</van-button></div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      message: ''
    }
  },

  components: {},
  computed: {},
  methods: {
    submit() {
      if(this.message == '') return this.$toast('请填写内容')
      else{
          this.$toast('反馈成功！')
        this.message = ''
      }
    }
  },
  created() {},
  mounted() {},
}
</script>

<style lang="less" scoped>
@import "../assets/css/public";
.feedback {
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
  .van-field{
    background-color:transparent;
    border: 1px solid #eee;
    border-radius: .1rem;
  }
}
</style>