import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';

export default function Fuel(){
    const navigation=useNavigation()
return(   
        <View style={styles.container}>
            <View style={styles.navigater}>
                <Button onPress={()=>navigation.goBack()}>Go back</Button>
            </View>     
            <View style={styles.mapcontain}>
                <MapView style={styles.map}>
                    <Marker>
                        
                    </Marker>
                    
                </MapView>
            </View>    
        </View>
)}

const styles=StyleSheet.create({
    container:{
        flex:1
    },
    map:{
        width:'100%',
        height:'100%'
    }

})