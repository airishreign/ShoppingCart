import React from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, Image } from 'react-native';
import { useCart } from '../context/CartContext';
import styles from '../css/styles';

const CartScreen: React.FC<any> = ({ navigation }) => {
  const { cart, updateQuantity } = useCart();
  const isCartEmpty = cart.length === 0;

  return (
    <View style={styles.container}>
      {isCartEmpty ? (
        <Text style={styles.emptyCartText}>Your cart is empty.</Text>
      ) : (
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Image source={{ uri: item.image }} style={styles.productImage} />
              <View style={styles.productDetails}>
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.price}>₱{item.price * item.quantity} ({item.quantity})</Text>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity onPress={() => updateQuantity(item.id, -1)} style={styles.quantityButton}>
                    <Text style={styles.buttonText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantityText}>{item.quantity}</Text>
                  <TouchableOpacity onPress={() => updateQuantity(item.id, 1)} style={styles.quantityButton}>
                    <Text style={styles.buttonText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
      )}

      <TouchableOpacity
        style={[styles.navButton, isCartEmpty && styles.disabledButton]}
        onPress={() => navigation.navigate('Checkout')}
        disabled={isCartEmpty}
      >
        <Text style={styles.navButtonText}>Go to Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartScreen;
