import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Map from '../components/Map'
import { createStackNavigator } from '@react-navigation/stack'
import NavigateCard from '../components/NavigateCard'
import RideOptionsCard from '../components/RideOptionsCard'
import { TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import { useNavigation } from '@react-navigation/native'

const MapScreen = () => {
  const Stack = createStackNavigator()
  const navigation = useNavigation()

  return (
    <View>
      <TouchableOpacity 
      onPress={() => navigation.navigate("HomeScreen")}
      className="absolute top-5 left-5 bg-gray-100 z-50 p-3 rounded-full shadow-lg"
      >
            <Icon 
                        name="menu"
                        type="fontawesome"
                    />
      </TouchableOpacity>
      <View className="h-1/2">
        <Map/>
      </View>

      <View className="h-1/2">
        <Stack.Navigator>
        <Stack.Screen
              name="NavigateCard"
              component={NavigateCard}
              options={{
                headerShown: false,
              }}
            />
             <Stack.Screen
              name="RideOptionsCard"
              component={RideOptionsCard}
              options={{
                headerShown: false,
              }}
            />
        </Stack.Navigator>
      </View>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})