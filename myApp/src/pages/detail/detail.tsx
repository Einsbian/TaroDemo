import Taro, { Component, Config, Events } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import { AtButton } from 'taro-ui'

import './detail.css'

export default class Detail extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '详情页'
  }

  events = new Events();

  componentWillMount() {

  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  childCilck(e) {
    // alert(1);
    console.log(e);
    this.events.trigger('childCilckEvents', 'child click');

  }

  render() {
    const { title, description } = this.$router.params
    return (
      <View className='detail-color'>
        <View>
          <Text>{title}</Text>
          <AtButton onClick={this.childCilck}>child click</AtButton>
        </View>
        <View>
          <Text>{description}</Text>
        </View>
      </View>
    )
  }
}

