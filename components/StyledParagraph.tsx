import { StyleSheet, Text } from 'react-native';
import { appColor } from '../constant';

type StyledParagraphProps = {
  text: string;
};

export const StyledParagraph = ({ text }: StyledParagraphProps) => {
  return <Text style={styles.textStyle}>{text}</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    color: appColor.milkWhite,
    fontFamily: 'Oswald-ExtraLight',
    marginTop: 5,
    lineHeight: 20,
  },
});
