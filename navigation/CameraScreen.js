import React, { Component } from 'react';
import { View, Text,StyleSheet} from 'react-native';
import { Container, Header, Content, Card, CardItem, Icon, Right,Button } from 'native-base';
import * as firebase from "firebase";


export default class CameraScreen extends Component {

   static navigationOptions = {
      title: "Cities",
      headerLeft:()=> null
    };

    SignOut =()=>{
       firebase
       .auth()
       .signOut()
       .then(()=>{
         this.props.navigation.navigate('Welcome')
       })
       .catch((err)=>{
          alert(err.message)
       })
    }
  

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Text>Holy Places</Text>
             </CardItem>
           </Card>
           <Card>
            <CardItem>
              <Text>Event Travel</Text>
             </CardItem>
           </Card>
           <Card>
            <CardItem>
              <Text>The Package Holiday</Text>
             </CardItem>
           </Card>
           <Card>
            <CardItem>
              <Text>Business Travel</Text>
             </CardItem>
           </Card>
        </Content>
        <Button full danger 
        onPress={() => {
         this.SignOut()
      }}
         ><Text style={styles.text}>Logout</Text></Button>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
   text:{
      color:"#fff"
   }
 });