import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

import { StyledLoader, StyledParagraph, StyledTitle } from '../../components';
import { getWeapons } from '../../api/Api';
import { SCREEN_NAMES, Strings, appColor, globalStyles } from '../../constant';

export const WeaponsScreen = ({ navigation }: { navigation: any }) => {
  const { data, error, isLoading } = getWeapons();

  const handleClick = (weaponId: string) => {
    const weapon = data.data.filter((weapon: any) => weapon.uuid === weaponId);
    navigation.navigate(
      weapon[0].uuid === Strings.MELEE_ID
        ? SCREEN_NAMES.WEAPON_SKINS_SCREEN
        : SCREEN_NAMES.WEAPON_SCREEN,
      { weapon: weapon[0], skins: weapon[0].skins }
    );
  };

  if (isLoading) return <StyledLoader />;
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
  },
  backImg: {
    width: 100,
    height: 400,
    position: 'absolute',
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
  cardInnerContainer: {
    borderRadius: 10,
    padding: 20,
  },
});
