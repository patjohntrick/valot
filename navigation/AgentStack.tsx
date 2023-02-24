import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { AgentsScreen } from '../screens/Agent/AgentsScreen';

const Stack = createNativeStackNavigator();

export const AgentStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Agents' component={AgentsScreen} />
    </Stack.Navigator>
  );
};
