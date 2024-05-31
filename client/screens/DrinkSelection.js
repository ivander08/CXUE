import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

// Get the screen dimensions
const { width } = Dimensions.get('window');
const imageWidth = width * 0.325;  // 32.5% of screen width
const imageHeight = imageWidth * 1.25;  // Maintain aspect ratio

const drinks = [
  { id: '1', name: 'Fresh-Squeezed Lemonade', price: 'Rp 10,000', image: require('../assets/images/lemonade.png') },
  { id: '2', name: 'Original Jasmine Tea', price: 'Rp 10,000', image: require('../assets/images/jasmine_tea.png') },
  { id: '3', name: 'Mango Smoothie', price: 'Rp 16,000', image: require('../assets/images/mango_smoothie.png') },
  { id: '4', name: 'Bubble Milk Tea', price: 'Rp 18,000', image: require('../assets/images/bubble_milk_tea.png') },
  { id: '5', name: 'Bubble Milk Tea', price: 'Rp 18,000', image: require('../assets/images/bubble_milk_tea.png') },
  { id: '6', name: 'Bubble Milk Tea', price: 'Rp 18,000', image: require('../assets/images/bubble_milk_tea.png') },
  { id: '7', name: 'Bubble Milk Tea', price: 'Rp 18,000', image: require('../assets/images/bubble_milk_tea.png') },
];

const DrinkItem = ({ item, addToCart }) => (
  <View style={styles.itemContainer}>
    <Image source={item.image} style={styles.image} />
    <View style={styles.textContainer}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
      <TouchableOpacity style={styles.button} onPress={() => addToCart(item)}>
        <Text style={styles.buttonText}>+ Add to Cart</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const DrinkList = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const renderCartSummary = () => {
    const itemCounts = cart.reduce((acc, item) => {
      acc[item.name] = (acc[item.name] || 0) + 1;
      return acc;
    }, {});

    const summaryText = Object.entries(itemCounts)
      .map(([name, count]) => (count > 1 ? `${count}x ${name}` : name))
      .join(' | ');

    return summaryText;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={drinks}
        renderItem={({ item }) => <DrinkItem item={item} addToCart={addToCart} />}
        keyExtractor={(item) => item.id}
      />
      {cart.length > 0 && (
        <View style={styles.orderSummaryContainer}>
          <Text style={styles.orderSummaryHead}>Order Summary</Text>
          <Text style={styles.orderSummaryContent}>{renderCartSummary()}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
    paddingTop: 90,
  },
  itemContainer: {
    flexDirection: 'row',
    paddingVertical: 25,
    marginHorizontal: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  image: {  
    width: imageWidth,
    height: imageHeight,
    marginRight: 15,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 14.5,
    textAlign: 'justify',
    color: 'grey',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF1F1F',
    marginVertical: 5,
  },
  button: {
    marginTop: 10,
    paddingVertical: 7,
    paddingHorizontal: 22,
    backgroundColor: '#FF1F1F',
    borderRadius: 50,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fefefe',
    fontWeight: 'bold',
    fontSize: 16,
  },
  orderSummaryContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: 7,
    backgroundColor: '#FF1F1F',
    marginVertical: 20,
    marginHorizontal: 20,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  orderSummaryHead: {
    color: '#fefefe',
    fontSize: 16,
    fontWeight: '900'
  },
  orderSummaryContent: {
    color: '#fefefe',
    textAlign: 'center',
    opacity: 0.8,
    fontSize: 10.75,
    marginTop: 3.5
  },
});

export default DrinkList;
