<template>
  <div class="loan">
    <van-nav-bar
      title="贷款"
      left-arrow
      safe-area-inset-top
      @click-left="$router.go(-1)"
    ></van-nav-bar>
    <div class="bg" style="color: #fff; text-align: center">
      <p style="font-size: 0.32rem; padding: 0.9rem 0 0.6rem">
        {{ username }}，您的可贷款额度（元）
      </p>
      <p style="font-size: 0.9rem">{{ quota }}</p>
      <p style="font-size: 0.28rem; margin-top: 0.6rem">
        日利率万1（1千元用1天0.1元）
      </p>
    </div>
    <div class="card">
      <van-button
        style="width: 5.32rem; font-size: 0.42rem"
        round
        color="linear-gradient(to right,#5e4ffe, #ca98ff)"
        @click="gotoLoan"
        >去借款</van-button
      >
    </div>
    <img class="last" src="../assets/img/bg.png" alt="" />
    <van-action-sheet v-model="show" title="  ">
      <div class="content">
        <van-field
          size="large"
          class="money"
          style="font-size: 0.4rem; font-weight: 700"
          v-model="form.repaymentNum"
          left-icon="gold-coin-o"
          placeholder="请输入借款金额"
        />
        <van-cell-group>
          <van-field label="收款卡号" :value="amount.cardNum" readonly />
          <van-field label="银行" :value="amount.bank" readonly />
          <van-field
            @click="change"
            label="还款日期"
            :value="currentDate1"
            readonly
          />
          <van-field label="总利息" :value="interest" readonly />
        </van-cell-group>
        <van-button
          round
          style="width: 5.32rem; margin-top: 0.3rem"
          color="linear-gradient(to right,#5e4ffe, #ca98ff)"
          @click="confirm"
          >确定借款</van-button
        >
      </div>
    </van-action-sheet>
    <van-datetime-picker
      v-show="isShow"
      v-model="currentDate"
      type="date"
      title="选择年月日"
      :min-date="minDate"
      :max-date="maxDate"
      @confirm="confirmChange"
      @cancel="confirmChange"
    />
  </div>
</template>

<script>
import { borrow, limitmoney } from "@/api/request.js";
export default {
  name: "",
  data() {
    return {
      isShow: false,
      show: false,
      minDate: new Date(),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(),
      username: "",
      quota: "",
      amount: {
        money: 20000,
        cardNum: "689547*****1234",
        bank: "中信银行",
        repayment: "1天后（11月14日）还清",
        interest: "0.00元",
      },
      form: {
        id: 0,
        repaymentNum: 0,
        repaymentStatus: 0,
        repaymentTime: "",
        userId: 0,
      },
    };
  },

  components: {},
  computed: {
    currentDate1() {
      return this.dateFormat("YYYY-mm-dd HH:MM:SS", this.currentDate);
    },
    interest() {
      let day = (this.currentDate - this.minDate)/(1*24*60*60*1000)
      let interest = this.form.repaymentNum*0.0001*day
      // return day
      return interest.toFixed(2) + '元'
    }
  },
  methods: {
    confirmChange(){
      this.isShow = !this.isShow
    },
    change() {
      this.isShow = !this.isShow
    },
    gotoLoan() {
      this.show = !this.show;
    },
    confirm() {
      this.form.repaymentTime = this.currentDate1
      if(this.form.repaymentNum < 100) {
        return this.$toast('借款一百元起！')
      }
      borrow(this.form).then((res) => {
        if(res.data.code != 20000) return this.$toast('请重试！')
        this.$toast('借款成功！')
        this.show = !this.show
        this.loan()
      });
    },
    dateFormat(fmt, date) {
      let ret;
      const opt = {
        "Y+": date.getFullYear().toString(), // 年
        "m+": (date.getMonth() + 1).toString(), // 月
        "d+": date.getDate().toString(), // 日
        "H+": date.getHours().toString(), // 时
        "M+": date.getMinutes().toString(), // 分
        "S+": date.getSeconds().toString(), // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
      };
      for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
          fmt = fmt.replace(
            ret[1],
            ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0")
          );
        }
      }
      return fmt;
    },
    loan() {
      limitmoney().then((res) => {
      this.quota = res.data.data;
      this.form.repaymentNum = res.data.data;
    });
    }
  },
  created() {},
  mounted() {
    let name = localStorage.getItem("phone");
    name = name.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2");
    this.username = name;
    this.loan()
  },
};
</script>

<style lang="less" scoped>
@import "../assets/css/public";
.loan {
  height: 100%;
  .bg {
    background-image: linear-gradient(to right, @Lcolor, @Rcolor);
    height: 5.26rem;
    width: 100%;
  }
  .card {
    margin: -0.9rem 0.24rem 0;
    height: 3.54rem;
    padding-top: 1.25rem;
    border-radius: 0.1rem;
    box-shadow: 0px 9px 10px 0px #c1c1c1;
    text-align: center;
    background: #fff;
    z-index: 9;
  }
  .last {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: -1;
  }
  .content {
    padding: 0.32rem;
    text-align: center;
    .money /deep/ .van-icon {
      font-size: 0.4rem;
      font-weight: 700;
    }
  }
  .van-datetime-picker{
      z-index: 3000;
    box-shadow: 0px -7px 20px 7px #eceaea;
    }
}
</style>