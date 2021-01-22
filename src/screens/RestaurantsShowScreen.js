import React, { useState, useEffect } from 'react'
import { View, Dimensions, TouchableOpacity, Text, StyleSheet, FlatList, Image, ScrollView,Linking } from 'react-native'
import * as Font from "expo-font"
import { useFonts } from "@use-expo/font"
import { FontAwesome } from '@expo/vector-icons'
import { AppLoading } from "expo"
import yelp from '../api/yelp'

const RestaurantsShowScreen = ({ navigation }) => {
  const [restaurant, setRestaurant] = useState(null)
  const id = navigation.getParam('id')

  const getRestaurant = async id => {
    const response = await yelp.get(`/${id}`)
    setRestaurant(response.data)
    console.log(response.data)
  }

  const customFonts = {
    BalsamiqSans: require("../../assets/fonts/BalsamiqSans-Regular.ttf"),
  }

  const [isLoaded] = useFonts(customFonts)

  useEffect(() => {
    getRestaurant(id)
  }, [])

  if (!isLoaded) {
    return <AppLoading />
  }

  if (!restaurant) {
    return null
  }

  const { address1, city, zip_code, state } = restaurant.location

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{restaurant.name}</Text>
      <ScrollView>
        <FlatList
          horizontal 
          data={restaurant.photos}
          keyExtractor={(photo) => photo}
          showsHorizontalScrollIndicator={false}
          style={styles.list}
          renderItem={({ item }) => {
            return <Image style={styles.image} source={{ uri: item }} />
          }}
        />
      </ScrollView>
      <TouchableOpacity style={styles.link}
        onPress={() => Linking.openURL(`${restaurant.url}`)}>
        <Text style={styles.linkText}>See More Details</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{address1}</Text>
      <Text style={styles.text}>{city}, {state}</Text>
      <Text style={styles.text}>{zip_code}</Text>
    </View>
  )
}

const ScreenHeight = Dimensions.get("window").height

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#ffc3bb',
    paddingBottom: 50
  },
  image: {
    borderRadius: 5,
    height: 200,
    marginHorizontal: 10,
    marginVertical: 10,
    width: 300
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    marginBottom: 10,
    marginTop: 15,
    paddingHorizontal: 10,
    fontFamily:'BalsamiqSans'
  },
  link: {
    backgroundColor: '#fff',
    borderRadius: 3,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginVertical: 10
  },
  linkText: {
    fontSize: 18
  },
  text: {
    fontFamily:'BalsamiqSans'
  },
  list: {
    display: 'flex'
  }
})

export default RestaurantsShowScreen