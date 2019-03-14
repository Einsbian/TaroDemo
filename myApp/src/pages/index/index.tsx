import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Image } from '@tarojs/components'

import ListComponent from '../../components/index/ListItem'
import img1 from './img/1.jpg'
import img2 from './img/2.jpg'
import img3 from './img/3.jpg'

const listSet=[
  {title:'标题一',description:'描述一'},
  {title:'标题二',description:'描述二'},
  {title:'标题三',description:'描述三'},
]

import './index.css'

export default class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  title: String = 'this detail'
  description: String = 'hello detail'

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  alertFun() {
    // alert(1);
    Taro.navigateTo({
      url: `/pages/detail/detail?title=${this.title}&description=${this.description}`
    })
  }

  render() {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <Swiper
          className='test-h'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          circular
          indicatorDots
          autoplay>
          {[img1,img2,img3].map(img=>(<SwiperItem itemId={img} key={img}><Image src={img} /></SwiperItem>))}
        </Swiper>
        {/* <AtButton onClick={this.alertFun}>
          to detail page
        </AtButton> */}
        
        {[img1,img2,img3].map(item=>(<View key={item}>1</View>))}
        {listSet.map(item=>(<ListComponent title={item.title} description={item.description} key={item.title}></ListComponent>))}
      </View>
    )
  }
}

