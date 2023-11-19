import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Icon } from 'react-native-elements'

const data= [
    {
        id: "123",
        icon: "home",
        location: "Home",
        destination: "31-422, Cracow, PL",
    },
    {
        id: "456",
        icon: "briefcase",
        location: "Work",
        destination: "30-555, Cracow, PL"
    },
]

const NavFavourites = () => {

  return (
    <FlatList
        data={data} 
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => (
            <View
                className="bg-gray-200"  
                style={{height:0.5}}
            />
        )}
        renderItem={
            ({item:{ location, destination, icon}}) => (
                <TouchableOpacity className="flex-row items-center p-5"
                >
                    <Icon
                     className="mr-4 rounded-full bg-gray-300 p-3" 
                     name={icon}
                     type="ionicon"
                     color="white"
                     size={18}  
                    />
                    <View>
                        <Text className="font-semibold text-lg">{location}</Text>
                        <Text className="text-gray-500">{destination}</Text>
                    </View>
                </TouchableOpacity>
            ) 
        }
    />
  )
}

export default NavFavourites

const styles = StyleSheet.create({})