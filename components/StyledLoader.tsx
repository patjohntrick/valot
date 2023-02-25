import { View, StyleSheet, Text } from 'react-native';
import { appColor } from '../constant';

export const StyledLoader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: appColor.eerieBlack,
  },
  textStyle: {
    fontFamily: 'Valorant-Font',
    fontSize: 34,
    color: appColor.sunburntCyclopsRed,
  },
});
