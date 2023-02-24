import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '../screens/Home/HomeScreen';
import { DRAWER_STRINGS, appColor } from '../constant/';
import { StyledDefaultHeader } from '../components/StyledDefaultHeader';

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName={DRAWER_STRINGS.HOME}>
      <Stack.Screen name={DRAWER_STRINGS.HOME} component={HomeScreen} />
    </Stack.Navigator>
  );
};
