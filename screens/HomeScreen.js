import { SafeAreaView, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { Header, Categories } from "../components/index";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white">
      <Header />

      <ScrollView className="bg-gray-100 ">
        <Categories />
        <FeaturedRow
          id="123"
          title="Featured"
          description="Paid placements from our partners"
        />
        <FeaturedRow
          id="1234"
          title="Tasty Discounts"
          description="Paid placements from our partners"
        />
        <FeaturedRow
          id="12345"
          title="Offers near you!"
          description="Paid placements from our partners"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
