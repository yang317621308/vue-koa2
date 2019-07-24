<template>
  <div class="sigup">
    <div class="sigup-form">
<el-form  label-width="80px" :model="signupForm">
      <el-form-item label="用户名">
        <el-input v-model="signupForm.name"></el-input>
      </el-form-item>
       <el-form-item label="名称">
        <el-input v-model="signupForm.label"></el-input>
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model="signupForm.age" ></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="signupForm.emial" ></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="signupForm.password" show-password></el-input>
      </el-form-item>
      <el-form-item label="重复密码">
        <el-input v-model="signupForm.repeatpass" show-password></el-input>
      </el-form-item>
      <el-form-item >
        <el-button @click="back">返回</el-button>
        <el-button @click="signup">注册</el-button>
      </el-form-item>
    </el-form>
    </div>
    
  </div>
</template>
<script>
import UserService from '../api/components/user'
export default {
  data() {
    return {
      signupForm: {
        name: "123",
        password: "123",
        repeatpass: "123",
        emial:"123",
        age:"123",
        label:"123"
      }
    };
  },
  methods: {
      signup(){
        UserService.sigup(this.signupForm).then(data=>{
               console.log(data)
        }).catch(err=>{
          console.log(err)
        })
      },
      back(){
        this.$router.push({name:'login'})
      }
  },
};
</script>
<style lang="scss">
    .sigup{
      width: 100%;
      display: flex;
      .sigup-form{
        width: 800px;
        margin: auto
      }
    }

</style>