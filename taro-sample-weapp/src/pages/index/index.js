import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import './index.scss'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  gotoWxParse () {
    Taro.navigateTo({
      url: '/pages/wxParse/wxParse'
    })
  }

  gotoEcharts () {
    Taro.navigateTo({
      url: '/pages/echarts/echarts'
    })
  }

  gotoNative () {
    Taro.navigateTo({
      url: '/pages/native/native'
    })
  }

  render () {
    return (
      <View className='index'>
        <View className='title'>与小程序原生融合的各种示例</View>
        <View className='main'>
          <View className='wrapper'>
            <AtButton type='primary' onClick={this.gotoWxParse}>wxParse 示例</AtButton>
          </View>
          <View className='wrapper'>
            <AtButton type='primary' onClick={this.gotoEcharts}>echarts-for-weixin 示例</AtButton>
          </View>
          <View className='wrapper'>
            <AtButton type='primary' onClick={this.gotoNative}>混写原生页面示例</AtButton>
          </View>
        </View>
      </View>
    )
  }
}

