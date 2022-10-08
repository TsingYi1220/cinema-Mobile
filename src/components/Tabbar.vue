<template>
  <footer>
    <ul>
      <!-- vue-router (3之前，包括3)-1-申明式导航 -->
      <!-- <li>
        <router-link to="/films" active-class="dykactive" tag="a">电影</router-link>
      </li>
      <li>
        <router-link to="/cinemas" active-class="dykactive">影院</router-link>
      </li>
      <li>
        <router-link to="/center">用户</router-link>
      </li>-->

      <!-- vue-router (4) -2- 申明式导航 -->
      <!-- <li>
        <router-link to="/films" custom v-slot="{navigate,isActive}">
          <a @click="navigate" :class="isActive ? 'dykactive' : ''">电影</a>
        </router-link>
      </li>
      <li>
        <router-link to="/cinemas" custom v-slot="{navigate,isActive}">
          <a @click="navigate" :class="isActive ? 'dykactive' : ''">影院</a>
        </router-link>
      </li>
      <li>
        <router-link to="/center" custom v-slot="{navigate,isActive}">
          <li @click="navigate" :class="isActive ? 'dykactive' : ''">用户</li>
        </router-link>
      </li>-->

      <!-- vue-router (4) -3- v-for 申明式导航 -->
      <li v-for="(item, index) in itemTab" :key="index">
        <router-link :to="item" custom v-slot="{ navigate, isActive }">
          <a @click="navigate" :class="isActive ? 'dykactive' : ''">
            <i :class="item.class">
              <span>{{ index }}</span>
            </i>
          </a>
        </router-link>
      </li>
    </ul>
  </footer>
</template>

<script>
import '../assets/iconfont/iconfont.css'
export default {
  data() {
    return {
      itemTab: {
        电影: {
          path: '/films',
          class: 'iconfont icon-all'
        },
        影院: {
          path: '/cinemas',
          class: 'iconfont icon-comments'
        },
        我的: {
          path: '/center',
          class: 'iconfont icon-account'
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.dykactive {
  color: greenyellow;
}
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 49px;
  background: rgb(162, 162, 162);
  z-index: 100;
  ul {
    display: flex;
    li {
      flex: 1;
      text-align: center;
      i {
        display: flex;
        flex-direction: column;
        font-size: 18px;
        padding: 8px 0 0;
        span {
          font-size: 16px;
          line-height: 18px;
        }
      }
    }
  }
}
</style>
