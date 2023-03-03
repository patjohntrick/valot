import { TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Feather } from '@expo/vector-icons';

import { removeAgent } from '../redux/slice/AgentSlice';

export const StyledUserBar = () => {
  const dispatch = useDispatch();
  const agent = useSelector((state: any) => state.agent.agent);
  return (
    <TouchableOpacity
      onPress={() => {
        console.log('Hello User', agent);
        dispatch(removeAgent());
      }}
    >
      <Feather name='user' size={24} color='black' />
    </TouchableOpacity>
  );
};
