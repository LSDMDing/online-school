<template>
  <div class="home">
    <div class="main-top">
      <Header></Header>
      <div class="swiper-box">
        <swiper :options="bannerOption">
          <swiper-slide
            class="swiper-slide content"
            v-for="(item,index) in carouselArr"
            :key="index"
          >
            <img :src="item" />
          </swiper-slide>
          <!-- 分页器 -->
          <div class="swiper-pagination top-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
    <div class="main-category">
      <swiper :options="categoryOption" class="category-swiper">
        <swiper-slide class="swiper-slide content" v-for="(item,index) in categoryArr" :key="index">
          <div class="img">
            <a :href="'#'+item.cid">
              <img :src="item.imgIcon[index]" />
            </a>
          </div>
          <p class="title">{{item.title[index]}}</p>
        </swiper-slide>
        <!-- 分页器 -->
        
      </swiper>
      <div class="swiper-pagination category-pagination" slot="pagination"></div>
    </div>
    <div class="main-course">
      <h1>精品课程</h1>
      <div class="course-list" v-for="(item,index) in categoryArr" :key="index">
        <p class="cate-title" :id="item.cid">{{item.title[index]}}</p>
        <div class="list-box" v-for="courseItem in item.courseList" :key="courseItem.id">
          <div class="img">
            <img :src="courseItem.fmimg" />
          </div>
          <div class="info">
            <p class="name">{{item.title[index]}}{{courseItem.name}}</p>
            <p class="subject">{{courseItem.subject}} <span class="hour">| 共{{courseItem.hour}}课时</span></p>
            <p class="price">￥{{courseItem.price | coursePrice(item.cid)}}</p>
            <p class="hits">{{courseItem.hits}} 人已报名</p>
          </div>
        </div>
      </div>
    </div>

    <BottomNav></BottomNav>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/common/Header";
import BottomNav from "@/components/common/BottomNav";
import Axios from 'axios'

