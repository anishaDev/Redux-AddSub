import { StyleSheet, Text, View,Button } from 'react-native'
import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { addition,substraction } from './store/action';

const Counter = () => {
    const data = useSelector((state)=>state.counter);
    const dispatch = useDispatch();
  return (
    <View style ={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Button title="Add Count" onPress={() => dispatch(addition())}/>
      <Text>{data}</Text>
      <Button title="Subtract Count" onPress={() => dispatch(substraction())}/>
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({})