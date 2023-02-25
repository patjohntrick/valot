import { TouchableOpacity } from 'react-native';
import { Octicons } from '@expo/vector-icons';

export const StyledBar = ({ navigation }: { navigation: any }) => {
  return (
    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
      <Octicons name='three-bars' size={24} color='black' />
    </TouchableOpacity>
  );
};
