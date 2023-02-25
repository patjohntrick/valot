import { StyleSheet, Text } from 'react-native';
import { appColor } from '../constant';
import { CSSProperties } from 'react';

type StyledParagraphProps = {
  text: string;
  style?: CSSProperties;
};

export const StyledParagraph = ({ text, style }: StyledParagraphProps) => {
  return <Text style={[style, styles.textStyle]}>{text}</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    color: appColor.milkWhite,
    fontFamily: 'Oswald-ExtraLight',
    fontSize: 16,
    marginTop: 5,
    lineHeight: 24,
  },
});
