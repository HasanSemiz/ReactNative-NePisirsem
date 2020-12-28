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
               <Picker.Item label = "Sebzeler" value = "Sebzeler" />
               <Picker.Item label = "Karnıbahar" value = "Karnıbahar" />
               <Picker.Item label = "Pırasa" value = "Pırasa" />
               <Picker.Item label = "Havuç" value = "Havuç" />
               <Picker.Item label = "Lahana" value = "Lahana" />
               <Picker.Item label = "Domates" value = "Domates" />
               <Picker.Item label = "Biber" value = "Biber" />
               <Picker.Item label = "Kabak" value = "Kabak" />
               <Picker.Item label = "Patlıcan" value = "Patlıcan" />
            </Picker>
            
         </View>
      )
   }
}
export default Pickers

