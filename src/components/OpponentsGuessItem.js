import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../utils/colors';

function OpponentsGuessItem({ index, guess }) {
  return (
    <View style={styles.container}>
      <Text style={styles.itemText}>#{index}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
    </View>
  );
}

export default OpponentsGuessItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 8,
    padding: 12,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: colors.primary800,
    backgroundColor: colors.accent500,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  itemText: {
    fontFamily: 'open-sans',
  },
});
