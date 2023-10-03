import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import Colors from '@planitos/constants/Colors'

export default function ItemBox() {
  return (
    <>
    <View style={styles.containerBox}>
      <TouchableOpacity style={styles.item}>
        <Ionicons
          name="arrow-down-outline"
          size={20}
          color={Colors.medium}
        />
        <Text style={{ flex: 1 }}>Sort</Text>
        <Ionicons
          name="chevron-forward-outline"
          size={22}
          color={Colors.primary}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Ionicons
          name="fast-food-outline"
          size={20}
          color={Colors.medium}
        />
        <Text style={{ flex: 1 }}>Hygienne rating</Text>
        <Ionicons
          name="chevron-forward-outline"
          size={22}
          color={Colors.primary}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Ionicons
          name="pricetag-outline"
          size={20}
          color={Colors.medium}
        />
        <Text style={{ flex: 1 }}>Offert</Text>
        <Ionicons
          name="chevron-forward-outline"
          size={22}
          color={Colors.primary}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.itemlast}>
        <Ionicons
          name="nutrition-outline"
          size={20}
          color={Colors.medium}
        />
        <Text style={{ flex: 1 }}>Dietary</Text>
        <Ionicons
          name="chevron-forward-outline"
          size={22}
          color={Colors.primary}
        />
      </TouchableOpacity>
    </View>
    <Text style={styles.itemBoxText}>Categories</Text>
  </>
  )
}

const styles = StyleSheet.create({
    containerBox: {
        backgroundColor: "white",
        padding: 8,
        borderRadius: 8,
        marginBottom: 16,
      },
      
      item: {
        flexDirection: "row",
        gap: 20,
        alignItems: "center",
        backgroundColor: "white",
        paddingVertical: 10,
        borderColor: Colors.grey,
        borderBottomWidth: 1,
      },
      itemlast: {
        flexDirection: "row",
        gap: 20,
        alignItems: "center",
        backgroundColor: "white",
        paddingVertical: 10,
      },
      itemBoxText: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 16,
      },
})