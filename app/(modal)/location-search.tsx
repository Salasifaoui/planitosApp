import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import MapView from 'react-native-maps'
import Colors from '@planitos/constants/Colors';
import { useNavigation } from 'expo-router';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import { Ionicons } from '@expo/vector-icons';

export default function LocationSearch() {
    const navigation = useNavigation();
    const [location, setLocation] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922, // Zoom level
        longitudeDelta: 0.0421,
      });

  return (
    <View style={styles.container}>
        <View style={styles.search}>
        <GooglePlacesAutocomplete
            fetchDetails={true}
            placeholder='Search'
            onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                const point = details?.geometry?.location;
                console.log(data, details);
                if(!point) return;
                setLocation({
                    ...location,
                    latitude: point.lat,
                    longitude: point.lng,
                })
            }}
            query={{
                key: process.env.EXPO_PUBLIC_GOOGLE_API_KEY,
                language: 'en',
            }}
            />
            </View>
      <MapView
      showsUserLocation={true}
        style={styles.map}
        region={location}
        />
        <View style={styles.absoluteBox}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Confirm</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex : 1
    },
    map:{
        flex : 1
    },
    absoluteBox:{
        position: 'absolute',
        bottom: 20,
        width: '100%',
    },
    button:{
        backgroundColor: Colors.primary,
        padding: 15,
        borderRadius: 10,
        margin: 10,
        alignItems: 'center',
    },
    buttonText:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    search:{
        position: 'absolute',
        top: 20,
        width: '100%',
        padding: 10,
        zIndex: 1,
    }
})