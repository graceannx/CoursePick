import React, {useContext, useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {firebase} from '../firebase.js';
import * as Yup from 'yup';
import Form from '../components/Form.js';

const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Please enter a valid email')
      .email()
      .label('Email'),
    password: Yup.string()
      .required()
      .min(6, 'Password must have at least 6 characters')
      .label('Password'),
    confirm: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Confirmation password must match password'),
  });


  


const SigninScreen = ({ navigation }) => {
    const [signInError] = useState("");
    function handleOnSubmit(values)  {
        
        const {email, password, confirm} = values;
        
        if (confirm) {
            firebase.auth().signInWithEmailAndPassword(email, password).then(navigation.navigate('ScheduleScreen')).catch(error =>
                setFormError(error.message)) 
            }   
        else {firebase.auth().createUserWithEmailAndPassword(email, password).then(navigation.navigate('ScheduleScreen')).catch(error =>
            setFormError(error.message));}
        
        if (signInError == '') navigation.navigate('ScheduleScreen');}

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Form
            initialValues={{
              email: '',
              password: '',
              confirm: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleOnSubmit}>
            <Form.Field
              name="email"
              leftIcon="email"
              placeholder="Enter email"
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
            />
            <Form.Field
              name="password"
              leftIcon="lock"
              placeholder="Enter password"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
              textContentType="password"
            />
            <Form.Field
              name="confirmPassword"
              leftIcon="lock"
              placeholder="Confirm password"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
              textContentType="password"
            />
            <Form.Button title={values => values.confirm ? 'Sign up' : 'Log in'} />
            {<Form.ErrorMessage error={signInError} visible={true} />}
          </Form>
        </ScrollView>
      </SafeAreaView>
    );

  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 20,
    },
    bannerStyle: {
      color: '#888',
      fontSize: 32,
    },
  });
  export default SigninScreen; 