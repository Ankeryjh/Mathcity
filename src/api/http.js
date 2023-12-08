import axios from 'axios'
import qs from 'qs'
import httpApi from './httpApi.js'
// const baseSrc = ""
function setUrl(src) {
  let url = httpApi.api.baseSrc + httpApi.api[src]
  return  encodeURI(url)
}

function setOutUrl(src) {
  let url = httpApi.api[src]
  return  encodeURI(url)
}
export default {
  install(Vue) {
    //get 请求
    Vue.prototype.GetAxios = function(src, params) {
      let url = setUrl(src) //设置url
      return new Promise((resolve, reject) => {
        axios.get(url, params)
          .then(response => {
            resolve(response);
          }, err => {
            reject(err);
          })
          .catch((error) => {
            reject(error)
          })
      })
    }
    Vue.prototype.GetJson = function(src, params){
      let url = setUrl(src) //设置url
      return new Promise((resolve,reject)=>{
        axios.request({
              url: url,
              method:"get",
              params: params,
              headers: {
                'Content-Type': "application/json; charset=utf-8"
              }
          }).then((ok)=>{
              resolve(ok)
          }).catch((err)=>{
              reject(err)
          })
      })
  }
    // formdata格式 post
    Vue.prototype.PostAxios = function(src, params) {
      let url = setUrl(src) //设置url
      return new Promise((resolve, reject) => {
        axios.post(url, qs.stringify(params))
          .then(response => {
            resolve(response);
          }, err => {
            reject(err);
          })
          .catch((error) => {
            reject(error)
          })
      })
    }
    // json格式 post
    Vue.prototype.PostJsonAxios = function(src, params) {
      let obj = setUrl(src) //设置url
      return new Promise((resolve, reject) => {
        axios({
            url: obj,
            method: 'post',
            data:params,
            headers: {
              'Content-Type': "application/json; charset=utf-8"
            },
          }).then(response => {
            resolve(response);
          }, err => {
            reject(err);
          })
          .catch((error) => {
            reject(error)
          })
      })
    }
    //接入第三方时的请求
    //get 请求
    Vue.prototype.GetOutAxios = function(src, params) {
      let url = setOutUrl(src) //设置url
      return new Promise((resolve, reject) => {
        axios.get(url, params)
          .then(response => {
            resolve(response);
          }, err => {
            reject(err);
          })
          .catch((error) => {
            reject(error)
          })
      })
    }
    Vue.prototype.GetOutJson = function(src, params){
      let url = setOutUrl(src) //设置url
      return new Promise((resolve,reject)=>{
        axios.request({
              url: url,
              method:"get",
              params: params,
              headers: {
                'Content-Type': "application/json; charset=utf-8"
              }
          }).then((ok)=>{
              resolve(ok)
          }).catch((err)=>{
              reject(err)
          })
      })
  }
    // formdata格式 post
    Vue.prototype.PostOutAxios = function(src, params) {
      let url = setOutUrl(src) //设置url
      return new Promise((resolve, reject) => {
        axios.post(url, qs.stringify(params))
          .then(response => {
            resolve(response);
          }, err => {
            reject(err);
          })
          .catch((error) => {
            reject(error)
          })
      })
    }
    // json格式 post
    Vue.prototype.PostOutJsonAxios = function(src, params) {
      let obj = setOutUrl(src) //设置url
      return new Promise((resolve, reject) => {
        axios({
            url: obj,
            method: 'post',
            data:params,
            headers: {
              'Content-Type': "application/json; charset=utf-8"
            },
          }).then(response => {
            resolve(response);
          }, err => {
            reject(err);
          })
          .catch((error) => {
            reject(error)
          })
      })
    }

  }
}

