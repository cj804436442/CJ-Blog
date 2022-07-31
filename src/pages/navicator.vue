<template>
  <div class="navicator">
    <div class="navicator_wrap">
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#ffffff"
        text-color="#000000"
        active-text-color="#0255d1"
      >
        <div class="logo-wrap" @click="goIndex()">
          <el-menu-item index="1">
            <div class="logo"></div>
          </el-menu-item>
        </div>
        <div class="menu-item">
          <el-menu-item index="1">我的简历</el-menu-item>
          <el-menu-item index="2">处理中心   </el-menu-item>
          <el-menu-item index="3">联系我吧</el-menu-item>
          <el-menu-item index="4">订单管理</el-menu-item>
        </div>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    goIndex() {
      alert("首页");
    },
  },
};
</script>

<style lang="less" scoped>
.navicator {
  min-width: 1200px;
  background: #ffffff;
  box-shadow: 2px 0 8px rgb(0 0 0 / 10%);
  &_wrap {
    width: 1200px;
    margin: 0 auto;
  }
  /deep/ .el-menu-demo {
    width: 1200px;
    display: flex;
    border-bottom: none;
    .el-menu-item {
      font-size: 16px;
      padding: 0;
      margin: 0 30px;
      &:hover {
        background-color: #ffffff !important;
      }
    }
  }
  .logo-wrap {
    /deep/.el-menu-item {
      display: flex;
      align-items: center;
    }
  }
  .logo {
    width: 40px;
    height: 40px;
    background: url("../assets/cj.png") no-repeat center;
    background-size: contain;
  }
  .menu-item {
    display: flex;
    position: absolute;
    right: 0;
    /deep/.is-active {
      border-bottom: 3px solid;
    }
  }
}
</style>