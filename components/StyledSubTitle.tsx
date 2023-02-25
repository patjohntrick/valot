import { StyleSheet, Text } from 'react-native';
import { appColor } from '../constant';

type StyledSubTitleProps = {
  text: string;
  style?: any;
};

export const StyledSubTitle = ({ text, style }: StyledSubTitleProps) => {
  return <Text style={[styles.textStyle, style]}>{text}</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'Oswald-Regular',
    fontSize: 34,
    color: appColor.milkWhite,
    marginBottom: -8,
  },
});
