import { StyleSheet, TextInput } from 'react-native';
import { colors } from '../utils/colors';

function TextInputComponent({ value, onChangeText }) {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      style={styles.input}
      textAlign='center'
      keyboardType='number-pad'
      maxLength={2}
    />
  );
}
export default TextInputComponent;

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: 50,
    fontSize: 32,
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderColor: colors.accent500,
    color: colors.accent500,
    marginVertical: 8,
    textAlign: 'center',
  },
});
