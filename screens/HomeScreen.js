import { Image, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-virtualized-view'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import {GOOGLE_MAPS_APIKEY} from '@env'
import { useDispatch } from 'react-redux'
import { setDestination, setOrigin } from '../slices/navSlice'
import NavFavourites from '../components/NavFavourites'

const HomeScreen = () => {

    const dispatch = useDispatch()



  return (
    <SafeAreaView className="bg-white h-full"> 
      <View className="p-5">
        <Image source={require('../assets/images/uberLogo.png')}
            style={{
                width:100, height: 100, resizeMode: 'contain'
            }}
        />
        <ScrollView keyboardShouldPersistTaps="handled">
        <GooglePlacesAutocomplete 
          placeholder='Where From?'
          style={{
            container:{
              flex: 0
            },
            textInput:{
              fontSize: 18,
            },
          }}
          onPress={(data, details = null) => 
           { 
            dispatch(setOrigin({
              location: details.geometry.location,
              description: data.description,
            }))
            console.log(data.description)
            dispatch(setDestination(null))
          }}
          fetchDetails={true}
          returnKeyType={"search"}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language:'en'
          }}
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
        />
        </ScrollView>
      <NavOptions/>
      <NavFavourites setOrigin={setOrigin} setDestination={setDestination}/>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})