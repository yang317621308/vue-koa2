const mysql = require('mysql');

const MYSQL_CONFIG = require('../config/mysql_config')


// mysql
const pool = mysql.createPool(MYSQL_CONFIG)

const query = (sql, val) => {
    return new Promise((resolve, reject) => {
        pool.getConnection(function(err, connection) {
            if (err) {
                reject(err)
            } else {
                connection.query(sql, val, (err, fileds) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(fileds)
                        connection.release()
                    }
                })
            }
        })
    })
}

let users = `create table if not exists users(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    pass VARCHAR(100) NOT NULL,
    age VARCHAR(100),
    label VARCHAR(100),
    emial VARCHAR(100),
    moment VARCHAR(100) NOT NULL,
    constraint driver_name
    Unique (name),
    PRIMARY KEY ( id )
   );`

let posts = `create table if not exists posts(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    title TEXT(0) NOT NULL,
    content TEXT(0) NOT NULL,
    md TEXT(0) NOT NULL,
    uid VARCHAR(40) NOT NULL,
    moment VARCHAR(100) NOT NULL,
    comments VARCHAR(200) NOT NULL DEFAULT '0',
    pv VARCHAR(40) NOT NULL DEFAULT '0',
    avator VARCHAR(100) NOT NULL,
    PRIMARY KEY ( id )
   );`
let comment =
    `create table if not exists comment(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL COMMENT '用户名称',
    content TEXT(0) NOT NULL COMMENT '评论内容',
    moment VARCHAR(40) NOT NULL COMMENT '评论时间',
    postid VARCHAR(40) NOT NULL COMMENT '文章id',
    avator VARCHAR(100) NOT NULL COMMENT '用户头像',
    PRIMARY KEY(id) 
   );`


let createTable = function(sql) {
    return query(sql, [])
}

// 建表
createTable(users)
createTable(posts)
createTable(comment)

// 注册用户
let insertData = function(value) {
        console.log(value, 'value')
        let _sql = "insert into users set name=?,pass=?,moment=?,label=?,age=?,emial=?;"
        return query(_sql, value)
    }
    // 删除用户
let deleteUserData = function(name) {
        let _sql = `delete from users where name="${name}";`
        return query(_sql)
    }
    // 查找用户
let findUserData = function(name) {
        let _sql = `select * from users where name="${name}";`
        return query(_sql)
    }
    // 发表文章
let insertPost = function(value) {
        let _sql = "insert into posts set name=?,title=?,content=?,md=?,uid=?,moment=?,avator=?;"
        return query(_sql, value)
    }
    // 更新文章评论数
let updatePostComment = function(value) {
    let _sql = "update posts set comments=? where id=?"
    return query(_sql, value)
}

// 更新浏览数
let updatePostPv = function(value) {
    let _sql = "update posts set pv=? where id=?"
    return query(_sql, value)
}

// 发表评论
let insertComment = function(value) {
        let _sql = "insert into comment set name=?,content=?,moment=?,postid=?,avator=?;"
        return query(_sql, value)
    }
    // 通过名字查找用户
let findDataByName = function(name) {
        let _sql = `select * from users where name="${name}";`
        return query(_sql)
    }
    // 通过文章的名字查找用户
let findDataByUser = function(name) {
        let _sql = `select * from posts where name="${name}";`
        return query(_sql)
    }
    // 通过文章id查找
let findDataById = function(id) {
        let _sql = `select * from posts where id="${id}";`
        return query(_sql)
    }
    // 通过评论id查找
let findCommentById = function(id) {
    let _sql = `select * FROM comment where postid="${id}";`
    return query(_sql)
}

// 查询所有文章
let findAllPost = function() {
        let _sql = ` select * FROM posts;`
        return query(_sql)
    }
    // 查询分页文章
let findPostByPage = function(page) {
        let _sql = ` select * FROM posts limit ${(page-1)*10},10;`
        return query(_sql)
    }
    // 查询个人分页文章
let findPostByUserPage = function(name, page) {
        let _sql = ` select * FROM posts where name="${name}" order by id desc limit ${(page-1)*10},10 ;`
        return query(_sql)
    }
    // 更新修改文章
let updatePost = function(values) {
        let _sql = `update posts set  title=?,content=?,md=? where id=?`
        return query(_sql, values)
    }
    // 删除文章
let deletePost = function(id) {
        let _sql = `delete from posts where id = ${id}`
        return query(_sql)
    }
    // 删除评论
let deleteComment = function(id) {
        let _sql = `delete from comment where id=${id}`
        return query(_sql)
    }
    // 删除所有评论
let deleteAllPostComment = function(id) {
        let _sql = `delete from comment where postid=${id}`
        return query(_sql)
    }
    // 查找评论数
let findCommentLength = function(id) {
    let _sql = `select content from comment where postid in (select id from posts where id=${id})`
    return query(_sql)
}

// 滚动无限加载数据
let findPageById = function(page) {
        let _sql = `select * from posts limit ${(page-1)*5},5;`
        return query(_sql)
    }
    // 评论分页
let findCommentByPage = function(page, postId) {
    let _sql = `select * from comment where postid=${postId} order by id desc limit ${(page-1)*10},10;`
    return query(_sql)
}

module.exports = {
    query,
    createTable,
    insertData,
    deleteUserData,
    findUserData,
    findDataByName,
    insertPost,
    findAllPost,
    findPostByPage,
    findPostByUserPage,
    findDataByUser,
    findDataById,
    insertComment,
    findCommentById,
    updatePost,
    deletePost,
    deleteComment,
    findCommentLength,
    updatePostComment,
    deleteAllPostComment,
    updatePostPv,
    findPageById,
    findCommentByPage
}