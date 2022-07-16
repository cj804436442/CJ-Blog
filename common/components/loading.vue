<template>
  <transition name="fade">
    <div v-if="visible" class="fly-loading" :class="{'fly-loading--visible': visible}">
      <div class="fly-loading__inner">
        <i></i>
        &nbsp;
        <span>{{text || 'Loading...'}}</span>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "loading",
  props: {
    text: {
      type: String,
    },
    visible: {
      type: Boolean,
    },
  },
}
</script>

<style lang="less" scoped>
@keyframes rotate-animation {
  0% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fly-loading {
  display: none;
  position: fixed;
  z-index: 99999;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.1);
  &.fly-loading--visible {
    display: block;
  }
  &__inner {
    position: absolute;
    width: 150px;
    line-height: 30px;
    color: white;
    padding: 15px;
    left: 50%;
    margin-left: -90px;
    top: 50%;
    margin-top: -10px;
    background: rgba(19, 33, 73, 0.878);
    box-shadow: 0 0 24px 0 rgba(30, 85, 168, 0.31);
    border-radius: 4px;
    i {
      display: inline-block;
      width: 24px;
      height: 24px;
      vertical-align: middle;
      animation: rotate-animation 1s linear infinite;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAEOUlEQVRIiY2WTWxUVRTHf/fNDJ2WjgVliglSNIgBW1yKGqBUExMTqHEDyEYSgsSNxhiCiTs3yppEF8aEBQplY5CVC1oC0QW64iPUhIi05aNMP2Y682bee/fec1zMtB0LUzjJW7zz7vmd/zn3vXOfWfXSblpZKpvvaX++/0Bm9WsDmY6eV4PMM3nUWx9NTbjo4R1bunaxNnl5yNcmb7dimMclSGXzPZ0vH/y2I799r5og1VIBYFSlWrg8VLl18ksfFcaemKBtzbbBrt4vTgWp9txy4EfMR5XS6ImPa5OXTje7g+abjvWDnz279atflsCHgSPAJqCtcW1q+IYXlAYrOrs2f/rTynXvff7YCtrX7tjX1Xv0NBjTeDYKfAJcXE64Ud2lEn/v7dxmnxRRN6eVf89+aIs3hxYSpLL5nvy2726QynY24i4Be4C55eCqHrVlJCrkXDJ9Xl3Yr2JRiSvh7TO9YitjAUBu40ffNMH/BgafBEccEs/iwnFcbaIsyez76pNRVDEm09mWf+M4QJDOdm9o7965f14UcAgoPUm52BK+Oo6PJhEXgVICPYRaxUeks917g3THhqBt7c79asz8Zl8Afl8OblRRG+Kq9/HxNCq2rkst6sI/fDx9wdce4KNCEGTz+4MVq7YONMWfXbYtgEqCxFNIUliAqyRIUsRFk0g8c9bbMuJCTLpjIJ3pfLGvKX5kefWCdxV8MoX4qAGP8NE0aucQVwO1w4hF1IO4vnSQya1pYjzyJTabqEOSEmIroA14rYDEU6gL65WoH18URD69hNEGJC2aUwe4EJUYVYuPpvG1B6gr1xUvgqm/L0ogtjzVRFnXuj2AT1CpggqalPDVu/XWqMeoYsSD2PXqa6iPUBsWAlu9c6OJs6N1g7Su3Ceoq+Kq91FbRlUw4lAfIb4KLnobsSAWleh6kMxcHW6i7P2/am2U2kiggkqMT2bxyQyqDpW4vuFi59cvMFSSkSCevDxkVKXhewd4C0BtmaQ0ig8nQGw9oTikPhpQV0V9DD7BLITzZoMBIOKTodSK3LpiqvOFLZmVG/oAU0+gp5LStbh27zdc7QEmyOLtHK50k3j2Ki4cQ20J9TVULWpAkS5McF7V5xVBJRlSH/2YBqjcOnms/bnXdzfm0Rajes6F43tsOFY21bv1cWDncNV7jb67xc4BGHJgzhkTbIYAjKmoJMegcR74qDBWGj1xGFQBxFX6XTh2ReLZXa56l3jqL5LiTSSeRWUJHHahXEG1X8WjYlV9chjVMYBUdvUrALjwznVxYTGT2/huPPOnqd0fWSNJ8SDitqOSBS0CFaAd2Ah8ABwHvgbmP1YFPQr8sFDc0iMzvXL9IHDKVe/lWNy8p7EK6BHg52ZnsHSVC8d/deFEHypngKfJIMAZ0N6lcGjxV9FkPcABMANAL9Dd8D8EboCOUJ/A/7QC/AftyKniE908PwAAAABJRU5ErkJggg==);
    }
    span {
      vertical-align: middle;
    }
  }
}
</style>
