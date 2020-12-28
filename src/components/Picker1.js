import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native'

class Pickers extends Component {
   state = {user: ''}
   updateUser = (user) => {
      this.setState({ user: user })
   }
   render() {
      return (
         <View>
            <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser}>
               <Picker.Item label = "Bakliyat" value = "Bakliyat" />
               <Picker.Item label = "Kırmızı Mercimek" value = "Kırmızı Mercimek" />
               <Picker.Item label = "Pirinç" value = "Pirinç" />
               <Picker.Item label = "Bulgur" value = "Bulgur" />
               <Picker.Item label = "Yeşil Mercimek" value = "Yeşil Mercimek" />
               <Picker.Item label = "Barbunya" value = "Barbunya" />
               <Picker.Item label = "Nohut" value = "Nohut" />
               <Picker.Item label = "Kurufasulye" value = "Kurufasulye" />
               <Picker.Item label = "Arpa" value = "Arpa" />
            </Picker>
            
         </View>
      )
   }
}
export default Pickers

