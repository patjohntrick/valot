import { StyleSheet, Text } from 'react-native';
import { appColor } from '../constant';

type StyledTitleProps = {
  title: string;
};
export const StyledTitle = ({ title }: StyledTitleProps) => {
  return <Text style={styles.textStyle}>{title}</Text>;
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
