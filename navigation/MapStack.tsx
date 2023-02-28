import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREEN_NAMES } from '../constant';
import { MapsScreen } from '../screens/Maps/MapsScreen';
import { StyledDefaultHeader, StyledBar, StyledUserBar } from '../components';
import { appColor } from '../constant';
import { View } from 'react-native';

const Stack = createNativeStackNavigator();

export const MapStack = ({ navigation }: { navigation: any }) => {
  return (
    <Stack.Navigator
      initialRouteName={SCREEN_NAMES.MAPS_SCREEN}
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
      <Stack.Screen name={SCREEN_NAMES.MAPS_SCREEN} component={MapsScreen} />
    </Stack.Navigator>
  );
};
