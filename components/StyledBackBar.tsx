import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

type StyledBackBarProps = {
  navigation: any;
};

export const StyledBackBar = ({ navigation }: StyledBackBarProps) => {
  const handleClick = () => {
    console.log('back button clicked');
  };
  return (
    <TouchableOpacity onPress={handleClick}>
      <Ionicons name='arrow-back' size={24} color='black' />
    </TouchableOpacity>
  );
};
