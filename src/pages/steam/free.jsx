import Taro, { useState, useEffect } from "@tarojs/taro";
import { View, Image, ScrollView, Text } from "@tarojs/components";
import { AtCard } from "taro-ui";
import HeaderNavBar from "@/common/navbar/header";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

import "./steam.scss";

dayjs.extend(customParseFormat);

function FreeGamesPage() {
  const [games, setGames] = useState([]);

  const fetchData = () => {
    Taro.showLoading({ title: "loading" });
    Taro.request({
      url: "https://service-reyif0lj-1259108732.sh.apigw.tencentcs.com/release/steam-freegames",
      success: res => {
        setGames(res.data);
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
    fetchData();
  }, []);

  return (
    <View className='steam-freegames'>
      <HeaderNavBar title='Steam免费游戏' showBack />
      <ScrollView
        scrollY
        style={{
          marginTop: Taro.getEnv() === "WEAPP" ? "0px" : "46px"
        }}
      >
        <View className='at-article__p' style={{
          textAlign: 'center',
        }}
        >注：以下数据为美国时间</View>
        {games.map(game => {
          return game.discount === "" ? (
            ""
          ) : (
            <View key={game.title} className='card-container'>
              <AtCard title={game.title}>
                <Image src={game.image} className='image' />
                <Text className='p'>
                  <Text className='green'>开始</Text>
                  {dayjs(game.startAt, "D MMMM YYYY - HH:mm:ss").format(
                    "YYYY-MM-DD HH时"
                  )}
                </Text>
                <Text className='p'>
                  <Text className='red'>结束</Text>
                  {dayjs(game.endAt, "D MMMM YYYY - HH:mm:ss").format(
                    "YYYY-MM-DD HH时"
                  )}
                </Text>
              </AtCard>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

FreeGamesPage.config = {
  navigationBarTitleText: "Steam免费游戏"
};

export default FreeGamesPage;
