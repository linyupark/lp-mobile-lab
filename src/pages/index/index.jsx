import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtGrid } from "taro-ui";
import HeaderNavBar from "@/common/navbar/header";
import styles from "./index.module.scss";


function IndexPage() {
  const onGridClick = (item, index) => {
    const urls = ["/pages/2k20/lockercode", "/pages/epic/free"];
    Taro.navigateTo({
      url: urls[index]
    });
  };

  return (
    <View className={styles.indexPage}>
      <HeaderNavBar title='LP.福利社' />
      <AtGrid
        hasBorder={false}
        onClick={onGridClick}
        data={[
          {
            image: "http://linyu.dynv6.net:9001/images/icons/icon-2k20.jpg",
            value: "2K20储物柜"
          },
          {
            image:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAFEElEQVRoge3aWaydUxQH8N/tbYvbKlqXosSUEqRIScwxNBFpYqgheJCa6wkPIo2HIiJ4woOhIUEVRdJEa06MEVVEGmNJqaY60BbNvdX29t7jYe3jfOc459wz3cHwT77ss/de3957fWvttdZe+/AfwjjMyNQ7MT1T3x9nZeqTcVKmfkx68jgp0eRxVhojj+lpjjxmYNe6V10GVyKHg1N9NnoxNtUfwO8Z+gVYnqm/m548lieaPH5PY0hj9qY5pDlzaQ1VMbI/AoxO5ahMfUTm3dEZmkr10vEq0Y9MY5ebsyra+yPAr2jDc+jDb9iMxal/M1bi/VTvxlf4ONW3YSk+T/VevI1vM3MsxipsRQeex3ohrT0wP83770dbP/3jcTWOxES1SbCV6MNaIeHHsbESYTVGJgj1OAibDJ1od0tr+RHHYUO9A9wiLMYlrV1XQ5gh1jK7P8JyeEID3A8g1uOpSp0jqrzYqYpODgE2YO9KndUYaRPiHC7IqbKna3GIpTgRM0vaNos9dS92z7SvxUIsw4EKOn4H1uBkXIVJ2IHvcL/wSy3DK/imTPtM8XWyz7rU91OZvh0ivjo+03YkjkJPGfpVwimW4gu8UWmx1VSrFsxNz7yS9vfwILqE75lZ5t3zhEb04FYhCSKAnFrvQhpRrSyur9D+Ou7GAThfqE4p8hv3S9wnGL6ppK9mNCuR/rA1ldUcb29J2R99WQw0I4OGZlWr1chHER/W+2KzjOT9zCfCKpVifCp7ahzvhUYXMlCqdSWWYFqqfzdA8/yFZiVySCq3lbQfmh5YLY6ytViiq9Ka3lF88OoXzTLyfYX2Z4VH3yQk0602Rh7EGCHRQWWkEr7QhL43gv/Nb0I+RdSn/kDvj1TuJ9RpPHZJbVvqXUizjKxIZZf6k2jLUjlRnHvahYb0ZfpqxlCq1gKR5oGdxEfdjtsUJ/iaRqUwvtUYK1T0IMFQJVQN44dDiNKVnqbwv9XCFHGS+1Qhltobe4ozBgXPv0LkcacIRzdOQY1y+EHkrian/pYmPSrtkZFYJNRhI17K9C0SG3a/VF8o8rf7ik2cE9cIS4SJ3SRCmMPFuf+rNO6+ZeZt+R65AGekySeJLzk6/T5bSOM6zEn0HXhaZAmzWZkXRPJ6DY4QEntYZDfX1LuoRvbIXiJDvw73pMVMxCyhIktxrcJVwFMi2fCQ8BF5HI2LcYqQ6hxcLrL62YujmtAIIy+LlM+T+Ci17Swi1x/FNUCHwi3XBlyG20vG2SiCzt2EhKeJYPM35c/4VdGIaq3ECbhBbOxzU/tc8VV7cKn4SAvxC95KNPcJZucpvm5bijdxrMiNzddCDJZDrBUN57V6DQ+HmUe74kxLEaoxshb7KFx6DiXGCJNetzUjTGlOOLyLFS4mBxOjcKEwyTmc0+hA1wgzmxMSuktkDwca++NOIYGcuBuplNVEbRm9nXCR8BOnCD19VTiv1xR8Q6eQ3DnCHFdDtzDjCxUuk0YILZgl/jTQjg/wCF5UyFq2BIcJJ7hRfKnVqZ61+x2CoUUiu5LPsm9JbVco3nd74EYRj+VEqPKo4n9LDBjGCO/9aZp8m7iHP12xlCcI9Tzf36V0Gp5RYPYzoT5DZlymii/YlRa0XFwTTChDO07EYcsS7Vbx54BpZWiHDHkV+VosslvcjZ8q9tZjCsx+g5sVUqrDEm1CxRYo3iPbRcR7pgauDWqZdCDRqRDJvoWfB3i+fz7+BLLtKioEWTxcAAAAAElFTkSuQmCC",
            value: "EPIC免费"
          }
        ]}
      />
    </View>
  );
}

IndexPage.config = {
  navigationBarTitleText: 'LP.福利社'
};

export default IndexPage;
