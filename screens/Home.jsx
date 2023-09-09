import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Ionicons, FontAwesome } from '@expo/vector-icons'

import styles from './home.style';
import { Welcome } from '../components/index';
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

                <Welcome />
            </View>

        </SafeAreaView>
    );
}


export default Home;
