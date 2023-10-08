import React from 'react';
import { View, StyleSheet, Text , SafeAreaView} from 'react-native';
import { BackArrow } from '../components';
const Cart = () => {
    return (
        <SafeAreaView style={styles.container}>
            <BackArrow />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    
})

export default Cart;
