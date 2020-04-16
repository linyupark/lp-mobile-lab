import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from "@tarojs/components";
import { AtNavBar, AtGrid } from "taro-ui";

class IndexPage extends Taro.Component {
  config = {
    navigationBarTitleText: "首页"
  };

  render() {

    const onGridClick = ({ index }) => {
      Taro.navigateTo({
        url: '/pages/2k20/lockercode'
      });
    };

    return <View>
      <AtNavBar color="#666" title="LP.Home" />
      <AtGrid hasBorder={false} onClick={onGridClick} data={[{
        image: "http://linyu.dynv6.net:9001/images/icons/icon-2k20.jpg",
        value: "2K20储物柜"
      }]} />
    </View>;
  }

  componentDidMount() {
    super.componentDidMount && super.componentDidMount();
  }

  componentDidShow() {
    super.componentDidShow && super.componentDidShow();
  }

  componentDidHide() {
    super.componentDidHide && super.componentDidHide();
  }

}

IndexPage.config = { navigationBarTitleText: "首页" };

export default IndexPage;