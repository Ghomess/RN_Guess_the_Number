import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';

function BackgroundComponent({ children }) {
  return (
    <LinearGradient
      colors={[colors.primary700, colors.accent500]}
      style={style.rootScreen}>
      <ImageBackground
        source={require('../assets/images/background.png')}
        resizeMode='cover'
        style={style.rootScreen}
        imageStyle={style.backgroundImage}>
        <SafeAreaView style={style.rootScreen}>{children}</SafeAreaView>
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
