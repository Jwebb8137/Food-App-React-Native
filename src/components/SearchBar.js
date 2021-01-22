import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { TextInput } from 'react-native-gesture-handler'

const SearchBar = ({ term, onSearchTermChange, onTermSubmit }) => {
  const [searchInput, setSearchInput] = useState("")

  return (
    <View style={styles.backgroundStyle}>
      <FontAwesome name="search" style={styles.iconStyle} />
      <TextInput 
        onChangeText={onSearchTermChange}
        onEndEditing={onTermSubmit}
        style={styles.inputStyle} 
        placeholder="Search"
        autoCapitalize="none"
        autoCorrect={false}
        value={term} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    paddingHorizontal: 5,
    marginBottom: 15,
    marginTop: 10
  },
  inputStyle: {
    flex: 1,
    fontSize: 18
  },
  iconStyle: {
    alignSelf: 'center',
    fontSize: 34,
    color: '#000',
    marginHorizontal: 15
  }
})

export default SearchBar