import { StyleSheet } from "react-native";
import { styles_global } from "@app/services/_styles_global";

const styles = StyleSheet.create({
    ...styles_global,
    inputRow:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:"2%"
    }
})

export { styles }