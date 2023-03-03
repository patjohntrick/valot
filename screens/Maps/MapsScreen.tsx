import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

import { StyledLoader, StyledParagraph, StyledTitle } from '../../components';
import { getMaps } from '../../api/Api';
import { DRAWER_STRINGS, Strings, globalStyles } from '../../constant';

export const MapsScreen = () => {
  const { data, error, isLoading } = getMaps();

  if (isLoading) return <StyledLoader />;

  return (
    <View style={globalStyles.container}>
      <View style={styles.textStyle}>
        <StyledTitle title={DRAWER_STRINGS.MAPS} />
        <StyledParagraph text={Strings.MAP_DESC} />
      </View>
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
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    paddingHorizontal: 20,
  },
  cardContainer: {
    height: 200,
    width: 380,
    marginTop: 20,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  imgStyle: {
    width: '100%',
    height: '100%',
  },
  outerCardContainer: {
    alignItems: 'center',
  },
});
