import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, KeyboardAvoidingView, ScrollView, TouchableOpacity } from 'react-native';
import { Actions, } from 'react-native-router-flux';

class Home extends React.Component {

  state = {
    name: '',
  };

  render() {
    return (
<ScrollView>
       <KeyboardAvoidingView behavior="padding">
        <View style={styles.view}>
         <Image
          style={styles.pic}
          source={require('./img/2.jpg')}
         />
        <Text style={styles.title}>
הכנס סיסמא לכניסה:
        </Text>

      <TextInput
       style={styles.nameinput}
       placeholder='הזן סיסמא'
       onChangeText={(text) => {
         this.setState({
           name: text,
         });
       }}
       value={this.state.name}
      />

      <TouchableOpacity onPress={() => {
        Actions.chat({
        name: this.state.name,
        })
}}
>
<Text style={styles.button}>
כניסה לצ׳אט
</Text>
</TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
</ScrollView>

    );


  }
}

const styles = StyleSheet.create ({
  title: {
    color: 'white',
    fontSize: 26,
    textAlign: 'center',
    justifyContent: 'center',
    margin: 10,
  },
   nameinput: {
    height: 60,
    margin: 10,
    color: '#6699ff',
    borderColor: 'white',
    backgroundColor: 'white',

  },
  button: {
    padding: 15,
    backgroundColor: '#6699ff',
    margin: 20,
    color: 'white',
    fontSize: 30,
    textAlign: 'center',

  },
  view: {
    backgroundColor: 'black',
  },
  pic: {
    width: 400,
    height: 370,
    justifyContent: "space-around",    //  <-- you can use "center", "flex-start",
    resizeMode: "cover",
  },
});

export default Home;
