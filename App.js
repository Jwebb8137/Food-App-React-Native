import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import SearchScreen from './src/screens/SearchScreen'
import RestaurantsShowScreen from './src/screens/RestaurantsShowScreen'

const navigator = createStackNavigator({
  Search: SearchScreen,
  RestaurantsShow: RestaurantsShowScreen
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Find Me Food',
    headerStyle: {
      backgroundColor: '#d33e43',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
})

export default createAppContainer(navigator)
