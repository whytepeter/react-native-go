import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

export default function Categories() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
    >
      <CategoryCard title="Testing1" imgUrl="https://links.papareact.com/gn7" />
      <CategoryCard title="Testing2" imgUrl="https://links.papareact.com/gn7" />
      <CategoryCard title="Testing3" imgUrl="https://links.papareact.com/gn7" />
      <CategoryCard title="Testing3" imgUrl="https://links.papareact.com/gn7" />
      <CategoryCard title="Testing3" imgUrl="https://links.papareact.com/gn7" />
    </ScrollView>
  );
}
