import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import {GOOGLE_MAPS_APIKEY} from '@env'
import { useDispatch } from 'react-redux'
import { setDestination } from '../slices/navSlice'
import { useNavigation } from '@react-navigation/native'
import NavFavourites from './NavFavourites'
import { TouchableOpacity } from 'react-native-gesture-handler'

import Icon from 'react-native-vector-icons/Ionicons';

const NavigateCard = () => {

    const dispatch = useDispatch()
    const navigation = useNavigation()

  return (
    <SafeAreaView className="bg-white flex-1">
      <Text className="text-center py-5 text-xl">Good Morning, Tonny</Text>
      <View className="border-t border-gray-200 flex-shrink">
        <View>
            <GooglePlacesAutocomplete
                placeholder='Where to?'
                styles={toInputBoxStyles}
                fetchDetails={true}
                returnKeyType={"search"}
                minLength={2}
                onPress={(data, details = null) => {
                    dispatch(setDestination({
                        location: details.geometry.location,
                        description: data.description,
                    }))

                    navigation.navigate('RideOptionsCard')
                }}
                enablePoweredByContainer={false}
                query={{
                    key: GOOGLE_MAPS_APIKEY,
                    language: "en"
                }}
                nearbyPlacesAPI='GooglePlacesSearch'
                debounce={400}
            />
        </View>
        <NavFavourites/>
      </View>
      <View className="flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100">
        <TouchableOpacity 
        onPress={() => navigation.navigate("RideOptionsCard")}
        className="flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full">
            <Icon name="car" type="font-awesome" color="white" size={16}/>
            <Text className="text-white text-center">Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex flex-row w-24 px-4 py-3 rounded-full">
            <Icon name="fast-food-outline" type="iconicon" color="black" size={16}/>
            <Text className="text-white text-center">Rides</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
    container:{
        backgroundColor: "white",
        paddingTop: 20,
        flex: 0
    },
    textInput:{
        backgroundColor:"#DDDDDF",
        borderRadius: 0,
        fontSize: 18
    },
    textInputContainer:{
        paddingHorizontal: 20,
        paddingBottom: 0
    }
})