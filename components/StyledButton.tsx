import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { CSSProperties } from 'react';

import { appColor } from '../constant';

type StyledButtonProps = {
  text: string;
  buttonStyle?: CSSProperties;
  textStyle?: CSSProperties;
  onPress?: () => void;
};

export const StyledButton = ({
  text,
  buttonStyle,
  textStyle,
  onPress,
}: StyledButtonProps) => {
  return (
    <TouchableOpacity style={[styles.container, buttonStyle]} onPress={onPress}>
      <Text style={[styles.textStyle, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColor.sunburntCyclopsRed,
    paddingVertical: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  textStyle: {
    textAlign: 'center',
    color: appColor.milkWhite,
    fontFamily: 'Valorant-Font',
    fontSize: 20,
  },
});
