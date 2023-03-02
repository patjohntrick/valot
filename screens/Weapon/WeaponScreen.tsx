import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import {
  StyledLayout,
  StyledLoader,
  StyledParagraph,
  StyledSubTitle,
  StyledTitle,
} from '../../components';
import { getWeapon } from '../../api/Api';
import { useRoute } from '@react-navigation/native';
import { useState } from 'react';
import { Strings, appColor } from '../../constant';

const { COST, CATEGORY, DAMAGE_RANGES } = Strings;

export const WeaponScreen = () => {
  const [isRange, setIsRange] = useState(false);

  const { params } = useRoute();
  const { data, error, isLoading } = getWeapon(params?.weaponId);

  console.log(data.data.weaponStats.damageRanges.length);

  if (isLoading) return <StyledLoader />;

  return (
    <StyledLayout>
      <StyledTitle title={data.data.displayName} />
      <View style={styles.dataContainer}>
        <StyledParagraph
          text={`${COST}: ${data.data.shopData && data.data.shopData.cost}`}
        />
        <StyledParagraph
          text={`${CATEGORY}: ${
            data.data.shopData && data.data.shopData.category
          }`}
        />
        <View style={styles.imgContainer}>
          <Image
            style={styles.imgStyle}
            resizeMode='contain'
            source={{ uri: data.data.shopData.newImage }}
          />
        </View>
        <StyledSubTitle text={DAMAGE_RANGES} />
        <View>
          <Text></Text>
        </View>
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
});
