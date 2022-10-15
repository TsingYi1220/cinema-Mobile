<template>
  <el-container style="height: 100%; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '4']">
        <el-submenu :index=" data.id+'' " v-for="data in sideList" :key="data.id">
          <template slot="title">
            <i class="el-icon-message"></i>
            {{data.title}}
          </template>
          <el-menu-item
            :index=" data.id+'' "
            v-for="item in data.children"
            :key="item.id"
          >{{item.title}}</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>修改</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>

      <el-main>
        <el-table :data="tableData">
          <el-table-column prop="title" label="姓名"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
          <el-table-column prop="date" label="日期"></el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'
Vue.use(ElementUI)

export default {
  data() {
    return {
      sideList: [
        {
          id: 1,
          title: '用户管理',
          children: [
            {
              id: 2,
              title: '用户列表'
            },
            {
              id: 3,
              title: '用户权限'
            }
          ]
        },
        {
          id: 4,
          title: '权限管理',
          children: [
            {
              id: 5,
              title: '权限列表'
            },
            {
              id: 6,
              title: '管理员列表'
            }
          ]
        }
      ],
      tableData: [
        {
          title: 'dyk1',
          address: '安庆',
          date: '2022-10-14'
        },
        {
          title: 'dyk2',
          address: '上海',
          date: '2022-10-18'
        },
        {
          title: 'dyk3',
          address: '合肥',
          date: '2023-10-14'
        }
      ]
    }
  }
}
</script>

<style  lang="scss">
* {
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
}
div {
  font-size: 16px;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
