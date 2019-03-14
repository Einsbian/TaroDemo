import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

export default class ListComponent extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    const { title, description } = this.props
    return (
      <View>
        <View>
          <Text>{title}</Text>
        </View>
        <View>
          <Text>{description}</Text>
        </View>
      </View>

    )
  }
}

