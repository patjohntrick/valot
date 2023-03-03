import { StyleSheet, Text } from 'react-native';
import { appColor } from '../constant';

type StyledSubTitleProps = {
  text: string;
  style?: any;
  numberOfLines?: number;
};

export const StyledSubTitle = ({
  text,
  style,
  numberOfLines,
}: StyledSubTitleProps) => {
  return (
    <Text style={[styles.textStyle, style]} numberOfLines={numberOfLines}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'Oswald-Regular',
    fontSize: 34,
    color: appColor.milkWhite,
    marginBottom: -8,
  },
});
