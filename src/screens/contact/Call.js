import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";

const DATA = [
  {
    id: 1,
    title: "Story 1",
    url: "https://picsum.photos/200/300/?image=10",
  },
  {
    id: 2,
    title: "Story 2",
    url: "https://picsum.photos/200/300/?image=20",
  },
  {
    id: 3,
    title: "Story 3",
    url: "https://picsum.photos/200/300/?image=30",
  },
  {
    id: 4,
    title: "Story 4",
    url: "https://picsum.photos/200/300/?image=40",
  },
  {
    id: 5,
    title: "Story 5",
    url: "https://picsum.photos/200/300/?image=50",
  },
  {
    id: 6,
    title: "Story 6",
    url: "https://picsum.photos/200/300/?image=60",
  },
  {
    id: 7,
    title: "Story 7",
    url: "https://picsum.photos/200/300/?image=70",
  },
  {
    id: 8,
    title: "Story 8",
    url: "https://picsum.photos/200/300/?image=80",
  },
  {
    id: 9,
    title: "Story 9",
    url: "https://picsum.photos/200/300/?image=90",
  },
];

const DATA2 = [
  {
    id: "1",
    title: "First Item",
  },
  {
    id: "2",
    title: "Second Item",
  },
  {
    id: "3",
    title: "Third Item",
  },
  {
    id: "4",
    title: "First Item",
  },
  {
    id: "5",
    title: "Second Item",
  },
  {
    id: "6",
    title: "Third Item",
  },
];

const Item = ({ title, url }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.url}>{url}</Text>
  </View>
);

export default function Call() {
  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  url: {
    fontSize: 20,
  },
});
