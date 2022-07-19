<template>
  <div class="main">
    <Navicator />
  </div>
</template>

<script>
import Navicator from "./navicator.vue"
export default {
  name: "navicator",
  components: {Navicator},
  data() {
    return {

    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="less" scoped>
@space: 10px;
.main {
  position: relative;
}
</style>