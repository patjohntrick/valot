import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '../screens/Home/HomeScreen';
import { DRAWER_STRINGS, SCREEN_NAMES, Strings, appColor } from '../constant/';
import { StyledDefaultHeader } from '../components/StyledDefaultHeader';
import { StyledBar, StyledUserBar } from '../components';
import { View } from 'react-native';

const Stack = createNativeStackNavigator();

export const HomeStack = ({ navigation }: { navigation: any }) => {
  return (
    <Stack.Navigator
      initialRouteName={SCREEN_NAMES.HOME_SCREEN}
      screenOptions={{
        animation: 'slide_from_right',
        headerBackButtonMenuEnabled: true,
        animationDuration: 1000,
        headerTitle: () => <StyledDefaultHeader />,
        headerLeft: () => <StyledBar navigation={navigation} />,
        headerRight: () => <StyledUserBar />,
        headerTitleAlign: 'center',
        headerBackground: () => (
          <View
            style={{
              backgroundColor: appColor.sunburntCyclopsRed,
              width: '100%',
              height: '100%',
            }}
          ></View>
        ),
      }}
    >
      <Stack.Screen name={SCREEN_NAMES.HOME_SCREEN} component={HomeScreen} />
    </Stack.Navigator>
  );
};
