import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/stack/StackNavigator';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();
export default function App() {
  const [loaded, error] = useFonts({
    'open-sans': require('./src/assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./src/assets/fonts/OpenSans-Bold.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      console.log(loaded, error);
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <>
      <StatusBar style='auto' />
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </>
  );
}
