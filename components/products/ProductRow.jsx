import React from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { COLORS, SIZES } from '../../constants/index'
import ProductCartView from './ProductCartView';
const ProductRow = ({data, isLoading, error}) => {
   
   return (
      <View style={styles.container}>
         {isLoading ? (
            <ActivityIndicator size={SIZES.large} color={COLORS.primary}/>
         ) : error ? (
            <Text>Something went wrong!!</Text>
         ) : (
            <FlatList
               data={data}
               renderItem={({ item }) => <ProductCartView product={item}/>}
               horizontal
               contentContainerStyle={{
                  columnGap: SIZES.medium
               }}
            />
         )}
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      marginTop: SIZES.medium,
      marginHorizontal: SIZES.small,
   },

})

export default ProductRow;
