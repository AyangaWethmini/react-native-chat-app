import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

// Mock data for chats (replace with real data from your backend or state management)
const mockChats = [
    { id: '1', contact: 'Alice', bio: 'Loves hiking and coffee.' },
    { id: '2', contact: 'Bob', bio: 'Tech enthusiast and gamer.' },
    { id: '3', contact: 'Charlie', bio: 'Photographer & traveler.' },
    { id: '4', contact: 'Diana', bio: 'Yoga instructor.' },
    { id: '5', contact: 'Eve', bio: 'Music lover.' },
    { id: '6', contact: 'Frank', bio: 'Entrepreneur.' },
    { id: '7', contact: 'Grace', bio: 'Bookworm.' },
    { id: '8', contact: 'Hank', bio: 'Cyclist and foodie.' },
    { id: '9', contact: 'Ivy', bio: 'Designer.' },
    { id: '10', contact: 'Jack', bio: 'Movie buff.' },
    { id: '11', contact: 'Karen', bio: 'Dog lover.' },
    { id: '12', contact: 'Leo', bio: 'Fitness freak.' },
    { id: '13', contact: 'Mona', bio: 'Artist.' },
    { id: '14', contact: 'Nate', bio: 'Guitarist.' },
];

const ContactScreen = () => {
  const navigation = useNavigation();
  const [search , setSearch] = useState('');


  // Filter contacts: show all if search is empty, otherwise filter
  const filterContacts = search.trim() === ''
    ? mockChats
    : mockChats.filter(item =>
        item.contact.toLowerCase().includes(search.toLowerCase())
      );

  // Render each chat item
  const rendercontact = ({ item }) => (
    <TouchableOpacity
      style={styles.contact}
      onPress={() => navigation.navigate('ChatDetail', { contact: item.contact })}
    >
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{item.contact[0]}</Text>
      </View>
      <View style={styles.chatInfo}>
        <Text style={styles.contactName}>{item.contact}</Text>
        <Text style={styles.lastMessage} numberOfLines={1}>
          {item.bio}
        </Text>
      </View>
      
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>

        <TextInput
        style={styles.searchBar}
        placeholder="Search contacts..."
        placeholderTextColor="#aaa"
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={filterContacts}
        renderItem={rendercontact}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181A20',
    
  },
  searchBar: {
    backgroundColor: '#23272e',
    color: '#fff',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 15,
    margin: 15,
    fontSize: 16,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    padding: 15,
    color: '#333',
  },
  contact: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#222121ff',
    backgroundColor: '#181A20',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#ac274f',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  avatarText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  newChat : {
    fontSize : 40
  },
  newChatBtn : {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: '#c8416aff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  fabContainer: {
    position: 'absolute',
    bottom: 100,
    right: 30,
    zIndex: 10,
  },
  chatInfo: {
    flex: 1,
  },
  contactName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fffdfdff',
  },
  lastMessage: {
    fontSize: 14,
    color: '#d9d7d7ff',
    marginTop: 5,
  },
  unreadBadge: {
    backgroundColor: '#e53935',
    minWidth: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 6,
    marginLeft: 8,
  },
  unreadText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 12,
    color: '#d9d7d7ff',
  },
});

export default ContactScreen;