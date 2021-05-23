import React, { Component } from 'react';
import { StyleSheet,View, Text,KeyboardAvoidingView,TouchableOpacity, ScrollView } from 'react-native';
import { Form, Item, Input, Label, Button } from "native-base";

import * as firebase from "firebase";
export default class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
       fullname:"",
       name:"",
       email:"",
       password:"",
       confirmPassword:""
    };
  }

  signupUser = (name, email, password) => {
   firebase
     .auth()
     .createUserWithEmailAndPassword(email, password)
     .then(authenticate => {
       return authenticate.user
         .updateProfile({
           displayName: name
         })
         .then(() => {
            this.props.navigation.navigate("Cities");
         });
     })
     .catch(error => {
       alert(error.message);
     });
 };

  render() {
    return (
      <ScrollView  style={styles.container}>
      <KeyboardAvoidingView  style={styles.container}
      behavior="position"
      enabled>
      <View style={styles.logoContainer}>
       </View>
       <Form style={styles.form}>
         <Item regular style = {styles.item}>
           <Input
             autoCorrect={false}
             autoCapitalize="none"
             placeholder="Full Name"
             keyboardType="name-phone-pad"
             onChangeText={fullname=>this.setState({fullname})}
           />
         </Item>
         <Item regular  style = {styles.item}>
           <Input
             autoCorrect={false}
             autoCapitalize="none"
             placeholder="Name"
             keyboardType="name-phone-pad"
             onChangeText={name => this.setState({ name })}
           />
         </Item>
         <Item regular  style = {styles.item}>
           <Input
             autoCorrect={false}
             autoCapitalize="none"
             keyboardType="email-address"
             placeholder="Email"
             onChangeText={email => this.setState({ email })}
           />
         </Item>
         <Item regular  style = {styles.item}>
           <Input
             secureTextEntry={true}
             autoCorrect={false}
             autoCapitalize="none"
             keyboardType="email-address"
             placeholder="password"
             onChangeText={password => this.setState({ password })}
           />
         </Item>
         <Item regular  style = {styles.item}>
           <Input
             autoCorrect={false}
             autoCapitalize="none"
             placeholder="confirm password"
             keyboardType="name-phone-pad"
             onChangeText={confirmpassword => this.setState({ confirmpassword })}
           />
         </Item>
         <Button
           style={styles.button}
           full
           rounded
           onPress={() => {
              this.signupUser(
                 this.state.name,
                 this.state.email,
                 this.state.password
                 )
           }}
         >
           <Text style={styles.buttonText}>Sign in</Text>
         </Button>
         <Button
           style={styles.button}
           full
           rounded>
           <Text style={styles.buttonText}>Continue With Google</Text>
         </Button>
         
       </Form>
       <View style={styles.footer}>
         <Text style={styles.licence}>By Clicking Create An Account You Agree to Our Terms and Services</Text>
       </View>
      </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: "#fff"
   },
   logoContainer: {
     alignItems: "center",
     marginTop: 50,
     marginBottom: 50
   },
   item:{
      margin:10,
   },
   form: {
     padding: 20,
     width: "100%"
   },
   button: {
     marginTop: 20
   },
   buttonText: {
     color: "#fff"
   },
   footer: {
     alignItems: "center"
   },
   licence:{
      textAlign:'center'
   }
 });