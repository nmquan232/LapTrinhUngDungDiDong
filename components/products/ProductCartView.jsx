import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from '../../constants';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
const ProductCartView = (props) => {
   const navigation = useNavigation()
   return (
      <TouchableOpacity onPress={() => { navigation.navigate('ProductDetails', {id: props.product._id})} }>
         <View style={styles.container}>
            <View style={styles.imageContainer}>
               <Image
                  style={styles.image}
                  source={{uri: props.product.imageUrl}}
               />
            </View>

            <View style={styles.details}>
               <Text style={styles.title} numberOfLines={1}>{props.product.title}</Text>
               <Text style={styles.suplier}>{props.product.supplier}</Text>
               <Text style={styles.price} numberOfLines={1}>$ {props.product.price}</Text>
            </View>
            <TouchableOpacity style={styles.addBtn}>
               <Ionicons name="add-circle" size={35} color={COLORS.primary} />
            </TouchableOpacity>
         </View>

      </TouchableOpacity>
   );
}

const styles = StyleSheet.create({
   container: {
      width: 182,
      height: 240,
      borderRadius: SIZES.medium,
      marginEnd: 22,
      backgroundColor: COLORS.secondary
   },
   imageContainer: {
      flex: 1,
      width: 170,
      marginLeft: SIZES.small / 2,
      marginTop: SIZES.small / 2,
      borderRadius: SIZES.small,
      overflow: 'hidden'
   },
   image: {
      // aspectRatio: 1,
      resizeMode: 'cover',
      width: '100%',
      height: '100%'
   },
   details: {
      padding: SIZES.small,

   },
   title: {
      fontFamily: 'bold',
      fontSize: SIZES.large,
      marginBottom: 2
   },
   suplier: {
      fontFamily: 'regular',
      fontSize: SIZES.small,
      color: COLORS.gray,
   },
   price: {
      fontFamily: 'bold',
      fontSize: SIZES.medium,
      marginBottom: 2
   },
   addBtn: {
      position: 'absolute',
      right: SIZES.small,
      bottom: SIZES.medium
   }
})

export default ProductCartView;
