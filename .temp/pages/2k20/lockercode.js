import Nerv from "nervjs";
import Taro, { showLoading as _showLoading, request as _request, hideLoading as _hideLoading, showToast as _showToast } from "@tarojs/taro-h5";
import { View, Image, ScrollView } from "@tarojs/components";
import { AtNavBar } from "taro-ui";

class LockerCodePage extends Taro.Component {
  config = {
    navigationBarTitleText: "2K20储物柜"
  };

  render() {
    const [images, setImages] = Taro.useState([]);

    const fetchCodes = () => {
      _showLoading({ title: "loading" });
      _request({
        url: "http://linyu.dynv6.net:10010/ocr/image2en",
        success: res => {
          setImages(res.data);
          _hideLoading();
        },
        timeout: 5000,
        fail: () => {
          _showToast({
            title: "数据获取失败",
            icon: "none"
          });
          _hideLoading();
        }
      });
    };

    const onBack = () => {
      Taro.navigateBack();
    };

    Taro.useEffect(() => {
      fetchCodes();
    }, []);

    return <View>
      <AtNavBar color="#666" title="LP.2K20储物柜" leftIconType="chevron-left" onClickLeftIcon={onBack} fixed />
      <ScrollView scrollY style={{
        height: "calc(100vh - 50px)",
        marginTop: '50px'
      }}>
        {images.map((img, i) => {
          return <Image key={i} src={img} style={{
            width: '100%'
          }} />;
        })}
      </ScrollView>
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

LockerCodePage.config = { navigationBarTitleText: "2K20储物柜" };

export default LockerCodePage;