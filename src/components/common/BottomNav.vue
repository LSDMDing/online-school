<template>
  <div class="bottom-nav">
    <ul>
      <!-- <router-link to="/" tag="li" exact>
        <i class="iconfont icon-ziyuan3"></i>
        <p>首页</p>
      </router-link>
      <router-link to="/course" tag="li">
        <i class="iconfont icon-tushu"></i>
        <p>课程</p>
      </router-link>
      <router-link to="/study" tag="li">
        <i class="iconfont icon-rili"></i>
        <p>学习</p>
      </router-link>
      <router-link to="/buyCar" tag="li">
        <i class="iconfont icon-ziyuan7"></i>
        <p>购物车</p>
      </router-link>
      <router-link to="/user" tag="li">
        <i class="iconfont icon-icon_boss"></i>
        <p>我的</p>
      </router-link> -->
      <router-link v-for="(item,index) in bottomNavList" :to="{path: item.path}" tag="li" :key="index" exact> 
        <i :class="'iconfont '+item.iconfont"></i>
        <p>{{item.title}}</p>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "bottomNav",
  data() {
    return {
        bottomNavList: [
            {
                title: '首页',
                path: '/',
                iconfont: 'icon-ziyuan3',
            },
            {
                title: '课程',
                path: '/course',
                iconfont: 'icon-tushu',

            },
            {
                title: '学习',
                path: '/study',
                iconfont: 'icon-rili',
            },
            {
                title: '购物车',
                path: '/buyCar',
                iconfont: 'icon-ziyuan7',
            },
            {
                title: '我的',
                path: '/user',
                iconfont: 'icon-icon_boss',
            },
        ]
    };
  }
};
</script>

<style scoped>
.bottom-nav {
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 10rem;
  height: 1.333rem;
  padding-top: 0.2rem;
  border-top: 0.013rem solid #ccc;
  background: #fff;
}
.bottom-nav ul {
  display: flex;
  height: 100%;
}
.bottom-nav ul > li {
  flex: 1;
}
.bottom-nav ul > li .iconfont {
  display: block;
  margin-bottom: 0.067rem;
  font-size: 0.48rem;
}
.bottom-nav ul > li.router-link-active {
  color: red;
}
.bottom-nav ul > li > p {
  font-size: 0.213rem;
}
</style>