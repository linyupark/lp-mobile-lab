import Taro, { useState, useEffect } from "@tarojs/taro";
import { View, Image, ScrollView } from "@tarojs/components";
import { AtNavBar } from "taro-ui";

function LockerCodePage() {
  const [images, setImages] = useState([]);

  const fetchCodes = () => {
    Taro.showLoading({ title: "loading" });
    Taro.request({
      url: "http://linyu.dynv6.net:10010/ocr/nba2k20code",
      success: res => {
        setImages(res.data);
        Taro.hideLoading();
      },
      timeout: 5000,
      fail: () => {
        Taro.showToast({
          title: "数据获取失败",
          icon: "none"
        });
        Taro.hideLoading();
      }
    });
  };

  const onBack = () => {
    Taro.navigateBack();
  };

  useEffect(() => {
    fetchCodes();
  }, []);

  return (
    <View>
      <AtNavBar
        color='#666'
        title='LP.2K20储物柜'
        leftIconType='chevron-left'
        onClickLeftIcon={onBack}
        fixed
      />
      <ScrollView
        scrollY
        style={{
          marginTop: "46px"
        }}
      >
        {images.map((img, i) => {
          return (
            <View
              key={i}
              style={{
                textAlign: "center"
              }}
            >
              <Image
                src={img}
                style={{
                  maxWidth: "100%"
                }}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

LockerCodePage.config = {
  navigationBarTitleText: "2K20储物柜"
};

export default LockerCodePage;
