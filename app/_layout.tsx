import { Ionicons } from "@expo/vector-icons";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import CustomeHeader from "@planitos/components/CustomeHeader";
import Colors from "@planitos/constants/Colors";
import { Stack, useNavigation } from "expo-router";
import { TouchableOpacity } from "react-native";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "index",
};

export default function RootLayoutNav() {
  const navigation = useNavigation();
  return (
    <BottomSheetModalProvider>
    <Stack>
      <Stack.Screen name="index" options={{
        header: () => <CustomeHeader />,
      }} />
      <Stack.Screen name="(modal)/filter" 
        options={{
          presentation: "modal",
          headerTitle: "Filter",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: Colors.lightGrey,
          },
          headerLeft: () => 
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="close-outline" size={28} color={Colors.primary} />
            </TouchableOpacity>
          ,
          
          
        }}
      />
    </Stack>
    </BottomSheetModalProvider>
  );
}
