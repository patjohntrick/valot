import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREEN_NAMES } from '../constant';
import { AgentStack } from './AgentStack';

const Stack = createNativeStackNavigator();

export const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={SCREEN_NAMES.AGENTS_SCREEN} component={AgentStack} />
    </Stack.Navigator>
  );
};
