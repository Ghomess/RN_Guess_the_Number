import { Image, StyleSheet, Text, View } from 'react-native';
import { colors } from '../utils/colors';
import ButtonComponent from '../components/ButtonComponent';

function GameOverScreen({ navigation, route }) {
  // const { number, index } = route.params;
  const number = 1;
  const index = 2;
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>GAME OVER!</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../images/success.png')}
          style={styles.image}
          resizeMode='cover'
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Your phone needed <Text style={styles.result}>{index}</Text> rounds to
          guess the number <Text style={styles.result}>{number}</Text>.
        </Text>
      </View>
      <ButtonComponent
        text={'Start New Game'}
        onPress={() => navigation.navigate('StartGameScreen')}
      />
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
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
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10%',
    marginBottom: 40,
    width: '80%',
  },
  image: {
    width: 400,
    height: 400,
    borderWidth: 2,
    borderColor: colors.black,
    borderRadius: 500,
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    padding: 20,
  },
  text: {
    fontSize: 25,
    color: colors.black,
    textAlign: 'center',
  },
  result: {
    color: colors.secondary,
  },
});
