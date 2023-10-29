import { View, Text, SafeAreaView, Image, TextInput } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white">
      {/* Header */}
      <View className=" flex-row gap-3 items-center px-4 pb-3">
        <Image
          className="w-7 h-7 bg-gray-300 p-4 rounded-full "
          source={{ uri: "https://links.papareact.com/wru" }}
        />
        <View className="flex-1">
          <Text className="font-medium text-gray-400 text-xs">
            Delivery Now
          </Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>

        <UserIcon size={30} color="#00CCBB" />
      </View>

      {/* Search */}
      <View className="flex-row items-center gap-2 px-4 pb-3">
        <View className="flex-1 items-center flex-row gap-2 bg-gray-100 p-1 pb-3 rounded-lg">
          <MagnifyingGlassIcon size={20} />
          <TextInput
            placeholder="Restaurants and cusines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon size={20} color="#00CCBB" />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
