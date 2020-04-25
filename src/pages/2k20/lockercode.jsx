import Taro, { useState, useEffect } from "@tarojs/taro";
import { View, Image, ScrollView } from "@tarojs/components";
import HeaderNavBar from "@/common/navbar/header";

function LockerCodePage() {
  const [images, setImages] = useState([]);

  const fetchCodes = () => {
    Taro.showLoading({ title: "loading" });
    Taro.request({
      url:
        "https://service-reyif0lj-1259108732.sh.apigw.tencentcs.com/release/nba2k20code",
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

  useEffect(() => {
    fetchCodes();
  }, []);

  return (
    <View>
      <HeaderNavBar title='2K20储物柜' showBack />
      <ScrollView
        scrollY
        style={{
          marginTop: Taro.getEnv() === "WEAPP" ? "0px" : "46px"
        }}
      >
        <View className='at-article__p' style={{
          textAlign: 'center',
        }}
        >数据来源官方推特，每日凌晨更新</View>
        {images.map((img, i) => {
          return (
            <View
              key={`i_${i}`}
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
