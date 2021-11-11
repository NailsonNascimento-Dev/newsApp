import { StatusBar} from 'expo-status-bar';
import React, {useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import api from './src/services/api';

export default function App() {

  const [noticias, setNoticias] = React.useState([]);

  //utilizado para travar o loop infinito
  //resolve problemas de efeito
  React.useEffect( () =>{
    //console.warn('erros');
    api.get("https://newsapi.org/v2/top-headlines?country=br&apiKey=e50a62607b22420eac75f35ccc595bcc").then((response) => {
      console.log(response.data);
      setNoticias(response.data);
      console.log(noticias.status)
    });

  }, []);

  return (
    <View style={styles.container}>

      

     
     
      <Text>teste</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
