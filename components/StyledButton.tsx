import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { CSSProperties } from 'react';

import { appColor } from '../constant';

type StyledButtonProps = {
  text: string;
  buttonStyle?: CSSProperties;
  textStyle?: CSSProperties;
};

export const StyledButton = ({
  text,
  buttonStyle,
  textStyle,
}: StyledButtonProps) => {
  return (
    <TouchableOpacity style={[styles.container, buttonStyle]}>
      <Text style={[styles.textStyle, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColor.sunburntCyclopsRed,
  },
  textStyle: {},
});
