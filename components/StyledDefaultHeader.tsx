import { View, Text, StyleSheet } from 'react-native';
import { appColor } from '../constant';

type StyledDefaultHeaderProps = {
  headerTitleProp: string;
};

export const StyledDefaultHeader = ({
  headerTitleProp,
}: StyledDefaultHeaderProps) => {
  return <Text style={styles.textStyle}>{headerTitleProp}</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    color: appColor.eerieBlack,
    fontFamily: 'Valorant-Font',
    fontSize: 24,
  },
});
