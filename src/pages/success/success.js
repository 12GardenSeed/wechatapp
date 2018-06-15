import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import './success.scss'

export default class Success extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      title: '添加平台运营成功'
    }
  }

  componentWillMount () {}

  componentDidMount () {}

  componentWillUpdate (nextProps, nextState) {}

  componentDidUpdate (nextProps, nextState) {}

  shouldComponentUpdate (nextProps, nextState) {
    return true
  }

  navigateToAdd() {
    Taro.navigateTo({
      url: '../index/index'
    });
    // console.log('navigateToAdd');
  }

  navigateToList(){
    // Taro.navigateTo({
    //   url:
    // });
  }

  render () {
    return (
      <View className='page'>
        <View className='title'>{this.state.title}</View>
        <View class='container'>
          <open-data type='userNickName' onClick='handleViewTap'></open-data>
          <open-data type='userAvatarUrl' background-size='cover'></open-data>
        </View>
        <Button className='add' onClick={this.navigateToAdd}>继续添加</Button>
        <Button className='list' onClick={this.navigateToList}>返回运营管理</Button>
      </View>
    )
  }
}
