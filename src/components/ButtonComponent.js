import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../utils/colors';

function ButtonComponent({ onPress, text }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: colors.buttonColor }}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    </View>
  );
}

export default ButtonComponent;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: colors.buttonColor,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
    //ios elevation
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 6,
    shadowOpacity: 0.25,
  },

  text: {
    fontSize: 16,
    color: colors.white,
    alignSelf: 'center',
  },

  pressed: {
    opacity: 0.75,
  },
});
