import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import useRestaurants from '../hooks/useRestaurants'
import RestaurantsList from '../components/RestaurantsList'

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [searchApi, restaurants, errorMessage] = useRestaurants()
  
  const filterRestaurantsByPrice = (price) => {
    return restaurants.filter(restaurants => {
      return restaurants.price === price
    })
  }

  return (
    <>
      <SearchBar 
        term={term} 
        onSearchTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}  
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <RestaurantsList 
          restaurants={filterRestaurantsByPrice('$')} 
          title="Cheap"
        />
        <RestaurantsList 
          restaurants={filterRestaurantsByPrice('$$')} 
          title="First Date" 
        />
        <RestaurantsList 
          restaurants={filterRestaurantsByPrice('$$$')} 
          title="Anniversary" 
        />
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  
})

export default SearchScreen