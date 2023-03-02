import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  Text,
} from 'react-native';
import { StyledLoader, StyledParagraph, StyledTitle } from '../../components';
import { SCREEN_NAMES, Strings, appColor, globalStyles } from '../../constant';
import { getWeapons } from '../../api/Api';

export const WeaponsScreen = ({ navigation }: { navigation: any }) => {
  const { data, error, isLoading } = getWeapons();
  if (isLoading) return <StyledLoader />;
  const handleClick = (weaponId: string) => {
    navigation.navigate(SCREEN_NAMES.WEAPON_SCREEN, { weaponId });
  };
  return (
    <View style={globalStyles.container}>
      <View style={styles.textStyle}>
        <StyledTitle title='//WEAPONS' />
        <StyledParagraph text={Strings.WEAPON_DESC} />
      </View>
      <FlatList
        contentContainerStyle={{
          alignItems: 'center',
          paddingBottom: 20,
        }}
        data={data.data}
        keyExtractor={(weapon) => weapon.uuid}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.cardContainer}
              onPress={() => handleClick(item.uuid)}
            >
              <View style={styles.cardInnerContainer}>
                <Image
                  resizeMode='contain'
                  source={{ uri: item.displayIcon }}
                  style={styles.imgStyle}
                />
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    paddingHorizontal: 20,
  },
  imgStyle: {
    width: '100%',
    height: '100%',
    // borderWidth: 1,
    // borderColor: 'red',
  },
  backImg: {
    width: 100,
    height: 400,
    position: 'absolute',
  },
  cardContainer: {
    backgroundColor: appColor.chineseBlack,
    // borderWidth: 1,
    // borderColor: appColor.milkWhite,
    height: 150,
    width: 380,
    marginTop: 20,
    borderRadius: 10,
    // marginVertical: 7,
    // borderWidth: 1,
    // borderColor: 'red',
    overflow: 'hidden',
    position: 'relative',
    // paddingHorizontal: 10
    // margin: 'auto',
  },
  cardInnerContainer: {
    // backgroundColor: appColor.grayAsparagusGreen,
    borderRadius: 10,
    padding: 20,
  },
});
