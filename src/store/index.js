import Vue from 'vue'
import Vuex from 'vuex'
import UserModule from "./users.js"
import MessageModule from "./messages.js"


Vue.use(Vuex)
export default new Vuex.Store({
  modules:{
    UserModule,
    MessageModule,
  }
})
