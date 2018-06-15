import Taro, {
  Component
} from '@tarojs/taro'
import {
  View,
  Button,
  Image
} from '@tarojs/components'
import './index.scss'

export default class Index extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      title: '添加平台运营'
    };
    // 二维码 url 地址初始化
    this.qrUrl = ''
    this.qrState = false
  }

  componentWillMount() {}

  componentDidMount() {
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
  componentDidShow() {
    setInterval(() => {
      const res = Taro.request({
        url: 'http://192.168.6.122:8000/account/qrcodes/loop',
        header: {
          'content-type': 'application/json'
        }
      }).then(this.qrState = () => {
        return res.data.State
      });
      if (this.qrState) this.successQrScan();
    }, 5000);
  }

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  shouldComponentUpdate(nextProps, nextState) {
    return true
  }
  successQrScan() {
    Taro.redirectTo({
      url: '../success/success'
    })
  }



  render() {
    return ( <
      View className = 'page' >
      <
      View className = 'title' > {
        this.state.title
      } < /View> <
      View className = 'qrcodecontent' >
      <
      Image style = 'width: 300px;height: 300px;background: #fff;'
      src = {
        this.qrUrl
      }
      /> <
      /View> <
      Button className = 'add'
      onClick = {
        this.successQrScan
      } > 请扫码 < /Button> <
      /View>
    )
  }
}
