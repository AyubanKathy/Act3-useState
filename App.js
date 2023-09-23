import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

const Flight = ({onBack}) => {
  const [on, setOn] = useState(false);
  const toggleFlight = () => {
    setOn(!on);
  };

  return (
    <View>
      <View style={styles.image}>
        {on ? (<Image source={require('./assets/off.png')} style={{width:250, height:350}}/>) : (<Image source={require('./assets/on.png')} style={{width:250, height:350}}/>)}     
      </View>  
      <View style={{width: 140, height: 50, alignSelf: 'center'}}>
        <Button title={on ? "ON" : "OFF"} color={'#82CD47'} onPress={toggleFlight}/>
      </View>
      <View style={{width: 140, height: 50, alignSelf: 'center'}}>
        <Button title="BACK" onPress={onBack}/>
      </View>
    </View>
  )
}

const Counter = ({onBack}) => {
  const [number, setNum] = useState(0);
  const setSub = () => {
    setNum(number - 1);
  };
  const setAdd = () => {
    setNum(number + 1);
  };

  return (
    <View>
      <Text style={styles.number}> {number} </Text>
      <View style={styles.head}>
        <View style={styles.numpress}>
          <Button title="-1" color={'#82CD47'} onPress={() => setSub()}/>
        </View>
        <View style={styles.numpress}>
          <Button title="+1" color={'#82CD47'} onPress={() => setAdd()}/>
        </View>
      </View>
      <View style={{width: 100, height: 50, alignSelf: 'center', marginTop: -80}}>
        <Button title="BACK" onPress={onBack} />
      </View>
    </View>

  )
}

export default function App() {
  const [flash,  setFlash] = useState(false);
  const [counter, setCounter] = useState(false);

  const toggleFlash = () => {
    setFlash(!flash);
    setCounter(false);
  };

  const toggleCounter = () => {
    setCounter(!counter);
    setFlash(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Button title="F-LIGHT"
        onPress={toggleFlash} disabled={flash || counter}/>
        <Button title='COUNTER'
        onPress={toggleCounter} disabled={counter || flash}/>
      </View>
      <View>
        {flash && <Flight onBack={toggleFlash}/>}
      </View>
      <View>
        {counter && <Counter onBack={toggleCounter}/>}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  head: {
    flexDirection: 'row',
    gap: 50,
    justifyContent: 'space-between',
    paddingVertical: 100,
  },
  image: {
    resizeMode: 'center',
    marginVertical: 30,
  }, 
  number: {
    fontSize: 180,
    fontWeight: 'bold',
  },
  numpress: {
    width: 80, 
    height: 50, 
    alignSelf: 'center'
  }
});
