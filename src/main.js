// 入口文件
import Vue from 'vue'
// 1.1 导入路由的包
import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter)

// 导入格式化时间的插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})

// 2.1 导入 vue-resource
import VueResource from 'vue-resource'
// 2.2 安装 vue-resource
Vue.use(VueResource)

//注册VUEX
import Vuex from 'vuex'
Vue.use(Vuex)

var cars = JSON.parse(localStorage.getItem('car')||'[]')


var store = new Vuex.Store({
  state:{
    car:cars
  },
  mutations:{
    addToCar(state,goodsinfo){
      var flag = false

      state.car.some(item=>{
        if (item.id == goodsinfo.id){
          item.count += parseInt(goodsinfo.count)
          flag = true
          return true
        }
      })

      if (!flag){
        state.car.push(goodsinfo)
      }

      localStorage.setItem('car',JSON.stringify(state.car))
    },

    UpdateGoodsInfo(state,goodsinfo){
      state.car.some(item=>{
        if (item.id == goodsinfo.id){
          item.count = parseInt(goodsinfo.count)
          return true
        }
      })

      localStorage.setItem('car',JSON.stringify(state.car))
    },

    removeFormCar(state,id){
      state.car.some((item,i)=>{
        if (item.id == id){
          state.car.splice(i,1);
          return true;
        }
      })

      localStorage.setItem('car',JSON.stringify(state.car))
    },

    updateGoodsSelected(state,info){
      state.car.some(item=>{
        if (item.id == info.id){
          item.selected = info.selected
        }
      })

      localStorage.setItem('car',JSON.stringify(state.car))
    }

  },
  getters:{
    getAllCount(state){
      var c = 0;
      state.car.forEach(item=>{
        c += item.count
      })
      return c
    },

    getGoodsCount(state){
      var o = {}
      state.car.forEach(item=>{
        o[item.id] = item.count
      })

      return o
    },
    getGoodsSelected(state){
      var o = {}
      state.car.forEach(item=>{
        o[item.id] = item.selected
      })
      return o
    },

    getGoodsCountAndAmount(state){
      var o = {
        count:0,
        amount:0
      }
      state.car.forEach(item=>{
        if (item.selected){
          o.count += item.count;
          o.amount += item.price * item.count
        }
      })
      return o
    }


  }
})

// 设置请求的根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005';

Vue.http.options.emulateJSON = true;


// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
// 导入扩展图标样式
import './lib/mui/css/icons-extra.css'

import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

//安装预览插件
import VuePreview from 'vue-preview'

// defalut install
Vue.use(VuePreview)



// 按需导入 Mint-UI 中的组件   
import { Header, Swipe, SwipeItem, Button,Switch } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)
import { Lazyload } from 'mint-ui';
Vue.use(Lazyload)
Vue.component(Switch.name, Switch);

// 1.3 导入自己的 router.js 路由模块
import router from './router.js'


// 导入 App 根组件
import app from './App.vue'

var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router, // 1.4 挂载路由对象到 VM 实例上
  store
})