import { useEffect, useState, useContext } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, FontAwesome } from '@expo/vector-icons'
import { Welcome, Carousel, Heading, ProductRow } from '../components/index';
import { COLORS, SIZES } from '../constants/index'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Context } from '../store';
import useFetch from '../hook/useFetch';
import axios from 'axios';
const Home = ({ navigation }) => {
    const { data, isLoading, error, reFetch } = useFetch('https://furniture-app-ottf.onrender.com/products')

    const [state, dispatch] = useContext(Context)
    const [userData, setUserData] = useState(null)
    const [userLogin, setUserLogin] = useState(false)
    const [count, setCount] = useState(0)
    useEffect(() => {
        checkExistingUser()
    }, [])
    useEffect(() => {
        dispatch({
            type: 'FETCH_API_PRODUCTS',
            products: data
        })
    }, [data])
    useEffect(()=> {
        countCart()
    })
    
    const checkExistingUser = async () => {
        const id = await AsyncStorage.getItem('id')
        const userId = `user${id}`

        try {
            const currentUser = await AsyncStorage.getItem(userId)

            if (currentUser !== null) {
                const parseData = JSON.parse(currentUser)
                setUserData(parseData)
                setUserLogin(true)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const countCart = async () => {
        const userId = await AsyncStorage.getItem('id')
        if (userId !== null) {

            try {
                const res = await axios.get(`https://furniture-app-ottf.onrender.com/cart/find/${userId}`)
                if (res.status === 200) {
                    setCount(res.data.products.length)
                }
            } catch (error) {
                console.log(error);
            }
        }
    }
    
    return (
        <SafeAreaView>
            <View style={styles.appBarWrapper}>
                <View style={styles.appBar}>
                    <Ionicons name='location-outline' size={24} />

                    <Text style={styles.location}> {userData ? userData.location : 'Ha Noi'} </Text>

                    <View style={{ alignItems: 'flex-end' }}>
                        <View style={styles.cartCount}>
                            <Text style={styles.cartNumber}> {count !== 0 && count} </Text>
                        </View>
                        <TouchableOpacity onPress={() => {
                            if (userLogin) {
                                navigation.navigate('Cart')
                            } else {
                                navigation.navigate('Profile')
                            }
                        }}>
                            <FontAwesome name='shopping-bag' size={24} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <ScrollView style={{ marginBottom: 50 }} >
                <Welcome />
                <Carousel />
                <Heading />
                <ProductRow data={data} isLoading={isLoading} error={error} />
                <View style={{ marginBottom: 30 }}></View>
            </ScrollView>


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontFamily: 'bold',
        fontSize: 40
    },
    appBarWrapper: {
        marginHorizontal: 22,
        marginVertical: SIZES.small,

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
export default Home;
