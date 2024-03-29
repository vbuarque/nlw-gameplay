import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

import { getStatusBarHeight } from "react-native-iphone-x-helper"

export const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    header: {
        width: '100%',
        padding: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: getStatusBarHeight() + 26,
        marginBottom: 42,
    }
})
