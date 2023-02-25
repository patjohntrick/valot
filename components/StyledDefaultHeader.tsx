import { View, Text, StyleSheet } from 'react-native';
import { Strings, appColor } from '../constant';
import { Octicons, Feather } from '@expo/vector-icons';

type StyledDefaultHeaderProps = {
  headerTitleProp?: string;
};

export const StyledDefaultHeader = ({
  headerTitleProp,
}: StyledDefaultHeaderProps) => {
  return <Text style={styles.textStyle}>{Strings.LOGO}</Text>;
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'red',
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: appColor.sunburntCyclopsRed,
  },
  textStyle: {
    color: appColor.eerieBlack,
    fontFamily: 'Valorant-Font',
    fontSize: 24,
  },
});
