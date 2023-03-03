import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyledDefaultHeader, StyledBar, StyledUserBar } from '../components';
import { WeaponScreen } from '../screens/Weapon/WeaponScreen';
import { WeaponSkins } from '../screens/Weapon/WeaponSkins';
import { WeaponsScreen } from '../screens/Weapon/WeaponsScreen';
import { appColor, SCREEN_NAMES } from '../constant';

const Stack = createNativeStackNavigator();

export const WeaponStack = ({ navigation }: { navigation: any }) => {
  return (
    <Stack.Navigator
      initialRouteName={SCREEN_NAMES.WEAPONS_SCREEN}
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
      <Stack.Screen
        name={SCREEN_NAMES.WEAPONS_SCREEN}
        component={WeaponsScreen}
      />
      <Stack.Screen
        name={SCREEN_NAMES.WEAPON_SCREEN}
        component={WeaponScreen}
        options={{ headerLeft: undefined }}
      />
      <Stack.Screen
        name={SCREEN_NAMES.WEAPON_SKINS_SCREEN}
        component={WeaponSkins}
        options={{ headerLeft: undefined }}
      />
    </Stack.Navigator>
  );
};
