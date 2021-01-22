import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

const RestaurantsDetail = ({ restaurants }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: restaurants.image_url }} />
      <Text style={styles.name}>{restaurants.name}</Text>
      <Text>{restaurants.rating} Stars, {restaurants.review_count} Reviews</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  image: {
    borderRadius: 5,
    height: 120,
    marginBottom: 5,
    width: 250
  },
  name: {
    fontWeight: 'bold'
  }
})

export default RestaurantsDetail