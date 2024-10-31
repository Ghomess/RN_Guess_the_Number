import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/Stack/StackNavigator';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <>
      <StatusBar style='auto' />
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </>
  );
}
