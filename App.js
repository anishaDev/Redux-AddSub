import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Counter from './src/Counter';
import {Provider} from 'react-redux';
import {store} from './src/store/store';



const App = (props) => {
  return (
    <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center'}}>
   <View style={{flex:1}}>
      <Provider store={store}>
      <Counter/>
      </Provider>
      </View>
   
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})