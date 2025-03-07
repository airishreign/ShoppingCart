import React, { useState } from 'react';
import { View, Text, FlatList, Modal, TouchableOpacity } from 'react-native';
import { useCart } from '../context/CartContext';
import styles from '../css/styles';

const CheckoutScreen: React.FC<any> = ({ navigation }) => {
  const { cart, clearCart } = useCart();
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const [modalVisible, setModalVisible] = useState(false);

  const handleCheckout = () => {
    setModalVisible(true);
  };

  const confirmCheckout = () => {
    setModalVisible(false);
    clearCart();
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.text}>{item.name} - ₱{item.price * item.quantity} ({item.quantity})</Text>
        )}
      />
      <Text style={styles.text}>Total: ₱{totalPrice}</Text>
      <TouchableOpacity style={styles.navButton} onPress={handleCheckout}>
        <Text style={styles.navButtonText}>Checkout</Text>
      </TouchableOpacity>

      {/* Custom Modal */}
      <Modal transparent={true} visible={modalVisible} animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Checkout successful</Text>
            <Text style={styles.modalText}>Thank you for purchasing!</Text>
            <TouchableOpacity style={styles.modalButton} onPress={confirmCheckout}>
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CheckoutScreen;
