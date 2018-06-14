import Taro, { Component } from '@tarojs/taro'
import { View, Button,Image } from '@tarojs/components'
import './success.scss'

export default class Success extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      title: '添加平台运营成功'
    }
  }

  componentWillMount () {
    const userInfo = Taro.getUserInfo()
    if (userInfo) {
      this.userInfo = userInfo;
    }

  }

  componentDidMount () {}

  componentWillUpdate (nextProps, nextState) {}

  componentDidUpdate (prevProps, prevState) {}

  shouldComponentUpdate (nextProps, nextState) {
    return true
  }
  hello() {

  }


  render () {
    return (
      <View className='page'>
        <View className='title'>{this.state.title}</View>
        <view class="container">
          <View class="userinfo" onClick="handleViewTap">
          <Image class="userinfo-avatar" src="{{ userInfo.avatarUrl }}" background-size="cover"/>
          <View class="userinfo-nickname">{ this.userInfo.nickName }</View>
        </View>
      </view>

    <Button className='add' onClick={this.hello()}>继续添加</Button>
        <Button className='list' onClick={this.hello()}>返回运营管理</Button>
      </View>
    )
  }
}
