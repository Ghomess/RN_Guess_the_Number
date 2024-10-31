import { useState } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import TextInputComponent from '../components/TextInputComponent';
import { colors } from '../utils/colors';

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
  };
  const handleReset = () => {
    setNumber('');
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Guess the Number</Text>
      </View>
      <View style={styles.purpleContainer}>
        <Text style={styles.text}>Enter a Number</Text>
        <TextInputComponent
          value={number}
          onChangeText={setNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <ButtonComponent
              onPress={handleReset}
              text={'Reset'}
            />
          </View>
          <View style={styles.buttonContainer}>
            <ButtonComponent
              onPress={handleConfirm}
              text={'Confirm'}
            />
          </View>
        </View>
      </View>
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
    backgroundColor: colors.secondary,
    borderRadius: 8,
    elevation: 4,
    //ios elevation
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 6,
    shadowOpacity: 0.25,
  },
  text: {
    marginTop: 10,
    fontSize: 20,
    color: colors.primary,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});
