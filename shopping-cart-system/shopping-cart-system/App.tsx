import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useCart } from './src/context/CartContext';
import CartProvider from './src/context/CartContext';
import HomeScreen from './src/screens/HomeScreen';
import CartScreen from './src/screens/CartScreen';
import CheckoutScreen from './src/screens/CheckoutScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const { cart } = useCart();
  const isCartEmpty = cart.length === 0;

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
        }}
      />
      {!isCartEmpty && (
        <>
          <Tab.Screen
            name="Cart"
            component={CartScreen}
            options={{
              tabBarIcon: ({ color, size }) => <Ionicons name="cart" size={size} color={color} />,
            }}
          />
          <Tab.Screen
            name="Checkout"
            component={CheckoutScreen}
            options={{
              tabBarIcon: ({ color, size }) => <Ionicons name="checkmark-done" size={size} color={color} />,
            }}
          />
        </>
      )}
    </Tab.Navigator>
  );
};

const App: React.FC = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </CartProvider>
  );
};

export default App;
