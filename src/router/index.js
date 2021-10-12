import Vue from 'vue'
import VueRouter from 'vue-router'
import UserList from '../pages/UserList.vue'
import UserDetail from '../pages/UserDetail.vue'
import Chat from '../pages/Chat.vue'
import MessageList from '../pages/MessageList.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'UserList',
    component: UserList,
  },
  {
    path:'/user-detail/:id',
    name:"UserDetail",
    component:UserDetail,
  },
  {
    path:'/chat/:id',
    name:'chat',
    component:Chat
  },
  {
    path:'/message-list/',
    name:'messageList',
    component:MessageList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
