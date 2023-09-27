import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';


interface IMyProps {
    title: String;
    color?: string;
  }

const MyButtton = (params: IMyProps) => {
    return (
      <TouchableOpacity style={styles.button}>
        <Text style={styles.label}>{params.title}</Text>
      </TouchableOpacity>
    );
  };

  export default MyButtton;

  const styles = StyleSheet.create({
    button: {
        height: 45,
        backgroundColor: 'black',
        width: 130,
        alignItems: 'center',
        justifyContent: 'center',
      },
      label: {
        color: 'red',
      }
  });