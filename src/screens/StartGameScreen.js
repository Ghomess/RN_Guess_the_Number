import { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import TextInputComponent from '../components/TextInputComponent';
import { colors } from '../utils/colors';
import CardComponent from '../components/CardComponent';
import InstructionText from '../components/InstructionText';
import TitleComponent from '../components/TitleComponent';

function StartGameScreen({ navigation }) {
  const [number, setNumber] = useState('');

  const handleConfirm = () => {
    console.log(number);
    const chosenNumber = parseInt(number);
    console.log(chosenNumber);
    isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99
      ? Alert.alert(
          'Invalid Number',
          'Number has to be a number between 1 and 99',
          [
            {
              text: 'Okay',
              style: 'destructive',
              onPress: handleReset,
            },
          ],
        )
      : navigation.navigate('GameScreen', { number });

    handleReset();
  };
  const handleReset = () => {
    setNumber('');
  };
  return (
    <View style={styles.container}>
      <TitleComponent>Guess the Number</TitleComponent>
      <CardComponent>
        <InstructionText>Enter a Number</InstructionText>
        <TextInputComponent
          value={number}
          onChangeText={setNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <ButtonComponent onPress={handleReset}>Reset</ButtonComponent>
          </View>
          <View style={styles.buttonContainer}>
            <ButtonComponent onPress={handleConfirm}>Confirm</ButtonComponent>
          </View>
        </View>
      </CardComponent>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20%',
    marginBottom: 40,
    padding: 10,
    borderWidth: 2,
    borderColor: colors.white,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.white,
  },
  purpleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: colors.primary800,
    borderRadius: 8,
    elevation: 4,
    //ios elevation
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 6,
    shadowOpacity: 0.25,
  },
  instructionText: {
    color: colors.accent500,
    fontSize: 24,
  },
  text: {
    marginTop: 10,
    fontSize: 20,
    color: colors.accent500,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});
