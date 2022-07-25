<template>
  <div class="main">
    <Navicator />
    <MyResume />
  </div>
</template>

<script>
import Navicator from "./navicator.vue";
import MyResume from "./myResume.vue";
export default {
  name: "navicator",
  components: { Navicator, MyResume },
  data() {
    return {};
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
};
</script>

<style lang="less" scoped>
@space: 10px;
.main {
  position: relative;
}
</style>