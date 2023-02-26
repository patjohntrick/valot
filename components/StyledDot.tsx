import { StyleSheet, Text, View } from 'react-native';
import { Strings, appColor } from '../constant';

export const StyledDot = () => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.dotStyle}></View>
        <View style={styles.dotStyle}></View>
      </View>
      <View style={[styles.horizontalDot, { top: 30, right: 0 }]}>
        <View style={styles.dotStyle}></View>
        <View style={styles.dotStyle}></View>
      </View>
      <View style={[styles.vertcialDot, { top: 100, right: 0 }]}>
        <View style={styles.dotStyle}></View>
        <View style={styles.dotStyle}></View>
      </View>
      <View style={[styles.bigDot, { top: 60 }]}></View>
      <View style={[styles.horizontalDot, { top: 120, left: 30 }]}>
        <View style={styles.dotStyle}></View>
        <View style={styles.dotStyle}></View>
      </View>
      <View style={[styles.bigDot, { top: 200, right: 60 }]}></View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>{Strings.ANIMATED_TEXT}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  textContainer: {
    position: 'absolute',
    width: 50,
    height: 50,
    top: 230,
    left: 0,
    transform: [{ rotate: '90deg' }],
  },
  textStyle: {
    color: appColor.watermelonRed,
    fontFamily: 'Oswald-Medium',
    fontSize: 12,
    textAlign: 'left',
    lineHeight: 13,
  },
  dotStyle: {
    backgroundColor: appColor.watermelonRed,
    width: 4,
    height: 4,
    margin: 3,
    borderRadius: 1,
  },
  horizontalDot: {
    flexDirection: 'row',
    position: 'absolute',
    width: 30,
    height: 30,
  },
  vertcialDot: {
    position: 'absolute',
    width: 30,
    height: 30,
  },
  bigDot: {
    position: 'absolute',
    width: 10,
    height: 10,
    backgroundColor: appColor.watermelonRed,
    borderRadius: 1,
  },
});
