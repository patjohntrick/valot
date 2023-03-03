import { CSSProperties } from 'react';
import { StyleSheet, Text } from 'react-native';

import { appColor } from '../constant';

type StyledTitleProps = {
  title: string;
  style?: CSSProperties;
};
export const StyledTitle = ({ title, style }: StyledTitleProps) => {
  return <Text style={[styles.textStyle, style]}>{title}</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    color: appColor.sunburntCyclopsRed,
    fontFamily: 'Valorant-Font',
    textTransform: 'uppercase',
    fontSize: 30,
    textAlign: 'center',
  },
});
