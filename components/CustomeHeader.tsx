import { Image,StyleSheet,View, Text, SafeAreaView, Touchable } from 'react-native'
import React, { useRef } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import Colors from '@planitos/constants/Colors'
import SearchBar from './SearchBar'
import BottomSheet from './BottomSheet'
import { BottomSheetModal } from '@gorhom/bottom-sheet'

const CustomeHeader = () => {
    const bottomSheetRef = useRef<BottomSheetModal>(null);
    const openModal = () => {
        bottomSheetRef.current?.present();
    }
  return (
    <SafeAreaView style={styles.safeArea}>
        <BottomSheet ref={bottomSheetRef} />
        <View style={styles.container}>
            <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={openModal}>
                <Image
                source={require('@planitos/assets/images/images.png')}
                style={styles.logoStyle}
                 />
            </TouchableOpacity>

            <TouchableOpacity style={styles.titleContainer} onPress={openModal}>
                <Text style={styles.title}>
                    Welcome Planitos
                </Text>
                <View style={styles.location}>
                    <Text style={styles.subtitle}>Sfax, Tunisie</Text>
                    <Ionicons name="chevron-down-outline" size={20} color={Colors.primary} />
                </View>
            </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.profileButton}>
                <Ionicons name="person-outline" size={20} color={Colors.primary} />
            </TouchableOpacity>
        </View>
        <SearchBar />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    safeArea:{
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 50,
    },
    container: {
        backgroundColor: '#fff',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
       justifyContent: 'space-between',
        gap: 20,
        paddingHorizontal: 20,
    },
    logoStyle:{
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    titleContainer: {
        flex: 1,  
    },
    subtitle: {
        fontSize: 12,
        color: Colors.medium,
        marginRight: 5,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        color: Colors.medium,
    },
    location: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 2,
    },
    profileButton: {
        backgroundColor: Colors.lightGrey,
        padding: 10,
        borderRadius: 50,

    }
    
})

export default CustomeHeader