<template>
  <header id="head">
      <div class="head-left">
          <span class="city">广州</span>
          <i class="iconfont icon-icon-test"></i>
      </div>
      <div class="head-center">
          <router-link to="/search" tag="div" class="search">
            <i class="iconfont icon-icon-test1"></i>
              请输入课程名称关键字
          </router-link>
      </div>
      <div class="head-right">
          <router-link to="/user" tag="div" class="user">
            <i class="iconfont icon-icon_boss"></i>
          </router-link>
      </div>
  </header>
</template>

<script>
export default {
    name: 'homeHeader',
}
</script>

<style scoped>
#head{
    display: flex;
    height: 1.333rem;
    padding-top: .133rem;
}
#head .head-left{
    flex-basis: 2rem;
    font-weight: bold;
}
#head .head-right{
    flex-basis: 1.333rem;
}
#head .head-left, #head .head-right{
    flex-grow: 0;
    flex-shrink: 0;
    line-height: 1.067rem;
    color: #fff;
    font-size: .373rem;
}
#head .head-left i{
    font-size: .373rem;
    font-weight: bold;
}
 #head .head-right i{
    font-size: .693rem;
}
#head .head-center{
    flex-grow: 1;
    flex-shrink: 1;
}
#head .head-center .search{
    width: 90%;
    height: .8rem;
    margin: 0 auto;
    margin-top: .133rem;
    padding: .133rem .267rem;
    line-height: .533rem;
    background: #ffffff;
    border-radius: .667rem;
    text-align: left;
    color: #999;
    font-size: .373rem;
}
#head .head-center .search i{
    font-size: .373rem;
    font-weight: bold;
}
</style>