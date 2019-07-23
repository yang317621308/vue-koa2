<template>
  <div>
    <el-form :label-position="labelPosition" label-width="80px" :model="signupForm">
      <el-form-item label="用户名">
        <el-input v-model="signupForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="signupForm.password" show-password></el-input>
      </el-form-item>
      <el-form-item label="重复密码">
        <el-input v-model="signupForm.repeatpass" show-password></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      signupForm: {
        name: "",
        password: "",
        repeatpass: ""
      }
    };
  },
  methods: {
      signup(){
        
      }
  },
};
</script>
<style lang="sass">
    
</style>