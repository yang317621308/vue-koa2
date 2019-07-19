import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import TodoList from '../components/TodoList';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Login
    },
    {
      path: '/todolist',
      name: 'todoList',
      component: TodoList
    },
    {
      path: '*',
      redirect: '/' // 输入其他不存在的地址自动跳回首页
    }
  ]
})
