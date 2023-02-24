import { View, Text, TouchableHighlight } from 'react-native';
import { StyledLayout } from '../../components/StyledLayout';

export const HomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <StyledLayout>
      <TouchableHighlight onPress={() => navigation.navigate('Agents')}>
        <Text>
          Home Screen Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ad iusto recusandae provident sit consequatur corporis ab voluptas
          aliquam expedita laboriosam!
        </Text>
      </TouchableHighlight>
    </StyledLayout>
  );
};
