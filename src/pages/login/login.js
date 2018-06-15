import Taro, { Component } from '@tarojs/taro'
import { View, Button,Image } from '@tarojs/components'
import './index.scss'

export default class Login extends Component {
  constructor () {
    super(...arguments);
    this.state = {
      title: '登录页面'
    };
  }

  componentWillMount () {
    Taro.login();
  }

  componentDidMount () {
    // 获取二维码 url
    const res = Taro.request({
      url: 'http://192.168.6.122:8000/account/qrcodes/b',
      header: {
        'content-type': 'application/json'
      }
    }).then(this.qrUrl = () => {
      return res.data.url
    });
  }

  async componentWillUpdate (nextProps, nextState) {
    loopQrcodeState()
  }

  componentDidUpdate (prevProps, prevState) {}

  shouldComponentUpdate (nextProps, nextState) {
    return true
  }
  successQrScan() {
    Taro.redirectTo({
      url: '../success/success'
    })
  }

  loopQrcodeState(){
  }


  render () {
    return (
      <View className='page'>
        <View className='title'>{this.state.title}</View>
        <View className='qrcodecontent'>
          <Image
            style='width: 300px;height: 300px;background: #fff;'
            src={this.qrUrl}
          />
        </View>
        <Button className='add' onClick={this.successQrScan}>请扫码</Button>
      </View>
    )
  }
}
