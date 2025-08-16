import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Mock data for chats (replace with real data from your backend or state management)
const mockChats = [
  { id: '1', contact: 'Alice', lastMessage: 'Hey, how are you?', time: '10:30 AM', unread: 2 },
  { id: '2', contact: 'Bob', lastMessage: 'See you tomorrow!', time: 'Yesterday', unread: 0 },
  { id: '3', contact: 'Charlie', lastMessage: 'Can we meet later?', time: 'Monday', unread: 1 },
  { id: '4', contact: 'Diana', lastMessage: 'Thanks for the update!', time: 'Sunday', unread: 0 },
  { id: '5', contact: 'Eve', lastMessage: 'Let me know when you arrive.', time: '9:15 AM', unread: 3 },
  { id: '6', contact: 'Frank', lastMessage: 'Got the documents.', time: '8:45 AM', unread: 0 },
  { id: '7', contact: 'Grace', lastMessage: 'Happy Birthday!', time: 'Yesterday', unread: 0 },
  { id: '8', contact: 'Hank', lastMessage: 'Call me when you\'re free.', time: 'Saturday', unread: 1 },
  { id: '9', contact: 'Ivy', lastMessage: 'Meeting at 3 PM.', time: 'Friday', unread: 0 },
  { id: '10', contact: 'Jack', lastMessage: 'Congrats on your promotion!', time: 'Thursday', unread: 0 },
  { id: '11', contact: 'Karen', lastMessage: 'Can you send the file?', time: 'Wednesday', unread: 0 },
  { id: '12', contact: 'Leo', lastMessage: 'See you at the gym.', time: 'Tuesday', unread: 0 },
  { id: '13', contact: 'Mona', lastMessage: 'Lunch tomorrow?', time: 'Monday', unread: 0 },
  { id: '14', contact: 'Nate', lastMessage: 'Good night!', time: 'Sunday', unread: 0 },
];

const HomeScreen = () => {
  const navigation = useNavigation();

  // Render each chat item
  const renderChatItem = ({ item }) => (
    <TouchableOpacity
      style={styles.chatItem}
      onPress={() => navigation.navigate('ChatDetail', { contact: item.contact })}
    >
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{item.contact[0]}</Text>
      </View>
      <View style={styles.chatInfo}>
        <Text style={styles.contactName}>{item.contact}</Text>
        <Text style={styles.lastMessage} numberOfLines={1}>
          {item.lastMessage}
        </Text>
      </View>
      <Text style={styles.time}>{item.time}</Text>
      {item.unread > 0 && (
        <View style={styles.unreadBadge}>
          <Text style={styles.unreadText}>{item.unread}</Text>
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={mockChats}
        renderItem={renderChatItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />


      <View style={styles.fabContainer}>
        <View style={styles.newChatBtn}>
          <Text style={styles.newChat}>+</Text>
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#030303',
    
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    padding: 15,
    color: '#333',
  },
  chatItem: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#222121ff',
    backgroundColor: '#030303',
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

export default HomeScreen;