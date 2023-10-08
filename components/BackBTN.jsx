
import {  StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { COLORS, SIZES } from '../constants';
import { useNavigation } from '@react-navigation/native';
const BackBTN = ({onPress}) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={onPress} style={styles.backbtn} >
            <Ionicons name='chevron-back-circle' size={30} style={{ color: COLORS.primary }} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    backbtn: {
        alignItems: 'center',
        position: 'absolute',
        top: SIZES.large - 10,
        zIndex: 999,
    }
})

export default BackBTN;
