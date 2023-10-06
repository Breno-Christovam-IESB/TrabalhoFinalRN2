import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";


const DescriptionSession = () => {
    return (
        <Text style={styles.text}>Aproveite nossas mercadorias promocionais e economize até 70%! Não perca esta excelente oportunidade!</Text>
    );
};

export default DescriptionSession;

const styles = StyleSheet.create({
    text:{
        fontFamily: 'Anton_400Regular',
        fontSize: 26,
        marginHorizontal: '5%',
        color: 'white'
    },
});