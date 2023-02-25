import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export const StyledUserBar = () => {
  return (
    <TouchableOpacity onPress={() => console.log('Hello User')}>
      <Feather name='user' size={24} color='black' />
    </TouchableOpacity>
  );
};
