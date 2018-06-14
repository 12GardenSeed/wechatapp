import Taro, { Component } from '@tarojs/taro'
import { View, Button,Image } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      title: '添加平台运营'
    }
  }

  componentWillMount () {}

  componentDidMount () {}

  componentWillUpdate (nextProps, nextState) {}

  componentDidUpdate (prevProps, prevState) {}

  shouldComponentUpdate (nextProps, nextState) {
    return true
  }
  successQrScan() {
    Taro.navigateTo({
      url: '../success/success'
    })
  }


  render () {
    return (
      <View className='page'>
        <View className='title'>{this.state.title}</View>
        <View className='qrcodecontent'>
          <Image
            style='width: 300px;height: 300px;background: #fff;'
            src='http://24haowan-cdn.shanyougame.com/ticketGenerator/assets/images/generateBox/QRCode.png'
          />
        </View>
        <Button className='add' onClick={this.successQrScan}>请扫码</Button>
      </View>
    )
  }
}
