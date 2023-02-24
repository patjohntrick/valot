import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from '../screens/Home/HomeScreen';
import { AgentStack } from './AgentStack';
import { HomeStack } from './HomeStack';
import { AgentsScreen } from '../screens/Agent/AgentsScreen';
import { DRAWER_STRINGS, appColor } from '../constant/';
import { StyledDefaultHeader } from '../components/StyledDefaultHeader';
import { Octicons, Feather } from '@expo/vector-icons';
import { View, Text } from 'react-native';

const Drawer = createDrawerNavigator();

export const MainNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName={DRAWER_STRINGS.HOME}
      screenOptions={{
        headerTitle: () => (
          <StyledDefaultHeader headerTitleProp={DRAWER_STRINGS.HOME} />
        ),
        headerStyle: {
          backgroundColor: appColor.sunburntCyclopsRed,
          height: 100,
        },
        headerRight: () => (
          <Feather
            name='user'
            size={20}
            color='black'
            style={{ marginRight: 15 }}
          />
        ),
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
      }}
    >
      <Drawer.Screen
        name={DRAWER_STRINGS.HOME}
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
      <Drawer.Screen name={DRAWER_STRINGS.AGENTS} component={AgentsScreen} />
    </Drawer.Navigator>
  );
};
