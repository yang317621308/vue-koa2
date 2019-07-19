const userModule = require('../utils/query')


console.log(1111)


exports.getSignup = async ctx => {
    ctx.body = {
        code: 400,
        message: '错误'
    }
}

exports.postSignup = async(ctx) => {
    let { name, password, repeatpass } = ctx.request.body

    await userModule.findDataByName(name).then(result => {
        console.log(result)

        if (result.length > 1) {
            //用户已经存在
            ctx.body = {
                code: 500,
                message: '用户存在'
            }
        } else if (password !== repeatpass || password.trim() === '') {
            ctx.body = {
                code: 500,
                message: '两次输入密码不一致'
            }
        } else {
            userModule.insertData([name, password, (new Date()).getTime()]).then(res => {
                console.log('注册成功', res)
                    //注册成功
                ctx.body = {
                    code: 200,
                    message: '注册成功'
                };
            })
        }

    })
}