import { StyleSheet } from "react-native";
import {COLORS, SIZES} from '../constants/index'

const styles = StyleSheet.create({
    textStyle: {
        fontFamily: 'bold',
        fontSize: 40
    },
    appBarWrapper: {
        marginHorizontal: 22,
        marginTop: SIZES.small, //small = 12

    },
    appBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    location: {
        fontFamily: 'semiBold',
        fontSize: SIZES.medium,
        color: COLORS.gray
    },
    cartCount: {
        position: 'absolute',
        width: 16,
        height: 16,
        bottom: 16,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',

        zIndex: 999
    },
    cartNumber: {
        fontFamily: 'regular',
        fontWeight: 600,
        fontSize: 10,
        color: COLORS.lightWhite
    }
})

export default styles
