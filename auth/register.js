import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';


const RegisterScreen = () => {
  const navigation = useNavigation();
  const [search , setSearch] = useState('');


  return (
    <View style={styles.container}>

        <TextInput
        style={styles.searchBar}
        placeholder="Search contacts..."
        placeholderTextColor="#aaa"
        value={search}
        onChangeText={setSearch}
      />

      
        <TextInput
        style={styles.searchBar}
        placeholder="Search contacts..."
        placeholderTextColor="#aaa"
        value={search}
        onChangeText={setSearch}
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

export default RegisterScreen;