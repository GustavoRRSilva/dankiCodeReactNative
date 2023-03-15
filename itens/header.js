import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
export const Header = () => {
  return (
    <View>
      <Text style={styles.text}>Esse é o Headers</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 30,
  },
});
export default Header;
