import { useEffect, useState } from 'react';
import { Alert, FlatList, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ButtonComponent from '../components/ButtonComponent';
import { colors } from '../utils/colors';
import OpponentsGuessItem from '../components/OpponentsGuessItem';
import TitleComponent from '../components/TitleComponent';
import NumberContainer from '../components/NumberContainer';
import CardComponent from '../components/CardComponent';
import InstructionText from '../components/InstructionText';

function generateRandomNumberBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomNumberBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}
let minBoundary = 1;
let maxBoundary = 100;
function GameScreen({ route, navigation }) {
  const initialGuess = generateRandomNumberBetween(1, 100, route.params.number);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  const [guesses, setGuesses] = useState([
    {
      id: 1,
      number: currentGuess,
    },
  ]);

  let userNumber = parseInt(route.params.number);

  const checkWinningNumber = () => {
    if (currentGuess === userNumber) {
      navigation.navigate('GameOverScreen', {
        userNumber: userNumber,
        numberOfRounds: guesses.length,
      });
    }
  };

  useEffect(() => {
    checkWinningNumber();
  }, [currentGuess, userNumber, navigation]);

  const nextGuessHandler = (direction) => {
    // direction => 'lower' or 'higher'

    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert('Dont lie!', 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ]);
      return;
    }
    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomNumberBetween(
      minBoundary,
      maxBoundary,
      currentGuess,
    );
    setCurrentGuess(newRndNumber);
    setGuesses((prevGuesses) => [
      ...prevGuesses,
      {
        number: newRndNumber,
        id: prevGuesses.length + 1,
      },
    ]);
  };
  return (
    <View style={styles.container}>
      <TitleComponent>Opponent's Guess</TitleComponent>

      <NumberContainer>{currentGuess}</NumberContainer>
      <CardComponent>
        <InstructionText style={styles.instructionText}>
          Higher or lower ?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <ButtonComponent onPress={() => nextGuessHandler('lower')}>
              <Ionicons
                name='remove'
                size={24}
                color='white'
              />
            </ButtonComponent>
          </View>
          <View style={styles.buttonContainer}>
            <ButtonComponent onPress={() => nextGuessHandler('greater')}>
              <Ionicons
                name='add'
                size={24}
                color='white'
              />
            </ButtonComponent>
          </View>
        </View>
      </CardComponent>
      <View style={styles.listContainer}>
        <FlatList
          data={guesses}
          renderItem={({ item, index }) => (
            <OpponentsGuessItem
              index={index + 1}
              guess={item.number}
            />
          )}
        />
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },

  instructionText: {
    marginBottom: 12,
  },
  purpleContainer: {
    backgroundColor: colors.secondary,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title2Container: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    marginBottom: 20,
  },
  title2: {
    fontSize: 25,
    color: colors.accent500,
  },
  buttonsContainer: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
