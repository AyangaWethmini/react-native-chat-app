import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';

// Mock message data (replace with backend data later)
const getMockMessages = (contact) => [
    { id: '1', text: `Hi ${contact}, how's it going?`, sender: 'other', time: '10:25 AM' },
    { id: '2', text: 'Hey! Doing great, thanks!', sender: 'user', time: '10:27 AM' },
    { id: '3', text: 'Want to catch up later?', sender: 'other', time: '10:30 AM' },
    { id: '4', text: 'Sure, what time were you thinking?', sender: 'user', time: '10:31 AM' },
    { id: '5', text: 'Maybe around 6 PM?', sender: 'other', time: '10:32 AM' },
    { id: '6', text: 'Sounds good! Where should we meet?', sender: 'user', time: '10:33 AM' },
    { id: '7', text: 'How about the new cafe downtown?', sender: 'other', time: '10:34 AM' },
    { id: '8', text: 'Perfect, I’ve been wanting to try it.', sender: 'user', time: '10:35 AM' },
    { id: '9', text: 'Awesome! See you there.', sender: 'other', time: '10:36 AM' },
    { id: '10', text: 'See you!', sender: 'user', time: '10:37 AM' },
    { id: '11', text: 'By the way, do you want me to bring anything?', sender: 'user', time: '10:38 AM' },
    { id: '12', text: 'No need, just bring yourself!', sender: 'other', time: '10:39 AM' },
    { id: '13', text: 'Haha, will do!', sender: 'user', time: '10:40 AM' },
];

import { useNavigation } from '@react-navigation/native';

const ChatDetailScreen = ({ route }) => {
  const { contact } = route.params;
  const navigation = useNavigation();

  useLayoutEffect(() => {
    //added the contact name and the avatar on the header
    navigation.setOptions({
      headerTitle: () => (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{
            width: 36,
            height: 36,
            borderRadius: 18,
            backgroundColor: '#ac274f',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 10,
          }}>
            <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>{contact[0]}</Text>
          </View>
          <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>{contact}</Text>
        </View>
      ),
    });
  }, [navigation, contact]);
  const [messages, setMessages] = useState(getMockMessages(contact));
  const [newMessage, setNewMessage] = useState('');
  const flatListRef = useRef(null);

  // Scroll to the latest message when messages update
  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  }, [messages]);

  // Handle sending a new message
  const sendMessage = () => {
    if (newMessage.trim() === '') return;
    const newMsg = {
      id: (messages.length + 1).toString(),
      text: newMessage,
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages([...messages, newMsg]);
    setNewMessage('');
  };

  // Render each message
  const renderMessage = ({ item }) => (
    <View
      style={[
        styles.messageContainer,
        item.sender === 'user' ? styles.userMessage : styles.otherMessage,
      ]}
    >
      <Text style={styles.messageText}>{item.text}</Text>
      <Text style={styles.messageTime}>{item.time}</Text>
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
    >
      <FlatList
        ref={flatListRef}
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.messageList}
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={newMessage}
          onChangeText={setNewMessage}
          placeholder="Type a message..."
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#181A20',
    },
    messageList: {
        padding: 16,
        paddingBottom: 0,
    },
    messageContainer: {
        maxWidth: '75%',
        padding: 10,
        borderRadius: 24,
        marginVertical: 6,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
        elevation: 2,
    },
    userMessage: {
        backgroundColor: '#ac274f',
        alignSelf: 'flex-end',
        borderBottomRightRadius: 6,
    },
    otherMessage: {
        backgroundColor: '#23262F',
        alignSelf: 'flex-start',
        borderBottomLeftRadius: 6,
        borderWidth: 0,
    },
    messageText: {
        fontSize: 16,
        color: '#fff',
        lineHeight: 22,
        letterSpacing: 0.1,
    },
    messageTime: {
        fontSize: 12,
        color: '#A1A1AA',
        marginTop: 6,
        alignSelf: 'flex-end',
    },
    inputContainer: {
        flexDirection: 'row',
        padding: 14,
        backgroundColor: '#181A20',
        borderTopWidth: 1,
        borderTopColor: '#23262F',
        alignItems: 'flex-end',
        marginBottom: 50
    },
    input: {
        flex: 1,
        backgroundColor: '#23262F',
        borderRadius: 22,
        fontSize: 16,
        color: '#fff',
        paddingHorizontal: 18,
        paddingVertical: 12,
        marginRight: 10,
    },
    sendButton: {
        backgroundColor: '#ac274f',
        borderRadius: 22,
        paddingVertical: 12,
        paddingHorizontal: 18,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#ac274f',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.18,
        shadowRadius: 4,
        elevation: 2,
    },
    sendButtonText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: '600',
        letterSpacing: 0.2,
    },
});

export default ChatDetailScreen;
