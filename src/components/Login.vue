<template>
  <el-row class="content">
    <el-col :xs="24" :sm="{span: 6,offset: 9}">
      <span class="title">
       欢迎登录 
      </span>
      <el-row>
        <el-input 
          v-model="account" 
          placeholder="账号"
          type="text">
        </el-input>
        <el-input 
          v-model="password" 
          placeholder="密码"
          type="password">
        </el-input>
        <el-button type="primary" @click="login">登录</el-button>
        <el-button type="primary" @click="signup">注册</el-button>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      account: '',
      password: ''
    };
  },
  methods: {
      login(){
        this.$axios({
          method:'get',
          url:'/api/get'
        }).then(data=>{
          console.log(data)
        })
          // this.$router.push('/todolist')
      },
      signup(){
        this.$router.push({'name':"sigup"})
      }
  },
};
</script>

<style lang="scss" scoped>
  .content{
    .el-input{
      margin:0 0 20px 0;
    }
  }
</style>