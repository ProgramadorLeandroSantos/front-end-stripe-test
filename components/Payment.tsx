import React, { useState,useCallback } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { useStripe } from '@stripe/stripe-react-native';
import  api from '../api';



const Payment = () => {
  const [name, setName] = useState("");
  const stripe = useStripe();


  const subscribe = useCallback(async()=>{
    try {
       // sendind request
      const {data}  = await api.post('/pay',{user_name:name}) 

      if(name === "") return Alert.alert(data.message);
       
      const clientSecret = data.clientSecret;

      const initSheet = await stripe.initPaymentSheet({
        paymentIntentClientSecret: clientSecret,
        merchantDisplayName: 'DevLeandro',
        setupIntentClientSecret: clientSecret,
      });

      if(initSheet.error) return Alert.alert(initSheet.error.message);
       
      const presentSheet = await stripe.presentPaymentSheet();

      if(presentSheet.error) return Alert.alert(presentSheet.error.message);

      Alert.alert('Payment completed, thank you')

    } catch (error) {
      console.error(error)
      Alert.alert('Something went wrong', 'Try again later!')
    }
  },[name])


  return (
    <View>
      <TextInput 
        onChange={(e)=>{
          setName(e.nativeEvent.text)
        }}
        placeholder="Name"
        style={{
          width: 300,
          fontSize : 20,
          padding: 10,
          borderWidth : 1,
        }}  
      />

      <Button title='Subscribe - R$ 25 Reais' onPress={()=> subscribe()} />
    </View>
  );
};

export default Payment;
