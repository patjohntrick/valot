import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AgentStack } from './AgentStack';
import { SCREEN_NAMES } from '../constant';

const Stack = createNativeStackNavigator();

export const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={SCREEN_NAMES.AGENTS_SCREEN} component={AgentStack} />
    </Stack.Navigator>
  );
};
