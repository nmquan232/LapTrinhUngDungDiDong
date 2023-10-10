import React from 'react';
import { View, StyleSheet, Text , SafeAreaView} from 'react-native';
import { BackBTN } from '../components';
const Cart = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <BackBTN onPress={()=> navigation.goBack()} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20
    },
    
})

export default Cart;
