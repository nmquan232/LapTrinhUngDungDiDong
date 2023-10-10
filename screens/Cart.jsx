import { useState, useEffect, useContext } from 'react';
import { View, StyleSheet, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from '../constants';
import { BackBTN } from '../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { CartItem } from '../components';
import { Context } from '../store';
const Cart = ({ navigation }) => {
    const [state, dispatch] = useContext(Context)
    const [cartData, setCartData] = useState(null)
    useEffect(() => {
        getCart()
    }, [])
    
    const getCart = async () => {
        const userId = await AsyncStorage.getItem('id')
        if (userId !== null) {

            try {
                const res = await axios.get(`https://furniture-app-ottf.onrender.com/cart/find/${userId}`)
                if (res.status === 200) {
                    setCartData(res.data.products)
                    dispatch({
                        type: 'COUNT_CART',
                        count: res.data.products.length
                    })
                }
            } catch (error) {
                console.log(error);
            }
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <BackBTN onPress={() => navigation.goBack()} />
            <Text style={styles.title}>Cart</Text>
            <FlatList
                data={cartData}
                renderItem={({ item }) => (<CartItem item={item} />)}
                keyExtractor={(item) => item._id}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
            <View style={styles.cartInfo} >
                <Text style={styles.orderInfo} >Order Info</Text>
                <View style={styles.subTotal}>
                    <Text style={styles.text}>Subtotal</Text>
                    <Text style={styles.text}>Price</Text>
                </View>
                <View style={styles.subTotal}>
                    <Text style={styles.text}>Total</Text>
                    <Text style={styles.text}>Price</Text>
                </View>
                <TouchableOpacity style={styles.cartInfoBTN} onPress={() => navigation.navigate('Checkout')} >
                    <Text style={styles.BTNtext}>CHECK OUT</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: SIZES.xxLarge + 20,
        paddingLeft: SIZES.small / 2,
        marginHorizontal: 20,
        marginTop: 10
    },
    separator: {
        height: 16
    },
    title: {
        position: 'absolute',
        top: SIZES.large,
        left: SIZES.xxLarge,
        fontFamily: 'bold',
        fontSize: SIZES.large,
        color: COLORS.primary
    },
    cartInfo: {
        marginVertical: 20
    },
    orderInfo: {
        fontFamily: 'bold',
        fontSize: SIZES.large
    },
    subTotal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: SIZES.medium,

    },
    text: {
        fontSize: 14,
        fontFamily: 'regular',
        color: COLORS.gray
    },
    cartInfoBTN: {
        marginTop: SIZES.medium,
        alignItems: 'center',
        backgroundColor: COLORS.primary,
        paddingVertical: SIZES.small,
        borderRadius: SIZES.large

    },
    BTNtext: {
        color: COLORS.lightWhite
    }

})

export default Cart;
