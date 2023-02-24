import { View, Text, StyleSheet } from 'react-native';
import { appColor } from '../constant';

type StyledDefaultHeaderProps = {
  headerTitleProp: string;
};

export const StyledDefaultHeader = ({
  headerTitleProp,
}: StyledDefaultHeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{headerTitleProp}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 285,
    height: '100%',
    justifyContent: 'center',
  },
  textStyle: {
    color: appColor.eerieBlack,
    textAlign: 'center',
    fontFamily: 'Valorant-Font',
    fontSize: 24,
  },
});
