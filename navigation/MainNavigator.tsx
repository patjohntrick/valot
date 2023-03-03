import { createDrawerNavigator } from '@react-navigation/drawer';

import { AgentStack } from './AgentStack';
import { HomeStack } from './HomeStack';
import { MapStack } from './MapStack';
import { WeaponStack } from './WeaponStack';
import { DRAWER_STRINGS, appColor } from '../constant/';

const Drawer = createDrawerNavigator();

export const MainNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerContentStyle: { backgroundColor: appColor.eerieBlack },
        drawerType: 'slide',
        drawerActiveBackgroundColor: appColor.eerieBlack,
        drawerActiveTintColor: appColor.milkWhite,
        drawerInactiveTintColor: appColor.milkWhite,
        drawerItemStyle: {
          borderBottomWidth: 1,
          borderBottomColor: appColor.milkWhite,
        },
        drawerStyle: { backgroundColor: appColor.eerieBlack, width: 250 },
        headerShown: false,
      }}
    >
      <Drawer.Screen name={DRAWER_STRINGS.HOME} component={HomeStack} />
      <Drawer.Screen name={DRAWER_STRINGS.AGENTS} component={AgentStack} />
      <Drawer.Screen name={DRAWER_STRINGS.MAPS} component={MapStack} />
      <Drawer.Screen name={DRAWER_STRINGS.WEAPONS} component={WeaponStack} />
    </Drawer.Navigator>
  );
};
