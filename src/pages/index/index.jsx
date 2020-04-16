import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtNavBar, AtGrid } from "taro-ui";

function IndexPage() {

  const onGridClick = ({ index }) => {
    Taro.navigateTo({
      url: '/pages/2k20/lockercode'
    })
  }

  return (
    <View>
      <AtNavBar color='#666' title='LP.Home' />
      <AtGrid
        hasBorder={false}
        onClick={onGridClick}
        data={[
          {
            image:
              "http://linyu.dynv6.net:9001/images/icons/icon-2k20.jpg",
            value: "2K20储物柜"
          }
        ]}
      />
    </View>
  );
}

IndexPage.config = {
  navigationBarTitleText: "首页"
};

export default IndexPage;
