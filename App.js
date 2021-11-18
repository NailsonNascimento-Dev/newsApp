import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Image } from 'react-native';
import { ListItem } from 'react-native-elements';


let users = []

export default function App() {



  const [noticias, setNoticias] = useState([]);

  //utilizado para travar o loop infinito
  //resolve problemas de efeito
  useEffect(() => {

    fetch('https://newsapi.org/v2/top-headlines?country=br&apiKey=e50a62607b22420eac75f35ccc595bcc', {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }

    })
      .then(response => response.json())
      .then(data => {

        //console.log(data)
        setNoticias(data.articles)
      })

  }, []);

  return (
    <SafeAreaView >
      <FlatList
        data={noticias}
        keyExtractor={(noticias) => noticias.title}
        renderItem={NoticiasShow}

      />
    </SafeAreaView>

  )


}

function NoticiasShow(item) {
  const { author, title, urlToImage, source } = item.item

  return (
    <View style={styles.container}>
      <View style={styles.containerNoticias} >
        <Image style={styles.imagem} source={{ uri: urlToImage }} />
        <Text>{author}</Text>
        <Text>{title}</Text>
        <Text>{source.name}</Text>
      </View>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },

  containerNoticias: {

    backgroundColor: 'orange',
    height: 150,
    width: 500,
    margin: 10,
    color: 'white',
    justifyContent: 'center',
    alignItems:'center',

  },

  imagem:{

    padding: 0,
    marginLeft: -250,
    width: 100,
    height: 100,
    
  }


});
