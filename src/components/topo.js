import React, {Component} from 'react';
import {View,Image} 
from 'react-native';

const imagem = require('../../img/jokenpo.png');
class Topo extends Component{
    render() {
      return (
      <View>
        <Image source= { imagem }></Image>
      </View>  
      );
    }
  }
  export default Topo;