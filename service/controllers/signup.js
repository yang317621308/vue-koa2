const userModule = require('../utils/query')

exports.getSignup = async ctx => {
    ctx.body = {
        code: 400,
        message: '错误'
    }
}

exports.postSignup = async(ctx) => {
    let { name, password, repeatpass, label, age, emial } = ctx.request.body
    console.log(ctx.request.body)
    await userModule.findDataByName(name).then(result => {


        if (result.length > 0) {
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
            userModule.insertData([name, password, (new Date()).getTime(), label, age, emial]).then(res => {
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