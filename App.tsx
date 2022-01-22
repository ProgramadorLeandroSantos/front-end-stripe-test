import React from 'react';
import { StripeProvider as _StripeProvider } from '@stripe/stripe-react-native';
import type { Props as StripeProviderProps } from '@stripe/stripe-react-native/lib/typescript/src/components/StripeProvider';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Payment from './components/Payment';
const StripeProvider = _StripeProvider as React.FC<StripeProviderProps>;

const  App:React.FC = ()=> {
  return (
    <View style={styles.container}>
      <StripeProvider
          publishableKey="pk_test_51KKdwmAkwFpQTzqeFwvXetHL00DSplKoBMx51h7Rfn7TSosuKJzLGvp5S3mqLWfxTfIYO9W8lL23980g36p78VcJ00Dx8DQoFr">
          <Payment/>
      </StripeProvider> 
      <StatusBar style="auto" />
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


export default App;