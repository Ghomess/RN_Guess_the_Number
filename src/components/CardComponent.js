import { StyleSheet, View } from 'react-native';
import { colors } from '../utils/colors';

function CardComponent({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default CardComponent;

const styles = StyleSheet.create({
  card: {
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
});
