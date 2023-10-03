import { Ionicons } from "@expo/vector-icons";
import { BottomSheetBackdrop, BottomSheetModal, TouchableOpacity, useBottomSheet, useBottomSheetModal } from "@gorhom/bottom-sheet";
import Colors from "@planitos/constants/Colors";
import { Link } from "expo-router";
import React, { forwardRef, useCallback, useMemo } from "react";
import { Button, StyleSheet, Text, Touchable, View } from "react-native";

export type Ref = BottomSheetModal;

export const BottomSheet = forwardRef<Ref>((props, ref) => {
  const snapPoint = useMemo(() => ["50%"], []);
  const renderBackdrop = useCallback(
    (props) => <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props}  />,
    []
  ); 
  const {dismiss} = useBottomSheetModal()
  return (
    <BottomSheetModal
    handleIndicatorStyle={{display: 'none'}}
    backgroundStyle={{borderRadius: 0,backgroundColor: Colors.lightGrey}}
      overDragResistanceFactor={0}
      ref={ref}
      snapPoints={snapPoint}
      backgroundComponent={renderBackdrop}
    >
      <View style={styles.contentContainer}>
        <View style={styles.toggle}>
            <TouchableOpacity style={styles.toggleActive}>
                <Text style={styles.activeText}>Map</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.toggleInactive}>
                <Text style={styles.disactiveText}>List</Text>
                </TouchableOpacity>
        </View>
        <Text style={styles.subheader}>Your Location</Text>
        <Link href="/(modal)/location-search" asChild>
        <TouchableOpacity  onPress={() => dismiss()}>
            <View style={styles.item}>
                <Ionicons style={{paddingHorizontal: 5}} name="location-outline" size={20} color={Colors.medium} />
                <Text style={{flex: 1}}>Use current location</Text>
                <Ionicons name="chevron-forward-outline" size={20} color={Colors.primary} />
            </View>
        </TouchableOpacity>
        </Link>
        <Text style={styles.subheader}>Arrival Time</Text>
        <TouchableOpacity  onPress={() => {}}>
            <View style={styles.item}>
                <Ionicons style={{paddingHorizontal: 5}} name="stopwatch-outline" size={20} color={Colors.medium} />
                <Text style={{flex: 1}}>Now</Text>
                <Ionicons name="chevron-forward-outline" size={20} color={Colors.primary} />
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => dismiss()}>
        <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </BottomSheetModal>
  );
});

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
        padding: 16,
        borderRadius: 4,
        margin: 16,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    contentContainer: {
        flex: 1
    },
    toggle:{
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
        marginBottom: 10,
    },
    toggleActive: {
        backgroundColor: Colors.primary,
        padding: 8,
        borderRadius: 32,
        paddingHorizontal: 30,
    },
    activeText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    toggleInactive: {
        //backgroundColor: Colors.primary,
        padding: 8,
        borderRadius: 32,
        paddingHorizontal: 30,},
    disactiveText: {
        color: Colors.primary,
        fontWeight: 'bold',
    },
    subheader: {
        fontSize: 16,
        color: Colors.medium,
        fontWeight: 'bold',
        margin: 16,
        
    },
    item: {
        flexDirection: 'row',
        grap:8,
        alignItems: 'center',
        backgroundColor: Colors.lightGrey,
        padding: 16,
        borderColor: Colors.grey,
        borderWidth: 1,
        
    }
    
    
});

export default BottomSheet;
