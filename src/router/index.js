import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import sigup from '../views/sigup.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: Login
        },
        {
            path: '*',
            redirect: '/' // 输入其他不存在的地址自动跳回首页
        },
        {
            path: '/sigup',
            component: sigup,
            redirect: '/' // 输入其他不存在的地址自动跳回首页
        }
    ]
})