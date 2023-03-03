import { CSSProperties } from 'react';
import { StyleSheet, Text } from 'react-native';

import { appColor } from '../constant';

type StyledParagraphProps = {
  text: string;
  style?: CSSProperties;
};

export const StyledParagraph = ({ text, style }: StyledParagraphProps) => {
  return <Text style={[styles.textStyle, style]}>{text}</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    color: appColor.milkWhite,
    fontFamily: 'Oswald-ExtraLight',
    fontSize: 16,
    marginTop: 5,
    lineHeight: 24,
    textAlign: 'justify',
  },
});
