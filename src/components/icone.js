import React, {Component} from 'react';
import {View,Image,Text,StyleSheet} 
from 'react-native';
const imgPedra = require('../../img/pedra.png');
const imgPapel = require('../../img/papel.png');
const imgTesoura = require('../../img/tesoura.png');


class Icone extends Component{
    render(){
     
        //this.props.escolha;
        //this.props.jogador;
        if (this.props.escolha == 'pedra' ){
          return (
            <View style={ styles.icone }>
            <Text style={ styles.txtJogador } > { this.props.jogador } </Text>
            <Image source = { imgPedra }></Image>
            </View>
          );
  
        } else if ( this.props.escolha == 'papel' ) {   
          return (
            <View style={ styles.icone }>
            <Text style={ styles.txtJogador } > { this.props.jogador}</Text>
            <Image source = { imgPapel } > </Image>
            </View>
          );
  
        } else if ( this.props.escolha == 'tesoura' ){
          return (
            <View style={ styles.icone }>
            <Text style={ styles.txtJogador }>{ this.props.jogador }</Text>
            <Image source = { imgTesoura }></Image>
            </View>
          );
  
        } else {
          return false;
        }
  
        }
    
  
    }

    const styles = StyleSheet.create({

        icone:{
            alignItems:'center',
            marginTop:20,
           
          },
          txtJogador:{
           fontSize:18,
           fontWeight:'bold'
       
          }


    });

    export default Icone;