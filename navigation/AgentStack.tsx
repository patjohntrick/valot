import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyledBar, StyledDefaultHeader, StyledUserBar } from '../components';
import { AgentsScreen } from '../screens/Agent/AgentsScreen';
import { AgentScreen } from '../screens/Agent/AgentScreen';
import { SCREEN_NAMES, appColor } from '../constant';

const Stack = createNativeStackNavigator();

export const AgentStack = ({ navigation }: { navigation: any }) => {
  return (
    <Stack.Navigator
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
      initialRouteName={SCREEN_NAMES.AGENTS_SCREEN}
    >
      <Stack.Screen
        name={SCREEN_NAMES.AGENTS_SCREEN}
        component={AgentsScreen}
      />
      <Stack.Screen
        name={SCREEN_NAMES.AGENT_SCREEN}
        component={AgentScreen}
        options={{
          headerLeft: undefined,
        }}
      />
    </Stack.Navigator>
  );
};
