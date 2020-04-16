import Taro from "@tarojs/taro";
import { AtNavBar } from "taro-ui";

function HeaderNavBar({ title, fixed, showBack }) {
  const leftIconType = showBack ? "chevron-left" : "";

  const onBack = () => {
    if (showBack) {
      Taro.navigateBack();
    }
  };

  return Taro.getEnv() !== "WEAPP" ? (
    <AtNavBar
      color='#666'
      title={title}
      border
      leftIconType={leftIconType}
      onClickLeftIcon={onBack}
      fixed={fixed || true}
    />
  ) : (
    ""
  );
}

export default HeaderNavBar;
