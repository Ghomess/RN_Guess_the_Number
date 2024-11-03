import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../utils/colors';

function ButtonComponent({ onPress, children }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: colors.primary600 }}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }>
        <Text style={styles.text}> {children}</Text>
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
    backgroundColor: colors.primary500,
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
