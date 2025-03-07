import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  text: {
    color: '#333',
    fontSize: 22, // Increased font size
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 20, // Increased font size
    color: '#555',
    marginBottom: 10,
  },
  itemContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  quantityButton: {
    backgroundColor: '#3498db', // Keeping blue theme
    padding: 8, // Slightly increased padding for better touch area
    borderRadius: 5,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18, // Slightly increased for better visibility
    fontWeight: 'bold',
  },
  quantityText: {
    fontSize: 18, 
    fontWeight: 'bold',
    color: '#333',
  },
  totalContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  navButton: {
    backgroundColor: '#3498db', // Keeping blue theme
    padding: 15,
    alignItems: 'center',
    borderRadius: 8,
    marginVertical: 20,
  },
  navButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#ccc',
    opacity: 0.5,
  },
  emptyCartText: {
    color: '#888',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 50,
  },
  // ✅ Added Modal Styles for Centered Checkout Alert
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  modalButton: {
    backgroundColor: '#3498db', // Keeping blue theme
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
    width: '50%',
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
