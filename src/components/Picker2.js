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
               <Picker.Item label = "Et Ürünleri" value = "Et Ürünleri" />
               <Picker.Item label = "Kuşbaşı Et" value = "Kuşbaşı Et" />
               <Picker.Item label = "Kıyma" value = "Kıyma" />
               <Picker.Item label = "Hindi" value = "Hindi" />
               <Picker.Item label = "Tavuk" value = "Tavuk" />
               <Picker.Item label = "Kırmızı Et" value = "Kırmızı Et" />
            </Picker>
            
         </View>
      )
   }
}
export default Pickers

