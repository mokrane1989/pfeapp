import { StyleSheet, SafeAreaView, Text,TextInput, View, Button, Pressable } from 'react-native'
import React from 'react'

const Details = ({ navigation, route }) => {


    const [id] = React.useState(route.params.item.user_id);
    const [adresse, onChangeAddresse] = React.useState(route.params.item.Adresse);
    const [nomPos, onChangeNompos] = React.useState(route.params.item.Nom_POS);
    const [telephone, onChangeTelephone] = React.useState(route.params.item.telephone);
    const [prob, onChangeProbleme] = React.useState(null);
  
    const onPressButton =()=> {
        console.log(id ,adresse , nomPos , telephone , prob) ;
    }
  return (
    <SafeAreaView>
        <Text style={styles.titleText}>{route.params.item.Nom_POS}</Text>
    <TextInput
      style={styles.input}
      onChangeText={onChangeAddresse}
      value={adresse}
    />
    <TextInput
      style={styles.input}
      onChangeText={onChangeNompos}
      value={nomPos}
    />
   
    <TextInput
      style={styles.input}
      onChangeText={onChangeTelephone}
      value={telephone.toString()}
      keyboardType="numeric"
    />

<TextInput
    onChangeText={onChangeProbleme}
    multiline={true}
    numberOfLines={10}
    style={{ height:200, textAlignVertical: 'top',  borderWidth: 1, backgroundColor : "white",
    borderRadius : 20,        borderColor: '#f61e44',

    padding: 10,margin : 12}}/>


<View style={{alignItems: 'center',
        justifyContent: 'center',}}>
<Pressable style={styles.button} onPress={onPressButton}>
      <Text style={styles.text}>Enregistrer</Text>
    </Pressable>
</View>


  </SafeAreaView>




  )
}

export default Details

const styles = StyleSheet.create({

    container: {
        alignItems : 'center',
        justifyContent : "center",
        flex: 1,
      },
      button: {
        width : 160,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#f61e44',
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
      input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius : 20,
        padding: 10,
        backgroundColor : "white",
        borderColor: '#f61e44',

      },
      titleText: {
        padding: 20,
        fontSize: 24,
        textTransform : 'uppercase',
        fontWeight: "bold"
      }
})