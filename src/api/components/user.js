import BaseService from '../BaseApi'
import { reject } from 'q';

class UserService {
    static login(userInfo) {
        return new Promise((resolve, reject) => {
            BaseService({
                baseURL: 'api/user/login',
                method: 'post',
                data: userInfo
            }).then(Response => {
                resolve(Response)
            }).catch(err => {
                reject(err)
            })
        })
    }


    static sigup(userInfo) {
        return new Promise((resolve, reject) => {
            BaseService({
                baseURL: 'api/user/signup',
                method: 'post',
                data: userInfo
            }).then(Response => {
                resolve(Response)
            }).catch(err => {
                reject(err)
            })
        })
    }


}

export default UserService