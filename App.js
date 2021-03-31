import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView, Switch } from 'react-native';
import Slider from '@react-native-community/slider';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = { 
      status : false
    };
  }

  render(){
  return (
    <SafeAreaView style={styles.container}>
      <Slider
      minimumValue={0}
      maximumValue={100}
      onValueChange={ (valorSelecionado) => this.setState({valor: valorSelecionado})}
      value={this.state.valor}
      minimumTrackTintColor="red"
      maximumTrackTintColor="blue"
      />
      <Switch
       value={this.state.status}
       onValueChange={ (valorSwitch) => this.setState({status: valorSwitch})}
       thumbColor= 'blue'
      />
      <Text style={{ textAlign: 'center', fontSize: 30 }}>
        {(this.state.status) ? "Ativo" : "Inativo"}
      </Text>
    </SafeAreaView>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
