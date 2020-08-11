import Mock from 'mockjs'

const courseData = {
    'msg' : 'ok',
    'list|10' : [{
        'cid|+1' : 1001,
        'title' : [
            '免费课',
            '一年级',
            '二年级',
            '三年级',
            '四年级',
            '五年级',
            '六年级',
            '七年级',
            '八年级',
            '九年级',
        ],
        'imgIcon' : [
            require("../assets/images/home/floor_1.png"),
            require("../assets/images/home/floor_2.png"),
            require("../assets/images/home/floor_3.png"),
            require("../assets/images/home/floor_4.png"),
            require("../assets/images/home/floor_5.png"),
            require("../assets/images/home/floor_6.png"),
            require("../assets/images/home/floor_7.png"),
            require("../assets/images/home/floor_8.png"),
            require("../assets/images/home/floor_9.png"),
            require("../assets/images/home/floor_10.png"),
        ],
        'courseList|1-3' : [{
            'id' : '@id', 
            'name' : /(语文(上册|下册)|数学(上册|下册))/,
            'subject' : '专项课程',
            'hour|5-10' : 10,
            'price' : /9|99/,
            'hits|1000-100000' : 1000,
            'fmimg' : 'http://fenzhidao-1257402134.cos.ap-guangzhou.myqcloud.com/fen_zhi_dao/file/upload/2020-03-25_15851230114351242722098020831232.jpg'
        }]
    }],
}

Mock.mock( '/api/course', 'post', courseData )

export default Mock