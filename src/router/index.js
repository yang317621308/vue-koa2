import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import sigup from '../views/sigup.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '*',
            redirect: '/login'
        }, {
            path: '/sigup',
            component: sigup,
            name: 'sigup',
        }
    ]
})