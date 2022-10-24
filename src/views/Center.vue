<template>
  <div class="center">
    <div
      class="info"
      :style="{
      background:`url(${background})`,
      backgroundSize: 'cover'
      }"
    >
      <div class="info-image">
        <img :src="avatarImg" />
      </div>
      <div class="info-name">{{ username }}</div>
      <el-button class="button" size="small" icon="el-icon-set-up" round @click="handleLogout">退出登录</el-button>
    </div>
    <div class="setup" @click="handleOrder">
      <i class="el-icon-video-camera" style="color:origin"></i> 电影订单
      <i class="el-icon-arrow-right"></i>
    </div>
    <div class="setup">
      <i class="el-icon-user" style="color:blue"></i>客服与帮助
      <i class="el-icon-arrow-right"></i>
    </div>
    <div class="setup">
      <i class="el-icon-setting" style="color:green"></i>设置
      <i class="el-icon-arrow-right"></i>
    </div>
  </div>
</template>

<script>
import avatar from '@/assets/Tsingyi.jpg'
import background from '@/assets/background.png'

export default {
  data() {
    return {
      username: '',
      avatarImg: avatar,
      background
    }
  },
  methods: {
    handleLogout() {
      localStorage.setItem('username', '')
      this.$router.push({
        path: '/login',
        query: { redirect: '/center' }
      })
    },
    handleOrder() {
      this.$router.push('/order')
    }
    // showDialog() {
    //   this.dialogVisible.value = true
    //   this.imgSrc.value = this.avatarImg.value
    // }
  },
  // 路由生命周期
  beforeRouteEnter(to, from, next) {
    if (to.meta.isdykRequired) {
      if (localStorage.getItem('username')) {
        next()
      } else {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      }
    }
  },
  mounted() {
    this.username = localStorage.getItem('username')
  }
}
</script>

<style lang="scss" scoped>
.center {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 100%;
  background-color: #f4f4f4;
  margin-bottom: 59px;
  .info {
    display: flex;
    height: 2rem;
    margin-top: -0.44rem;
    margin-bottom: 0.05rem;
    padding-left: 0.35rem;
    padding-top: 0.64rem;
    text-align: center;
    align-items: center;
    color: #fff;
    box-sizing: border-box;
    .info-image {
      width: 1rem;
      height: 1rem;
      margin-right: 0.3rem;
      position: relative;
      background: #f8f8f8;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .info-name {
      font-size: 0.2rem;
    }
    .button {
      position: absolute;
      top: 0.04rem;
      right: 0.04rem;
    }
  }
  .setup {
    position: relative;
    background: #fff;
    padding: 0 0.2rem;
    height: 49px;
    display: flex;
    align-items: center;
    margin-bottom: 0.01rem;
    i {
      margin-right: 0.2rem;
    }
    .el-icon-arrow-right {
      color: rgba(255, 0, 0, 0.5);
      margin-left: auto;
    }
  }
}
</style>
