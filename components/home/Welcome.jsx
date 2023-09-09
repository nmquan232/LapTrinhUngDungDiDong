import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './welcome.style';
import { COLORS, SIZES } from '../../constants/index'
import { SearchInput} from '../index'

const Welcome = () => {
   return (
      <View>
         <View style={styles.container}>
            <Text style={styles.welcomeTxt(COLORS.black, SIZES.xSmall)}>Find The Most</Text>
            <Text style={styles.welcomeTxt(COLORS.primary, 0)}>Luxurious Furniture</Text>
         </View>

         <SearchInput />
      </View>
   );
}


export default Welcome;
