import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';
import { useRoute } from '@react-navigation/native';

import { StyledTitle } from '../../components';
import { appColor, globalStyles } from '../../constant';

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
    height: 150,
    width: 380,
    marginTop: 20,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  imgContainer: {
    padding: 40,
  },
  imgStyle: {
    width: '100%',
    height: '100%',
  },
});
