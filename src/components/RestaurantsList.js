import React from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import RestaurantsDetail from './RestaurantsDetail'

const RestaurantsList = ({ title, restaurants, navigation }) => {
  if (!restaurants.length) {
    return null
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={restaurants}
        keyExtractor={(restaurant) => restaurant.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity 
              onPress={() => navigation.navigate('RestaurantsShow', { id: item.id })}
            >
              <RestaurantsDetail 
                restaurants={item}
              />
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5
  },
  container: {
    marginBottom: 10
  }
})

export default withNavigation(RestaurantsList)