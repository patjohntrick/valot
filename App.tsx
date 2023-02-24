import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from 'react-query';

import { MainNavigator } from './navigation/MainNavigator';

const queryClient = new QueryClient();

export default function App() {
  const [font] = useFonts({
    'Valorant-Font': require('./assets/font/Valorant-Font.ttf'),
    'Oswald-Light': require('./assets/font/Oswald-Light.ttf'),
    'Oswald-ExtraLight': require('./assets/font/Oswald-ExtraLight.ttf'),
    'Oswald-Regular': require('./assets/font/Oswald-Regular.ttf'),
    'Oswald-SemiBold': require('./assets/font/Oswald-SemiBold.ttf'),
    'Oswald-Medium': require('./assets/font/Oswald-Medium.ttf'),
    'Oswald-Bold': require('./assets/font/Oswald-Bold.ttf'),
  });

  if (!font) return;

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <StatusBar style='light' backgroundColor='#0a1118' />
        <MainNavigator />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
