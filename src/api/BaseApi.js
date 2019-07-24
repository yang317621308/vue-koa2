import axios from 'axois'

const BaseService = axios.create({
    timeout: 10000
})


export default BaseService