import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartGameScreen from '../screens/StartGameScreen';
import GameScreen from '../screens/GameScreen';
import GameOverScreen from '../screens/GameOverScreen';
import { colors } from '../utils/colors';
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground } from 'react-native';
import BackgroundComponent from '../components/BackgroundComponent';

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName='StartGameScreen'
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name='StartGameScreen'>
        {() => (
          <BackgroundComponent>
            <StartGameScreen />
          </BackgroundComponent>
        )}
      </Stack.Screen>
      <Stack.Screen name='GameScreen'>
        {() => (
          <BackgroundComponent>
            <GameScreen />
          </BackgroundComponent>
        )}
      </Stack.Screen>
      <Stack.Screen name='GameOverScreen'>
        {() => (
          <BackgroundComponent>
            <GameOverScreen />
          </BackgroundComponent>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

export default StackNavigator;
