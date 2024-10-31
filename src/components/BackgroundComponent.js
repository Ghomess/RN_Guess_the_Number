import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';

function BackgroundComponent({ children }) {
  return (
    <LinearGradient
      colors={[colors.primary, colors.secondary]}
      style={style.rootScreen}>
      <ImageBackground
        source={require('../images/background.png')}
        resizeMode='cover'
        style={style.rootScreen}
        imageStyle={style.backgroundImage}>
        {children}
      </ImageBackground>
    </LinearGradient>
  );
}

export default BackgroundComponent;

const style = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
