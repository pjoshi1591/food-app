import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather style={styles.iconStyle} name="search" />
            <TextInput 
                style={styles.inputStyle}
                placeholder="Search"
                autoCapitalize="none"
                autoCorrect={false}
                value={term}
                onChangeText={ onTermChange} 
                onEndEditing={onTermSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#e9e9e9',
        height: 50,
        borderRadius: 5,
        margin: 15,
        flexDirection: "row"
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal: 10
    }
});

export default SearchBar;