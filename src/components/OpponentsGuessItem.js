import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../utils/colors';

function OpponentsGuessItem({ index, guess }) {
  return (
    <View style={styles.container}>
      <Text>#{index}</Text>
      <Text>Opponent's Guess: {guess}</Text>
    </View>
  );
}

export default OpponentsGuessItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 20,
    padding: 10,
    borderRadius: 30,
    borderWidth: 2,
    backgroundColor: colors.primary,
  },
});
