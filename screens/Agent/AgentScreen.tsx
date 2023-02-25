import { Text, TouchableOpacity, View } from 'react-native';
import { StyledLayout } from '../../components';

export const AgentScreen = ({ navigation }: { navigation: any }) => {
  return (
    <StyledLayout>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Name of Agent</Text>
      </TouchableOpacity>
    </StyledLayout>
  );
};
