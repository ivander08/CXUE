// OrderPay.js
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { drinks } from './DrinkSelection'; // Adjust the path if necessary

// Get the screen dimensions
const { width } = Dimensions.get('window');

const OrderPay = ({ route }) => {
  const { cart } = route.params;

  const calculateTotalPrice = () => {
    return Object.entries(cart).reduce((total, [id, count]) => {
      const drink = drinks.find((item) => item.id === id);
      if (drink) {
        const price = parseInt(drink.price.replace('Rp ', '').replace(',', ''), 10);
        return total + price * count;
      }
      return total;
    }, 0);
  };

  const renderCartSummary = () => {
    return Object.entries(cart).map(([id, count]) => {
      const drink = drinks.find((item) => item.id === id);
      if (drink) {
        return (
          <View key={id} style={styles.cartItem}>
            <Text style={styles.cartItemText}>{count}x {drink.name}</Text>
            <Text style={styles.cartItemText}>Rp {(parseInt(drink.price.replace('Rp ', '').replace(',', ''), 10) * count).toLocaleString('id-ID')}</Text>
          </View>
        );
      }
      return null;
    });
  };

  const totalPrice = calculateTotalPrice();

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Order Summary</Text>
      {renderCartSummary()}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total Price: Rp {totalPrice.toLocaleString('id-ID')}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D160B',
    paddingTop: 85,
    paddingHorizontal: 20,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  cartItemText: {
    color: '#fff',
    fontSize: 16,
  },
  totalContainer: {
    borderTopWidth: 1,
    borderTopColor: '#fff',
    paddingTop: 10,
    marginTop: 10,
  },
  totalText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OrderPay;
