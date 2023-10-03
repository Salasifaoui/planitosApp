import { categories } from "@planitos/assets/data/filter";
import React, { useState } from "react";
import {
  Button,
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ItemBox from "./ItemBox";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Colors from "@planitos/constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";

interface Category {
  name: string;
  count: number;
  checked?: boolean;
}
export interface FilterListProps {
    items: Category[];
    setItems: (items: Category[]) => void;
    }

export default function FilterList({ items, setItems }: FilterListProps) {

  const renderItem: ListRenderItem<Category> = ({ item, index }) => (
    <View style={styles.row}>
      <Text style={styles.itemText}>
        {item.name} ({item.count})
      </Text>
      <BouncyCheckbox
        isChecked={items[index].checked}
        fillColor={Colors.primary}
        unfillColor="#FFFFFF"
        disableBuiltInState
        onPress={() => {
          const isChecked = !items[index].checked;
          const updateItems = items.map((item) => {
            if (item.name === items[index].name) {
              return { ...item, checked: isChecked };
            }
            return item;
          });
          setItems(updateItems);
        }}
        iconStyle={{
          borderColor: Colors.primary,
          borderRadius: 4,
          borderWidth: 2,
        }}
        innerIconStyle={{ borderColor: Colors.primary, borderRadius: 4 }}
      />
    </View>
  );
  return (
  

      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={<ItemBox />}
        showsHorizontalScrollIndicator
      />

  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "white",
  },
  itemText: {
    flex: 1,
    fontSize: 16,
  },
  
  itemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  buttonStyle: {
    backgroundColor: Colors.primary,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  }
});
