<template>
  <div id="app" :style="{height: bodyHeight + 'px'}">
    <router-view/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bodyHeight: ''
    }
  },
  mounted() {
    this.bodyHeight=document.documentElement.clientHeight
  }
}
</script>