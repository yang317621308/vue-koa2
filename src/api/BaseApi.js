import axios from 'axios'

const BaseService = axios.create({
    timeout: 10000
})


BaseService.interceptors.response.use(
    response => {
        /**
         * res.error 数组长度不为0为出错，错误原因error[0].message
         */
        const res = response.data
        if (res.errors && res.errors.length > 0) {
            return Promise.reject(res.errors)
        } else {
            return response.data
        }
    },
    error => {
        return Promise.reject(error)
    }
)


export default BaseService