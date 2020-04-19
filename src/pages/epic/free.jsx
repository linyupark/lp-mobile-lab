import Taro, { useState, useEffect } from "@tarojs/taro";
import { View, Image, ScrollView, Text } from "@tarojs/components";
import { AtCard } from "taro-ui";
import HeaderNavBar from "@/common/navbar/header";

function FreeGamesPage() {
  const [games, setGames] = useState([]);

  const fetchData = () => {
    Taro.showLoading({ title: "loading" });
    Taro.request({
      url: "https://service-reyif0lj-1259108732.sh.apigw.tencentcs.com/release/epic-freegames",
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

  const checkDetail = (game) => {
    Taro.navigateTo({
      url: game.detailUrl
    })
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View>
      <HeaderNavBar title='EPIC免费游戏' showBack />
      <ScrollView
        scrollY
        style={{
          marginTop: Taro.getEnv() === "WEAPP" ? '0px' : "46px"
        }}
      >
        {games.map((game) => {
          return (
            <View
              key={game.title}
              style={{
                textAlign: "center",
                margin: "10px auto"
              }}
              onClick={checkDetail.bind(null, game)}
            >
              <AtCard title={game.title.split("\n")[0]}>
                <Image
                  src={game.image}
                  style={{
                    maxWidth: "100%"
                  }}
                />
                <Text
                  style={{
                    display: "block"
                  }}
                >
                  {game.title.split("\n")[1]}
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
  navigationBarTitleText: 'EPIC免费游戏'
};

export default FreeGamesPage;
