import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import { StyledLoader, StyledParagraph, StyledTitle } from '../../components';
import {
  DRAWER_STRINGS,
  Strings,
  appColor,
  globalStyles,
} from '../../constant';
import { getMaps } from '../../api/Api';

export const MapsScreen = () => {
  const { data, error, isLoading } = getMaps();

  if (isLoading) return <StyledLoader />;

  return (
    <View style={globalStyles.container}>
      <View style={styles.textStyle}>
        <StyledTitle title={DRAWER_STRINGS.MAPS} />
        <StyledParagraph text={Strings.MAP_DESC} />
      </View>
      {/* <View style={styles.outerCardContainer}> */}
      <FlatList
        contentContainerStyle={{ alignItems: 'center', paddingBottom: 20 }}
        data={data.data}
        keyExtractor={(map) => map.uuid}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.cardContainer}>
              <View>
                <Image
                  resizeMode='cover'
                  source={{ uri: item.splash }}
                  style={styles.imgStyle}
                />
              </View>
            </TouchableOpacity>
          );
        }}
      />
      {/* </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    paddingHorizontal: 20,
  },
  cardContainer: {
    // backgroundColor: appColor.eerieBlack,
    // borderWidth: 1,
    // borderColor: appColor.milkWhite,
    height: 200,
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
  imgStyle: {
    width: '100%',
    height: '100%',
    // borderWidth: 1,
    // borderColor: 'red',
  },
  outerCardContainer: {
    alignItems: 'center',
  },
});
