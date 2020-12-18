<template>
  <div class="addCard">
    <van-nav-bar
      title="添加银行卡"
      left-arrow
      safe-area-inset-top
      @click-left="$router.go(-1)"
    ></van-nav-bar>

    <van-form @submit="onSubmit">
      <van-field
        v-model="form.useCard"
        name="useCard"
        label="身份证号"
        placeholder="请输入持卡人身份证号码"
        :rules="[{ required: true, message: '请填写身份证号' }]"
      />
      <van-field
        v-model="form.cardNo"
        name="cardNo"
        label="卡号"
        placeholder="请输入银行卡卡号"
        :rules="[{ required: true, message: '请填写卡号' }]"
      />
      <van-field
        v-model="form.cardPhone"
        name="cardPhone"
        label="手机号"
        placeholder="请选择银行预留手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit" color="linear-gradient(to right,#5e4ffe, #ca98ff)">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import {addbank} from '@/api/request.js'
export default {
  name: "",
  data() {
    return {
      form: {
        cardUser: "",
        useCard: "",
        cardNo: '',
        cardName: '招商银行',
        cardAddrss: '',
        cardPhone: '',
        id: ''
      }
    };
  },

  components: {},
  computed: {},
  methods: {
    onSubmit(values) {
      addbank(this.form).then(res => {
        if(res.data.code != 20000) return this.$toast('请重试！')
        this.$roast('添加成功！')
        this.$router.push('/card')
      })
    },
  },
  created() {},
  mounted() {
    
  },
};
</script>

<style lang="less" scoped>
@import "../assets/css/public";
.addCard {
  .van-nav-bar {
    background-image: linear-gradient(to right, @Lcolor, @Rcolor);
    /deep/ .van-nav-bar__title {
      color: #fff;
    }
    /deep/ .van-icon {
      color: #fff;
    }
  }
}
</style>