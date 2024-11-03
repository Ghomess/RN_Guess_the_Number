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
        {({ navigation }) => (
          <BackgroundComponent>
            <StartGameScreen navigation={navigation} />
          </BackgroundComponent>
        )}
      </Stack.Screen>
      <Stack.Screen name='GameScreen'>
        {({ navigation, route }) => (
          <BackgroundComponent>
            <GameScreen
              navigation={navigation}
              route={route}
            />
          </BackgroundComponent>
        )}
      </Stack.Screen>
      <Stack.Screen name='GameOverScreen'>
        {({ navigation, route }) => (
          <BackgroundComponent>
            <GameOverScreen
              navigation={navigation}
              route={route}
            />
          </BackgroundComponent>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

export default StackNavigator;
