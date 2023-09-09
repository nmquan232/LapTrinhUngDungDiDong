import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/index";

const styles = StyleSheet.create({
   container: {
      width: "100%"
   },
   welcomeTxt: (color, top) => ({
      fontFamily: 'bold',
      fontSize: SIZES.xsLarge,
      marginTop: top,
      color: color,
      marginHorizontal: SIZES.small
   })
})

export default styles