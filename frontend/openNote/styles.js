import {
    StyleSheet,
  } from 'react-native';
  export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 20,
    },
    centeredContent: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    instructions: {
      fontSize: 16,
      textAlign: 'center',
      marginBottom: 20,
    },
    button: {
      backgroundColor: '#007bff',
      padding: 10,
      borderRadius: 5,
      alignSelf: 'center', // Align button in the center of its container
      marginBottom: 10,
    },
    buttonText: {
      color: '#ffffff',
      fontSize: 18,
    },
    notesContainer: {
      flex: 1,
      width: '100%',
    },
    note: {
      backgroundColor: '#f0f0f0',
      padding: 10,
      borderRadius: 5,
      marginBottom: 10,
    },
    deleteButton: {
      marginTop: 10,
      backgroundColor: '#ff6347',
      padding: 5,
      borderRadius: 5,
      alignSelf: 'flex-end', // Position the delete button to the right
    },
    deleteButtonText: {
      color: '#ffffff',
      fontSize: 16,
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    modalTextInput: {
      marginBottom: 15,
      textAlign: "left", // Adjusted for multiline input
      textAlignVertical: "top", // Ensures text starts from the top
      width: 250, // Increased width
      height: 100, // Increased height to accommodate multiple lines
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      padding: 10, // Add padding inside the text input for better text alignment
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
    },
  });