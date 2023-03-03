import { Image, StyleSheet, View } from 'react-native';
import { useRoute } from '@react-navigation/native';

import {
  StyledButton,
  StyledLayout,
  StyledParagraph,
  StyledSubTitle,
  StyledTitle,
} from '../../components';
import { SCREEN_NAMES, Strings, appColor } from '../../constant';

const { COST, CATEGORY, DAMAGE_RANGES, BODY_PARTS, SKINS } = Strings;

export const WeaponScreen = ({ navigation }: { navigation: any }) => {
  const {
    params: { weapon },
  } = useRoute();

  const handleClick = () => {
    navigation.navigate(SCREEN_NAMES.WEAPON_SKINS_SCREEN, {
      skins: weapon.skins,
    });
  };

  return (
    <StyledLayout>
      <StyledTitle title={weapon.displayName} />
      <View style={styles.dataContainer}>
        <StyledParagraph
          text={`${COST}: ${weapon.shopData && weapon.shopData.cost}`}
        />
        <StyledParagraph
          text={`${CATEGORY}: ${weapon.shopData && weapon.shopData.category}`}
        />
        <View style={styles.imgContainer}>
          <Image
            style={styles.imgStyle}
            resizeMode='contain'
            source={{ uri: weapon.shopData.newImage }}
          />
        </View>
        <StyledSubTitle text={DAMAGE_RANGES} />
        <View style={styles.damageContainer}>
          {/* header */}
          <View style={{ marginTop: 42 }}>
            {BODY_PARTS.map((value: any, index: number) => {
              return (
                <View style={styles.header} key={index}>
                  <StyledSubTitle
                    text={BODY_PARTS[index]}
                    style={styles.headerStyle}
                  />
                </View>
              );
            })}
          </View>
          {/* data value */}
          <View>
            <View style={styles.damageValueContainer}>
              {weapon.weaponStats.damageRanges.map(
                (value: any, index: number) => {
                  return (
                    <View key={index}>
                      <View>
                        <StyledSubTitle
                          text={`${value.rangeStartMeters}-${value.rangeEndMeters}m`}
                          style={[
                            styles.dataValueTextStyle,
                            {
                              color: appColor.sunburntCyclopsRed,
                              marginBottom: 10,
                              width: 60,
                            },
                          ]}
                        />
                      </View>
                      <View style={styles.header}>
                        <StyledSubTitle
                          text={value.headDamage}
                          style={styles.dataValueTextStyle}
                          numberOfLines={1}
                        />
                      </View>
                    </View>
                  );
                }
              )}
            </View>
            <View style={styles.damageValueContainer}>
              {weapon.weaponStats.damageRanges.map(
                (value: any, index: number) => {
                  return (
                    <View style={styles.header} key={index}>
                      <StyledSubTitle
                        text={value.bodyDamage}
                        style={styles.dataValueTextStyle}
                        numberOfLines={1}
                      />
                    </View>
                  );
                }
              )}
            </View>
            <View style={styles.damageValueContainer}>
              {weapon.weaponStats.damageRanges.map(
                (value: any, index: number) => {
                  return (
                    <View style={styles.header} key={index}>
                      <StyledSubTitle
                        text={value.legDamage}
                        style={styles.dataValueTextStyle}
                        numberOfLines={1}
                      />
                    </View>
                  );
                }
              )}
            </View>
          </View>
        </View>
        <StyledButton text={SKINS} onPress={handleClick} />
      </View>
    </StyledLayout>
  );
};
const styles = StyleSheet.create({
  dataContainer: {
    marginVertical: 10,
  },
  imgContainer: {
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: appColor.chineseBlack,
    borderRadius: 5,
    padding: 20,
  },
  imgStyle: {
    width: 300,
    height: 120,
  },
  damageInnerContainer: {},
  damageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
    backgroundColor: appColor.chineseBlack,
    borderRadius: 5,
    padding: 20,
  },
  damageValueContainer: {
    flexDirection: 'row',
  },
  headerStyle: {
    fontSize: 20,
    color: appColor.sunburntCyclopsRed,
  },
  dataValueTextStyle: {
    fontSize: 20,
    color: appColor.milkWhite,
    marginHorizontal: 20,
    width: 60,
    overflow: 'hidden',
    textAlign: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
});
