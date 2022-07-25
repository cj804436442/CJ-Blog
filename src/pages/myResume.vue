<template>
  <div class="myResume" id="myResume">
    <div class="resume-top">
      <div class="resume-top_left"></div>
      <div class="resume-top_right">
        <div class="resume-top_right-name">崔捷</div>
        <div class="resume-top_right-info">
          <span> 在职·月内到岗·25岁·本科·两年经验 </span>
        </div>
        <div class="resume-top_right-concat">
          <span class="resume-top_right-concat_tel">18452481821</span>
          <span class="resume-top_right-concat_email">804436442@qq.com</span>
          <span class="resume-top_right-concat_wechat">18452481821</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { downloadPDF } from "../utils/downloadPDF";
export default {
  name: "myResume",
  components: {},
  data() {
    return {};
  },
  methods: {
    downLoad() {
      downloadPDF(document.querySelector("#myResume"), "我的PDF");
    },
  },
  created() {},
  mounted() {},
};
</script>

<style lang="less" scoped>
.myResume {
  width: 550px;
  height: 1800px;
  margin: 0 auto;
  margin-top: 30px;
  padding: 60px 100px;
  background-color: #fff;
  box-shadow: 2px 4px 8px rgb(0 0 0 / 10%);
  .resume-top {
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    &_left {
      width: 100px;
      height: 100px;
      background: url("../assets/myPhoto.png") no-repeat center;
      background-size: contain;
      border-radius: 0 0 50% 50%;
    }
    &_right {
      width: 420px;
      &-name {
        font-size: 32px;
        font-weight: bold;
      }
      &-info {
        font-size: 14px;
        margin-top: 6px;
      }
      &-concat {
        display: flex;
        flex-direction: row;
        font-size: 14px;
        margin-top: 8px;
        &_tel {
          &:before {
            font-family: "iconfont" !important;
            font-size: 16px;
            position: relative;
            content: "\e96c";
            color: #ff6400;
            top: 1px;
            margin-right: 5px;
          }
        }
        &_email {
          &:before {
            font-family: "iconfont" !important;
            font-size: 16px;
            position: relative;
            content: "\e62e";
            color: #ff6400;
            top: 1px;
            margin-right: 5px;
          }
        }
        &_wechat {
          &:before {
            font-family: "iconfont" !important;
            font-size: 16px;
            position: relative;
            content: "\e660";
            color: #ff6400;
            top: 1px;
            margin-right: 5px;
          }
        }
        span {
          margin-right: 15px;
        }
      }
    }
  }
}
</style>