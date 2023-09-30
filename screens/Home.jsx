import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, FontAwesome } from '@expo/vector-icons'
import { Welcome, Carousel, Heading, ProductRow } from '../components/index';
import {COLORS, SIZES} from '../constants/index'
const Home = () => {
    return (
        <SafeAreaView>
            <View style={styles.appBarWrapper}>
                <View style={styles.appBar}>
                    <Ionicons name='location-outline' size={24} />

                    <Text style={styles.location}>Ha Noi</Text>

                    <View style={{ alignItems: 'flex-end' }}>
                        <View style={styles.cartCount}>
                            <Text style={styles.cartNumber} >8</Text>
                        </View>
                        <TouchableOpacity>
                            <FontAwesome name='shopping-bag' size={24} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <ScrollView style={{marginBottom: 50}} >
                <Welcome />
                <Carousel />
                <Heading />
                <ProductRow />

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
