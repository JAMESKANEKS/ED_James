import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';

const TetrisHome = () => {
  // Function to display an alert with info
  const showInfo = (title, message) => {
    Alert.alert(title, message, [{ text: 'OK', onPress: () => console.log('OK Pressed') }], { cancelable: true });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome to JamesTetris</Text>
        <Text style={styles.subHeaderText}>Enjoy the classic Tetris experience!</Text>
      </View>

      {/* Main content (Game and options) */}
      <ScrollView contentContainerStyle={styles.content}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => showInfo('Start Game', 'Get ready to play Tetris! Clear rows to score points.')}
        >
          <Text style={styles.cardTitle}>Start Game</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => showInfo('High Scores', 'View your top scores and beat your personal best.')}
        >
          <Text style={styles.cardTitle}>High Scores</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => showInfo('Settings', 'Adjust game settings such as difficulty, sound, and controls.')}
        >
          <Text style={styles.cardTitle}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => showInfo('Instructions', 'Learn how to play the game and master Tetris!')}
        >
          <Text style={styles.cardTitle}>Instructions</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navigation (Example) */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => showInfo('Home', 'You are already on the Home page.')}>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => showInfo('Start', 'Click here to start a new Tetris game.')}>
          <Text style={styles.navText}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => showInfo('Scores', 'View all your scores and achievements.')}>
          <Text style={styles.navText}>Scores</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Black background for a Tetris theme
  },
  header: {
    backgroundColor: '#00f', // Tetris-inspired blue
    padding: 20,
  },
  headerText: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subHeaderText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#333', // Darker cards
    padding: 20,
    borderRadius: 10,
    width: '90%',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 6,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff', // White text for contrast
    textAlign: 'center',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#444', // Dark bottom navigation
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#555', // Slightly lighter border
  },
  navText: {
    fontSize: 16,
    color: '#00f', // Blue text for navigation
  },
});

export default TetrisHome;
