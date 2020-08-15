import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, ImageBackground, Button, View } from 'react-native';


export default HomeScreen = (props) => {
    const [blueVenta, setBlueVenta] = useState("")
    const [blueCompra, setBlueCompra] = useState("")
    const [ofVenta, setOfVenta] = useState("")
    const [ofCompra, setOfCompra] = useState("")

    useEffect(()=> {
        getPrice()
    }, [])

    const getPrice = () => {
        fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
            .then(res => res.json())
            .then(res => {
                setBlueVenta("$ " + res[1].casa.venta.slice(0,6))
                setBlueCompra("$ " + res[1].casa.compra.slice(0,6))
                setOfVenta("$ " + res[0].casa.venta.slice(0,5))
                setOfCompra("$ " + res[0].casa.compra.slice(0,5))
            })
    }



    let imagePath = require("../assets/bsas.jpg");

    return(
            <ImageBackground source={imagePath} style={styles.bg}>
                <View style={styles.view}>
                <Text style={styles.text}>Dolar Oficial Venta:</Text>
                <Text style={styles.text}>{ofVenta}</Text>
                <Text style={styles.text}>Dolar Oficial Compra:</Text>
                <Text style={styles.text}>{ofCompra}</Text>
                <Text style={styles.text}>Dolar Blue Venta:</Text>
                <Text style={styles.text}>{blueVenta}</Text>
                <Text style={styles.text}>Dolar Blue Compra:</Text>
                <Text style={styles.text}>{blueCompra}</Text>
                <Button title="Actualizar" onPress={getPrice}></Button>
                </View>
            </ImageBackground>
        
    )
}

const styles = StyleSheet.create({
   
    bg: {
        flex: 1,
        resizeMode:"cover",
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 28,
        color:"white",
        paddingBottom: 10,
        textAlign: "center"
    },
    view: {
        backgroundColor: "hsl(227, 75%, 62%)",
        padding: 20,
        width: "100%",
    
    }
})