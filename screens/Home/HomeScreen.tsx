import { Text, TouchableHighlight, StyleSheet } from 'react-native';

import { StyledLayout } from '../../components/StyledLayout';
import { appColor } from '../../constant';

export const HomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <StyledLayout>
      <TouchableHighlight onPress={() => navigation.navigate('Agents')}>
        <Text style={styles.textStyle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad iusto
          recusandae provident sit consequatur corporis ab voluptas aliquam
          expedita laboriosam!
        </Text>
      </TouchableHighlight>
    </StyledLayout>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'Oswald-Light',
    color: appColor.milkWhite,
  },
});
