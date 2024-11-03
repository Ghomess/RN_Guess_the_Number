import { Image, StyleSheet, Text, View } from 'react-native';
import { colors } from '../utils/colors';
import ButtonComponent from '../components/ButtonComponent';
import TitleComponent from '../components/TitleComponent';

function GameOverScreen({ navigation, route }) {
  const { userNumber, numberOfRounds } = route.params;

  return (
    <View style={styles.container}>
      <TitleComponent>GAME OVER!</TitleComponent>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/success.png')}
          style={styles.image}
          resizeMode='cover'
        />
      </View>

      <Text style={styles.text}>
        Your phone needed <Text style={styles.result}>{numberOfRounds} </Text>
        rounds to guess the number
        <Text style={styles.result}> {userNumber}</Text>.
      </Text>

      <ButtonComponent onPress={() => navigation.navigate('StartGameScreen')}>
        Start New Game
      </ButtonComponent>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',

    padding: 10,
    borderWidth: 2,
    borderColor: colors.white,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.white,
  },
  imageContainer: {
    width: 400,
    height: 400,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: colors.primary800,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },

  text: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
  result: {
    fontFamily: 'open-sans-bold',
    color: colors.primary500,
  },
});
