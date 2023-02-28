import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from '../screens/Home/HomeScreen';
import { AgentStack } from './AgentStack';
import { HomeStack } from './HomeStack';
import { AgentsScreen } from '../screens/Agent/AgentsScreen';
import { DRAWER_STRINGS, SCREEN_NAMES, Strings, appColor } from '../constant/';
import { StyledDefaultHeader } from '../components/StyledDefaultHeader';
import { Octicons, Feather } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import { MapStack } from './MapStack';

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
    </Drawer.Navigator>
  );
};
