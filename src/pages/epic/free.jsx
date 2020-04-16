import Taro, { useState, useEffect } from "@tarojs/taro";
import { View, Image, ScrollView, Text } from "@tarojs/components";
import { AtNavBar, AtCard } from "taro-ui";

const Title = "LP.EPIC免费游戏";

function FreeGamesPage() {
  const [games, setGames] = useState([]);

  const fetchData = () => {
    Taro.showLoading({ title: "loading" });
    Taro.request({
      url: "http://linyu.dynv6.net:10010/ocr/epic-freegames",
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

  const onBack = () => {
    Taro.navigateBack();
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
      <AtNavBar
        color='#666'
        title={Title}
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
        {games.map((game, i) => {
          return (
            <View
              key={i}
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
  navigationBarTitleText: Title
};

export default FreeGamesPage;
