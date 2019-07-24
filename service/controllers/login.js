const userModule = require('../utils/query')




exports.login = async(ctx) => {
    let { name, password } = ctx.request.body

    await userModule.findDataByName(name).then(result => {
        console.log(result)

        if (result.length > 0) {
            //用户已经存在
            if (password === result[0].pass) {
                ctx.body = {
                    code: 200,
                    message: '登陆成功'
                }
            } else {
                ctx.body = {
                    code: 500,
                    message: '用户名或密码错误'
                }
            }

        } else {
            ctx.body = {
                code: 500,
                message: '用户不存在'
            }
        }

    })
}