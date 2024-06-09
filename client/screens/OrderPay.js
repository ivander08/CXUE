import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { drinks } from '../screens/DrinkSelection'; // Sesuaikan path jika diperlukan

// Dapatkan dimensi layar
const { width } = Dimensions.get('window');

const OrderPay = ({ route, navigation }) => {
  const { cart, selectedSeats } = route.params;

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
      <View style={styles.seatsContainer}>
        <Text style={styles.seatsHeaderText}>Selected Seats:</Text>
        {selectedSeats && selectedSeats.length > 0 ? (
          <Text style={styles.seatsText}>{selectedSeats.join(', ')}</Text>
        ) : (
          <Text style={styles.seatsText}>No seats selected</Text>
        )}
      </View>
      <Text style={styles.headerText}>Order Summary</Text>
      {renderCartSummary()}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total Price: Rp {totalPrice.toLocaleString('id-ID')}</Text>
      </View>

      {/* Tombol Verify Payment */}
      <TouchableOpacity
        style={styles.orderSummaryContainer}
        onPress={() => navigation.navigate('DrinkSelection', { cart })}
      >
        <Text style={styles.orderSummaryHead}>Verify Payment</Text>
      </TouchableOpacity>
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
  seatsContainer: {
    marginTop: 20,
  },
  seatsHeaderText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  seatsText: {
    color: '#fff',
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
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  orderSummaryHead: {
    color: '#fefefe',
    fontSize: 16,
    fontWeight: '900',
  },
  orderSummaryContent: {
    color: '#fefefe',
    textAlign: 'center',
    opacity: 0.8,
    fontSize: 10.75,
    marginTop: 3.5,
  },
});

export default OrderPay;
