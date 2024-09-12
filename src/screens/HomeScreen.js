import React from "react"; 
import {View, Text, Button, StyleSheet, Dimensions} from "react-native"; 

const windowWidth = Dimensions.get('window').width; 

export default function HomeScreen({ navigation }){
    return(
        <View style = {styles.container}>
            <Text style={styles.title}>Home Screen</Text>
            <View style={styles.buttonContainer}>
                <Button
                title="Go to Details"
                onPress={()=> navigation.navigate('Details')}
                />

                <View style={styles.buttonContainer}>
                <Button
                title="Go to profile"
                onPress={()=>Navigation.navigate('Profile')}
                />
                </View>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center', 
        alignItems:'center', 
        backgroundColor: 'f0f8ff', //Cor de fundo da tela
    },
    title:{
        fontSize: 24, 
        marginBottom:20,
    }, 
    buttonContainer:{
        backgroundColor: 'add8e6',
        margin: 10, 
        width: windowWidth * 0.5, 
        borderRadius: 5, 
    }
}); 