import React from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { useCart } from '../context/CartContext';
import styles from '../css/styles';

const HomeScreen: React.FC<any> = ({ navigation }) => {
  const { cart, addToCart } = useCart();
  const isCartEmpty = cart.length === 0;

  return (
    <View style={styles.container}>
      <FlatList
        data={[
          { id: '1', name: 'BINI Anik Anik', price: 699},
          { id: '2', name: 'BINI Photocard Holder', price: 799},
          { id: '3', name: 'BINI Cap', price: 799 },
          { id: '4', name: 'BINI Photocard Album', price: 999},
          { id: '5', name: 'BINI Blink Twice Shirt', price: 1399 },
          { id: '6', name: 'BINI Beanie', price: 1799 },
          { id: '7', name: 'BINIverse Mini Album', price: 1999 },
          { id: '8', name: 'BINI Hoodie', price: 2199},
          { id: '9', name: 'BINI Wand', price: 3000 },
          
        ]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.text}>{item.name} - ₱{item.price}</Text>
            <Button title="Add to Cart" onPress={() => addToCart(item)} />
          </View>
        )}
      />

      {/* "Go to Cart" Button - Visible only when cart has items */}
      {!isCartEmpty && (
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('Cart')}
        >
          <Text style={styles.navButtonText}>Go to Cart</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default HomeScreen;
