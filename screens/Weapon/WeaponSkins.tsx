import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { appColor, globalStyles } from '../../constant';
import { useRoute } from '@react-navigation/native';
import { StyledTitle } from '../../components';

export const WeaponSkins = () => {
  const {
    params: { skins },
  } = useRoute();

  return (
    <View style={globalStyles.container}>
      <StyledTitle title='SKIN' style={styles.textStyle} />
      <FlatList
        contentContainerStyle={{
          alignItems: 'center',
          paddingBottom: 20,
        }}
        data={skins}
        keyExtractor={(skin) => skin.uuid}
        renderItem={({ item }) => {
          return (
            <ImageBackground
              resizeMode='cover'
              source={{ uri: item.wallpaper }}
              style={styles.cardContainer}
            >
              <View style={styles.imgContainer}>
                <Image
                  resizeMode='contain'
                  source={{ uri: item.displayIcon }}
                  style={styles.imgStyle}
                />
              </View>
            </ImageBackground>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    paddingBottom: 10,
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
  imgContainer: {
    padding: 40,
  },
  imgStyle: {
    width: '100%',
    height: '100%',
  },
});
