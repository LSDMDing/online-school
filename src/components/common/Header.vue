<template>
  <header id="head">
      <div class="head-left">
          <i class="iconfont icon-icon-test"></i>
      </div>
      <div class="head-center"></div>
      <div class="head-right"></div>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
#head{
    display: flex;
    height: 1.067rem;
}
#head .head-left{
    flex-basis: 2rem;
}
#head .head-right{
    flex-basis: 1.333rem;
}
#head .head-left, #head .head-right{
    flex-grow: 0;
    flex-shrink: 0;
    background-color: lightslategray;
}
#head .head-center{
    flex-grow: 1;
    flex-shrink: 1;
    background-color: lightpink;
}
</style>