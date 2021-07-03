import React from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import firebase from 'firebase';
import db from '../config';

export default class ReadStoryScreen extends React.Component{
  constructor(props) {
    super(props);

    this.state={
      book: [],
      search: '',
      lastVisibleStory: null,
    }
  }

  componentDidMount = async () => {
    const allStories = await db.collection("stories").get();

    allStories.docs.map((doc) => {
      this.setState({
        book: [...this.state.book, doc.data()],
        lastVisibleStory: doc
      });
    });
  }

  fetchMoreStories = async (text) => {
    const story = await db.collection("stories").where('booktitle', '==', text).startAfter(this.state.lastVisibleStory).get();
    story.docs.map((doc) => {
      this.setState({
        book: [...this.state.book, doc.data()],
        lastVisibleStory: doc
      });
    });
  }

  searchFilterFunction = async (text) => {
    const story = await db.collection("stories").where('booktitle', '==', text).get();
    story.docs.map((doc) => {
      this.setState({
        book: [...this.state.book, doc.data()],
        lastVisibleStory: doc
      });
    });
  }

  render(){
    return (
      <View style={styles.container}>
       <Text style = {{marginTop:50,marginLeft:72,fontSize:30,fontWeight:'bold'}}>Search For A Book</Text>
          <TextInput
            style={styles.bar}
            placeholder="Enter book name"
            onChangeText={(text) => {this.setState({search: text})}}
          />
            <TouchableOpacity 
            style={styles.searchButton}
            onPress={() => {this.searchFilterFunction(this.state.search)}}  
          >
            <Text style = {{fontSize:15,color:'black'}}>Search</Text>
          </TouchableOpacity>

          <FlatList 
            data={this.state.book}
            renderItem={({item}) => (
              <View style={{borderBottomWidth: 2, marginTop: 20, marginBottom: 20,marginLeft:20,marginRight:20}}>
                <Text>{"Story Name: " + item.booktitle}</Text>
                <Text>{"Story Author: " + item.bookauthor}</Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
            onEndReached={this.fetchMoreStories}
            onEndReachedThreshold={0.7}
          />
        </View>
        

         
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
  searchBar: {
    flexDirection: 'row',
    height: 50,
    width: 'auto',
    borderWidth: 1,
    alignItems: 'center',
    padding: 10,
  },

  height: 40,
    width: 280,
    marginTop:50,
    marginLeft:20,
    borderWidth:1.5,
    
    borderRadius: 30,

  bar: {
   
    width: 280,
    height: 40,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: "black",
    fontSize: 20,
    margin: 20,
    paddingLeft: 10,
    marginLeft: 20,
    marginTop: 50,
  },
  searchButton: {
    borderWidth: 1,
    marginLeft:320,
    height: 40,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginTop:-60,
    
  }
});