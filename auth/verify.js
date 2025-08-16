import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';


const VerifyScreen = () => {
  const navigation = useNavigation();
  const [search , setSearch] = useState('');


const [contactNumber, setContactNumber] = useState('');

return (
    <View style={styles.container}>
        <Text style={styles.heading}>Enter Code</Text>
        <TextInput
            style={styles.inputFeild}
            placeholder="code"
            placeholderTextColor="#aaa"
            value={search}
            onChangeText={setSearch}
        />
<TouchableOpacity style={styles.button} onPress={() => { /* handle proceed action */ }}>
            <Text style={{color: '#fff', fontWeight: 'bold'}}>Proceed</Text>
        </TouchableOpacity>
        
    </View>
);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#181A20',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputFeild: {
        backgroundColor: '#23272e',
        color: '#fff',
        borderRadius: 25,
        paddingHorizontal: 20,
        paddingVertical: 15,
        margin: 15,
        fontSize: 16,
        width : 350
    },
    heading : {
        color: "#fff",
        fontWeight : 200,
        fontSize: 32,

    },
    button : {
        backgroundColor: '#ac274f', 
        padding: 15, 
        borderRadius: 25, 
        marginTop: 10, 
        width: 200, 
        alignItems: 'center'}

});

export default VerifyScreen;