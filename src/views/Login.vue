<template>
  <div class="login">
    <div class="title">登录/注册</div>
    <el-form
      :model="param"
      :rules="rules"
      ref="login"
      label-position="left"
      label-width="65px"
      class="content"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="param.username" placeholder="username">
          <template #prepend>
            <i class="el-icon-user"></i>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="param.password"
          placeholder="password"
          @keyup.enter.native="submitForm('login')"
        >
          <template #prepend>
            <i class="el-icon-lock"></i>
          </template>
        </el-input>
      </el-form-item>
      <div class="login-btn">
        <el-button type="primary" @click="submitForm('login')">登录</el-button>
      </div>
      <p class="login-tips">Tips : 用户名和密码随便填。</p>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      msg: '',
      height: '0px',
      param: {
        username: 'TsingYi',
        password: '123456'
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    submitForm(login) {
      this.isShow = true
      this.temp = this.$refs[login]
    },
    onSuccess(times) {
      this.msg = '验证通过耗时' + (times / 1000).toFixed(1) + '秒'
      setTimeout(() => {
        this.temp.validate((valid) => {
          if (valid) {
            this.$message.success('登录成功')
            localStorage.setItem('username', this.param.username)
            this.$router.push(this.$route.query.redirect)
          } else {
            return false
          }
        })
      }, 1500)
    },
    onFail() {
      this.msg = '验证失败'
    },
    onRefresh() {
      this.msg = ''
    },
    onFulfilled() {
      this.msg = '重新验证'
    }
  }
}
</script>

<style lang='scss' scoped>
.login {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #f4f4f4;
  .title {
    width: 100%;
    line-height: 0.5rem;
    text-align: center;
    font-size: 0.2rem;
    color: #fff;
    border-bottom: 0.03rem solid cyan;
    background-color: #ff5f16;
  }
  .content {
    padding: 30px 30px;
    .login-btn {
      text-align: center;
    }
    .login-btn button {
      width: 100%;
      height: 36px;
      margin-bottom: 10px;
    }
    .login-tips {
      font-size: 12px;
      line-height: 30px;
      color: rgb(0, 0, 0);
    }
  }
}
</style>
