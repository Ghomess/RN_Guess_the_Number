import { StyleSheet, Text } from 'react-native';
import { colors } from '../utils/colors';

function TitleComponent({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default TitleComponent;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: colors.white,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: colors.white,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20%',
    marginBottom: 40,
  },
});
