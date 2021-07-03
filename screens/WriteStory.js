import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet, KeyboardAvoidingView, ToastAndroid } from 'react-native';
//import * as Permissions from 'expo-permissions';
//import { BarCodeScanner } from 'expo-barcode-scanner';
import firebase from 'firebase';
import db from '../config';

export default class WriteStory extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      author: '',
      story: ''
    }
  }
  submitStory = async () => {
    await db.collection("stories").add({
      booktitle: title,
      bookauthor: author,
      storyline: story


    })
    ToastAndroid.show("Story Saved To The Database", ToastAndroid.SHORT);


  }
  render() {

    return (
      <View style={styles.container}>
      <Text style = {{fontSize:30,marginBottom:-130,marginTop:70,fontWeight:'bold'}}>Write Your Story</Text>
        <KeyboardAvoidingView 
        style={styles.container} 
        behavior="padding" 
        enabled />

      

        <TextInput style={styles.title}
          placeholder="Story Title"
          onChangeText={title => {
            this.setState({ title: title });
          }}
          value={this.state.title} />
        <View style={styles.inputView}>



          <TextInput style={styles.author} placeholder="Author" onChangeText={author => {
            this.setState({ author: author });
          }}
            value={this.state.author} />
        </View>

        <TextInput
          style={styles.inputBox}
          placeholder="StoryLine" onChangeText={story => {
            this.setState({ story: story });

          }}
          value={this.state.story}
        />

        <TouchableOpacity
          style={styles.submitButton} onPress={async () => {
            this.submitStory();
            this.setState({
              story: ''
            })
          }}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>

      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  inputBox: {

    width: 380,
    height: 400,
    borderWidth: 1.5,
    borderRightWidth: 1.5,
    fontSize: 20,
    borderRadius:5,
    marginTop:15,
    paddingLeft:10
    //marginBottom:100
  },
  submitButton: {
    backgroundColor: '#0e5da2',
    width: 200,
    height: 50,
    margin:30,
    marginBottom:20,
    marginTop:10,
    borderRadius:25
  },
  submitButtonText: {
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: "bold",
    color: 'white'
  },
  title: {
    width: 380,
    height: 40,
    borderWidth: 1.5,
    borderRadius: 5,
    fontSize: 20,
    marginTop:160,
    paddingLeft:10
  },
  author:{
    width: 380,
    height: 40,
    borderWidth: 1.5,
    borderRadius: 5,
    fontSize: 20,
    marginTop:15,
    paddingLeft:10
  },
  write:{

  },
  inputView: {
    flexDirection: 'row',
    margin: 10
  },

});