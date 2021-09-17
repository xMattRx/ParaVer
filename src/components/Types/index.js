/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text } from 'react-native'
import Colors from '../CardPokemon/Colors'

export default ({ types }) => {
    console.log('Types:' + types)
    return (
        <View style={{
            flexDirection: 'row',
            width: 310,
            justifyContent: 'space-between',
        }}>
            {types.map((type, index) => {
                return <View style={{
                    paddingVertical: 5,
                    paddingHorizontal: 50,
                    borderRadius: 30,
                    backgroundColor: Colors[type.type.name]
                }}>
                    <Text style={{ color: '#FFF', fontSize: 17, fontWeight: 'bold' }}>{type.type.name}</Text>
                </View>
            })
            }
        </View >
    )
}