export default {
  name: "Home",
  components: {
    Header,
    BottomNav
  },
  data() {
    return {
      bannerOption: {
        //显示分页
        pagination: {
          el: ".top-pagination"
        },
        //自动轮播
        autoplay: {
          delay: 3000,
          //当用户滑动图片后继续自动轮播
          disableOnInteraction: false
        },
        //开启循环模式
        loop: true
      },
      carouselArr: [
        "http://edu24ol.bs2cdn.100.com/7.13-%E5%88%9D%E4%BC%9A-%E9%A6%96%E9%A1%B5banner-690-250-1594633034096.jpg",
        "http://edu24ol.bs2cdn.100.com/%E7%B2%BE%E8%AE%B2%E7%8F%AD%E5%BC%80%E7%8F%AD690-250-1594265170641.jpg"
      ],
      categoryOption: {
        //显示分页
        pagination: {
          el: ".category-pagination",
        },
        slidesPerView: 5,
        slidesPerColumn: 2,
        slidesPerGroup: 10,
        slidesPerColumnFill: "row",
        resistanceRatio: 0
      },
      categoryArr: [
        {
          cid: 1001,
          title: '免费课',
          imgIcon: require("../assets/images/home/floor_1.png"),
          courseList: [
            {
              id: 10011,
              name: '魔方课程',
              subject: '专项课程',
              hour: 10,
              price: 0,
              hits: 8796,
              fmimg: 'http://fenzhidao-1257402134.cos.ap-guangzhou.myqcloud.com/fen_zhi_dao/file/upload/2020-03-25_15851233264311242723419297894400.jpg'
            },
            {
              id: 10012,
              name: '超级记忆课程',
              subject: '专项课程',
              hour: 10,
              price: 0,
              hits: 4654,
              fmimg: 'http://fenzhidao-1257402134.cos.ap-guangzhou.myqcloud.com/fen_zhi_dao/file/upload/2020-03-25_15851229105391242721674844917760.jpg'
            }
          ]
        },
        {
          cid: 1002,
          title: '一年级',
          imgIcon: require("../assets/images/home/floor_2.png"),
          courseList: [
            {
              id: 10021,
              name: '魔法课程',
              subject: '专项课程',
              hour: 10,
              price: 0,
              hits: 8796,
              fmimg: 'http://fenzhidao-1257402134.cos.ap-guangzhou.myqcloud.com/fen_zhi_dao/file/upload/2020-03-25_15851230114351242722098020831232.jpg'
            }
          ]
        },
        {
          cid: 1003,
          title: '二年级',
          imgIcon: require("../assets/images/home/floor_3.png"),
          courseList: [
            {
              id: 10031,
              name: '魔法课程',
              subject: '专项课程',
              hour: 10,
              price: 0,
              hits: 8796,
              fmimg: 'http://fenzhidao-1257402134.cos.ap-guangzhou.myqcloud.com/fen_zhi_dao/file/upload/2020-03-25_15851230114351242722098020831232.jpg'
            }
          ]
        },
        {
          cid: 1004,
          title: '三年级',
          imgIcon: require("../assets/images/home/floor_4.png"),
          courseList: [
            {
              id: 10041,
              name: '魔法课程',
              subject: '专项课程',
              hour: 10,
              price: 0,
              hits: 8796,
              fmimg: 'http://fenzhidao-1257402134.cos.ap-guangzhou.myqcloud.com/fen_zhi_dao/file/upload/2020-03-25_15851230114351242722098020831232.jpg'
            }
          ]
        },
        {
          cid: 1005,
          title: '四年级',
          imgIcon: require("../assets/images/home/floor_5.png"),
          courseList: [
            {
              id: 10051,
              name: '魔法课程',
              subject: '专项课程',
              hour: 10,
              price: 0,
              hits: 8796,
              fmimg: 'http://fenzhidao-1257402134.cos.ap-guangzhou.myqcloud.com/fen_zhi_dao/file/upload/2020-03-25_15851230114351242722098020831232.jpg'
            }
          ]
        },
        {
          cid: 1006,
          title: '五年级',
          imgIcon: require("../assets/images/home/floor_6.png"),
          courseList: [
            {
              id: 10061,
              name: '魔法课程',
              subject: '专项课程',
              hour: 10,
              price: 0,
              hits: 8796,
              fmimg: 'http://fenzhidao-1257402134.cos.ap-guangzhou.myqcloud.com/fen_zhi_dao/file/upload/2020-03-25_15851230114351242722098020831232.jpg'
            }
          ]
        },
        {
          cid: 1007,
          title: '六年级',
          imgIcon: require("../assets/images/home/floor_7.png"),
          courseList: [
            {
              id: 10071,
              name: '魔法课程',
              subject: '专项课程',
              hour: 10,
              price: 0,
              hits: 8796,
              fmimg: 'http://fenzhidao-1257402134.cos.ap-guangzhou.myqcloud.com/fen_zhi_dao/file/upload/2020-03-25_15851230114351242722098020831232.jpg'
            }
          ]
        },
        {
          cid: 1008,
          title: '七年级',
          imgIcon: require("../assets/images/home/floor_8.png"),
          courseList: [
            {
              id: 10081,
              name: '魔法课程',
              subject: '专项课程',
              hour: 10,
              price: 0,
              hits: 8796,
              fmimg: 'http://fenzhidao-1257402134.cos.ap-guangzhou.myqcloud.com/fen_zhi_dao/file/upload/2020-03-25_15851230114351242722098020831232.jpg'
            }
          ]
        },
        {
          cid: 1009,
          title: '八年级',
          imgIcon: require("../assets/images/home/floor_9.png"),
          courseList: [
            {
              id: 10091,
              name: '魔法课程',
              subject: '专项课程',
              hour: 10,
              price: 0,
              hits: 8796,
              fmimg: 'http://fenzhidao-1257402134.cos.ap-guangzhou.myqcloud.com/fen_zhi_dao/file/upload/2020-03-25_15851230114351242722098020831232.jpg'
            }
          ]
        },
        {
          cid: 10010,
          title: '九年级',
          imgIcon: require("../assets/images/home/floor_10.png"),
          courseList: [
            {
              id: 100101,
              name: '魔法课程',
              subject: '专项课程',
              hour: 10,
              price: 0,
              hits: 8796,
              fmimg: 'http://fenzhidao-1257402134.cos.ap-guangzhou.myqcloud.com/fen_zhi_dao/file/upload/2020-03-25_15851230114351242722098020831232.jpg'
            }
          ]
        },
      ]
    };
  },
  mounted () {
    Axios.post('/api/course').then((res) => {
      if(res.data.msg == 'ok'){
        console.log(res);
        this.categoryArr = res.data.list
        console.log(this.categoryArr);
      }
    }).catch((err) => {

    })
  },
  computed: {
    course : function () {
      this.categoryArr.forEach(element => {
        if(element.title[0]){
          element.courseList.price = 0;
        } 
      });
      return this.categoryArr;
    }
  }
};
</script>
<style scoped>
.home .main-top {
  height: 5.333rem;
  background: -moz-linear-gradient(top, #008de1 60%, #ffffff 100%);
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(60%, #008de1),
    color-stop(100%, #ffffff)
  );
  background: -webkit-linear-gradient(top, #008de1 60%, #ffffff 100%);
  background: -o-linear-gradient(top, #008de1 60%, #ffffff 100%);
  background: -ms-linear-gradient(top, #008de1 60%, #ffffff 100%);
  background: linear-gradient(to bottom, #008de1 50%, #ffffff 100%);
}
.swiper-box {
  height: 3.4rem;
  padding: 0 0.4rem;
}
.swiper-box img {
  width: 100%;
  border-radius: 0.4rem;
  overflow: hidden;
}
.main-category{
  margin-bottom: .667rem;
}
.main-category .title{
  font-size: .347rem;
}
.main-category .swiper-pagination{
  width: 100%;
  max-width: 750px;
}
.main-course{
  padding: .4rem;
}
.main-course h1{
  margin: .4rem 0;
  text-align: left;
  font-size: .48rem;
}
.main-course .course-list{
  margin-bottom: .667rem;
}
.main-course .course-list .cate-title{
  margin-bottom: .267rem;
  font-size: .373rem;
}
.main-course .course-list .list-box{
  margin-bottom: .4rem;
  padding: .2rem;
  border: .013rem solid #F1F1F1;
  border-radius: 5px;
  overflow: hidden;
}
.main-course .course-list .list-box .img{
  float: left;
  width: 3.333rem;
  height: 2.24rem;
  border-radius: .133rem;
  overflow: hidden;
}
.main-course .course-list .list-box .info{
  position: relative;
  float: left;
  width: 5.333rem;
  padding: 0 .2rem;
  min-height: 2.24rem;
}
.main-course .course-list .list-box .info p{
  margin-bottom: .133rem;
}
.main-course .course-list .list-box .info .name{
  margin-bottom: .2rem;
  text-align: left;
  font-size: .48rem;
  font-weight: bold;
}
.main-course .course-list .list-box .info .subject{
  text-align: left;
  color: #649cf0;
  font-size: .24rem;
}
.main-course .course-list .list-box .info .subject .hour{
  color: #9598A2;
}
.main-course .course-list .list-box .info .price{
  position: absolute;
    right: 0;
    bottom: 15px;
    text-align: right;
    color: red;
    font-size: .48rem;
}
.main-course .course-list .list-box .info .hits{
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 0;
  color: #9598A2;
  font-size: .24rem;
}
</style>
<style>
.main-category .swiper-pagination-bullet{
  width: .48rem;
  height: .04rem;
  border-radius: 0;
  margin: 0 4px;
}
</style>
