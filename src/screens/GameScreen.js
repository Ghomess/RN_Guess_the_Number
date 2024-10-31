import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import { colors } from '../utils/colors';
import OpponentsGuessItem from '../components/OpponentsGuessItem';

function GameScreen({ route, navigation }) {
  const [number, setNumber] = useState(Math.floor(Math.random() * 10 ** 2));

  const [guesses, setGuesses] = useState([
    {
      id: 1,
      number: number,
    },
  ]);

  let winningNumber = route.params.number;

  console.log('Number: ' + number, 'Winning Number: ' + winningNumber);
  const checkWinningNumber = () => {
    if (number === winningNumber) {
      navigation.navigate('GameOverScreen');
    }
  };

  useEffect(() => {
    checkWinningNumber(number);
  });

  const handleLower = () => {
    if (number > winningNumber) {
      let newNumber;
      do {
        newNumber = Math.floor(Math.random() * (number - 1) + 1);
      } while (guesses.some((guess) => guess.number === newNumber));

      setNumber(newNumber);
      setGuesses([
        ...guesses,
        { index: guesses.length + 1, number: newNumber },
      ]);
    } else {
      alert('Too higher, try again');
    }
  };

  const handleHigher = () => {
    if (number < winningNumber) {
      setNumber(
        Math.floor(
          Math.random() * (10 ** guesses.length - guesses) + guesses + 1,
        ),
      );
      setGuesses(...guesses, { index: guesses.length + 1, number: number });
    } else {
      alert('Too High, try again');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Opponent's Guess</Text>
      </View>
      <View style={styles.numberContainer}>
        <Text style={styles.number}>{number}</Text>
      </View>
      <View style={styles.purpleContainer}>
        <View style={styles.title2Container}>
          <Text style={styles.title2}>Higher or Lower?</Text>
        </View>
        <View style={styles.buttonContainer}>
          <ButtonComponent
            onPress={handleLower}
            text={'-'}
          />
          <ButtonComponent
            onPress={handleHigher}
            text={'+'}
          />
        </View>
      </View>
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
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    alignItems: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20%',
    marginBottom: 40,
    paddingVertical: 10,
    width: '90%',
    borderWidth: 2,
    borderColor: colors.white,
    borderRadius: 5,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.white,
  },
  numberContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    padding: 20,
    borderWidth: 2,
    borderColor: colors.primary,
    marginBottom: 40,
    borderRadius: 5,
  },
  number: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.primary,
  },

  purpleContainer: {
    backgroundColor: colors.secondary,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: '80%',
  },
  title2Container: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    marginBottom: 20,
  },
  title2: {
    fontSize: 25,
    color: colors.primary,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    flexDirection: 'row',
  },
});
