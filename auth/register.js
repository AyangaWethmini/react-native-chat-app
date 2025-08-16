import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';


const VerifyScreen = () => {
  const navigation = useNavigation();
  const [search , setSearch] = useState('');


const [contactNumber, setContactNumber] = useState('');
const [countryCode, setCountryCode] = useState('+1'); // default country code

const countryCodes = [
    { code: '+1', label: 'US/CA' },
    { code: '+44', label: 'UK' },
    { code: '+91', label: 'IN' },
    { code: '+61', label: 'AU' },
    { code: '+81', label: 'JP' },
    { code: '+49', label: 'DE' },
    { code: '+33', label: 'FR' },
    { code: '+39', label: 'IT' },
    { code: '+34', label: 'ES' },
    { code: '+7', label: 'RU' },
    { code: '+86', label: 'CN' },
    { code: '+82', label: 'KR' },
    { code: '+55', label: 'BR' },
    { code: '+27', label: 'ZA' },
    { code: '+62', label: 'ID' },
    { code: '+234', label: 'NG' },
    { code: '+20', label: 'EG' },
    { code: '+966', label: 'SA' },
    { code: '+971', label: 'AE' },
    { code: '+63', label: 'PH' },
    { code: '+94', label: 'LK' },
    // Add more as needed
];

return (
    <View style={styles.container}>
        <Text style={styles.heading}>Register</Text>
        <TextInput
            style={styles.inputFeild}
            placeholder="Name"
            placeholderTextColor="#aaa"
            value={search}
            onChangeText={setSearch}
        />

        <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 15 }}>
            <View style={{ borderRadius: 25, backgroundColor: '#23272e', marginRight: 10 }}>
                <Picker
                    selectedValue={countryCode}
                    style={{ height: 50, width: 100, color: '#fff' }}
                    dropdownIconColor="#fff"
                    onValueChange={(itemValue) => setCountryCode(itemValue)}
                >
                    {countryCodes.map((item) => (
                        <Picker.Item key={item.code} label={`${item.label} (${item.code})`} value={item.code} />
                    ))}
                </Picker>
            </View>
            <TextInput
                style={[styles.inputFeild, { flex: 1, margin: 0 }]}
                placeholder="Contact Number"
                placeholderTextColor="#aaa"
                keyboardType="phone-pad"
                value={contactNumber}
                onChangeText={setContactNumber}
            />

            
        </View>
        <TouchableOpacity style={styles.button} onPress={() => { /* handle proceed action */ }}>
                        <Text style={{color: '#fff', fontWeight: 'bold'}}>Register</Text>
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
        marginTop: 50, 
        width: 200, 
        alignItems: 'center'
    }


});

export default VerifyScreen;