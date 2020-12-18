import axios from 'axios'

const service = axios.create({
  baseURL: 'https://api.51jikeyou.com:9000',
  timeout: 3000,
  headers :{
    'Content-Type': 'application/json;charset=utf-8'
  } 
})
service.interceptors.request.use(config => {
  config.headers['Access-Token'] = window.localStorage.getItem('token') || null
  return config
})

// 登录请求
export function login(data) {
  return service({
    url: '/borrowtwo/user/signIn',
    method: 'post',
    data: data
  })
}
// 注册
export function signup(data) {
  return service({
    url: '/borrowtwo/user/signUp',
    method: 'post',
    data: data
  })
}
// 用户还款明细
export function repayment() {
  return service({
    url: '/borrowtwo/getRepayment',
    method: 'get'
  })
}

// 用户获取银行卡列表
export function banklist() {
  return service({
    url: '/borrowtwo/getBankList',
    method: 'get'
  })
}
// 添加银行卡
export function addbank(data) {
  return service({
    url: '/borrowtwo/user/addBankCard',
    method: 'put',
    data: data
  })
}
// 借钱
export function borrow(data) {
  return service({
    url: '/borrowtwo/user/addRepayment',
    method: 'put',
    data: data
  })
}
//获取额度
export function limitmoney() {
  return service({
    url: '/borrowtwo/getLimitMoney',
    method: 'get',
  })
}
// 发送短信
export function sendsms(data) {
  return service({
    url: '/borrowtwo/user/sms/send',
    method: 'get',
    params: data
  })
}
// 修改密码
export function modify(data) {
  return service({
    url: '/borrowtwo/user/updatePassword',
    method: 'put',
    params:data
  })
}
// 七日待还
export function seven() {
  return service({
    url: '/borrowtwo/getSevenRepayment',
    method: 'get'
  })
}