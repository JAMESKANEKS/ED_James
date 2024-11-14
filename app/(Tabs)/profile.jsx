import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const ProfileScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Profile Header */}
      <View style={styles.headerContainer}>
        <Image
          style={styles.bannerImage}
          source={{ uri: 'https://img.freepik.com/premium-photo/cute-handsome-anime-boy-blue-light_675932-435.jpg' }} // Replace with a banner image URL
        />
        <View style={styles.profileInfo}>
          <Image
            style={styles.profileImage}
            source={{ uri: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg' }} // Replace with profile picture URL
          />
          <View style={styles.userInfo}>
            <Text style={styles.nameText}>Hieu</Text>
            <Text style={styles.usernameText}>@hieuSSR</Text>
            <Text style={styles.bioText}>Ship new tools and features weekly @ thegums.co</Text>
            <View style={styles.statsRow}>
              <Text style={styles.statsText}>854 Following</Text>
              <Text style={styles.statsText}>1,256 Followers</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Pinned Tweet Section */}
      <View style={styles.tweetContainer}>
        <Text style={styles.pinnedText}>Pinned Tweet</Text>
        <View style={styles.tweetCard}>
          <Text style={styles.tweetContent}>
            🔥🔥🔥 Let's play Tetris on my twitter banner! 🎮
          </Text>
          <Text style={styles.tweetInstructions}>
            👉 Reply with 🡐 🡑 🡒 🡓 or 🔄 to move or rotate!
          </Text>
        </View>
      </View>
      
      {/* Buttons */}
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  bannerImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  profileInfo: {
    flexDirection: 'row',
    marginTop: -50,
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#fff',
    borderWidth: 3,
  },
  userInfo: {
    marginLeft: 20,
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  usernameText: {
    fontSize: 16,
    color: 'gray',
  },
  bioText: {
    fontSize: 14,
    marginVertical: 5,
    color: '#333',
  },
  statsRow: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  statsText: {
    fontSize: 14,
    color: '#333',
    marginRight: 15,
  },
  tweetContainer: {
    marginVertical: 20,
  },
  pinnedText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tweetCard: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 10,
  },
  tweetContent: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  tweetInstructions: {
    fontSize: 14,
    color: '#555',
  },
  editButton: {
    backgroundColor: '#1DA1F2',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 25,
    alignSelf: 'center',
    marginTop: 20,
  },
  editButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
