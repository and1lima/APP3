import React, {Component} from 'react';
import {AppRegistry, 
        StyleSheet,
        Text,View,Button} 
from 'react-native';
import Topo from './src/components/topo'
import Icone from './src/components/icone'
// componente props 
//app3

class App3 extends Component {

  constructor(props) {
    super(props);

    this.state = {escolhaUsuario:'' ,escolhaComputador:'',resultado:''};     
  }
  jokenpo(escolhaUsuario) { 
    const numAleatorio = Math.floor(Math.random() *3);  
    let escolha = '';
      switch (numAleatorio) {
        case 0: escolhaComputador = 'pedra';break;
        case 1: escolhaComputador = 'papel'; break;
        case 2: escolhaComputador = 'tesoura';break;
        
      };
      let resultado = '';
      if (escolhaComputador == 'pedra'){
        if (escolhaUsuario == 'pedra'){
          resultado ='Empate';
        }
        if (escolhaUsuario == 'papel'){
          resultado = 'Você Ganhou ';
        }
        if (escolhaUsuario == 'tesoura'){
          resultado ='Você Perdeu';
        }
      };
      if (escolhaComputador == 'papel'){
        if (escolhaUsuario == 'papel'){
          resultado='Empate';
        }
        if (escolhaUsuario == 'pedra'){
          resultado = 'Você Perdeu';
        }
        if (escolhaUsuario== 'tesoura'){
          resultado='Você Ganhou ';
        }
      };
      if (escolhaComputador == 'tesoura'){
        if (escolhaUsuario == 'tesoura'){
          resultado='Empate';
        }
        if  (escolhaUsuario == 'pedra'){
          resultado = 'Você Ganhou ';
        }
        if (escolhaUsuario == 'papel'){
          resultado='Você Perdeu';
        }
      };
    this.setState({ escolhaUsuario, escolhaComputador, resultado
    });
  } 
  //visual 
  render() {
    return (
      <View>
      <Topo />
      <View style ={styles.painelAcoes}>
    <View style={styles.btnEscolha}>
     <Button 
      title='Pedra'
      onPress={()=> {this.jokenpo('pedra'); }}
      >   
        </Button>
    </View>
    <View style={styles.btnEscolha}>
      <Button
      title='Papel'
      onPress={()=> {this.jokenpo('papel'); }}>
      </Button>
    </View>
    <View style={styles.btnEscolha}>
      <Button
      title='Tesoura'
      onPress={()=> {this.jokenpo('tesoura'); }}>
      </Button>
    </View>
    </View> 
        <View style = {styles.palco}>
      <Text style = {styles.txtResultado}>{this.state.resultado}</Text>
      <Icone escolha={this.state.escolhaUsuario} jogador= 'Você' />
      <Icone escolha={this.state.escolhaComputador} jogador= 'Oponente' />
      </View>  
    </View>    
    );
  }
}
const styles = StyleSheet.create({
    btnEscolha: {
      width:90   
    },
    painelAcoes:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginTop: 10,
      marginLeft: 10,
      marginRight: 10
    },
   palco:{
    alignItems:'center',
    marginTop:10
   },
   txtResultado:{
     fontSize:25,
     fontWeight:'bold',
     color:'red',
     height:60
   }
});
AppRegistry.registerComponent('App3',()=>App3);