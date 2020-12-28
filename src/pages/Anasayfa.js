import React,{Component} from 'react';
import {Text, View, Button, StyleSheet,Picker, ScrollView} from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import axios from 'axios';



export default class App extends Component{
    constructor(props) {     
        super(props);     
        this.state = {       
        images: [      
            require('../images/image1.jpg'),    
            require('../images/image2.jpg'),    
            require('../images/image3.jpeg'),    
            require('../images/image4.jpg'),  
        ],
        malzemeler: [],
        yemekler: []     
        };   
    } 
    malzemeEkle = (itemValue) => {
      if(!this.state.malzemeler.includes(itemValue)) 
        this.setState(prevState => ({
           malzemeler: [...prevState.malzemeler, itemValue]
        }))
      console.log(this.state.malzemeler)
    }
  
    malzemeleriSil = () => {
      this.setState({
        malzemeler: [],
        yemekler: []
      })
    }
  
    yemekBul = () => {
      axios({
        method: 'post',
        url: 'http://192.168.1.37:8086/yemekler',
        data: {
          malzemeler: this.state.malzemeler
        }
       }).then((data) => {
         console.log(data);
        this.setState({
            yemekler: data.data.yemekler
        })
      })
    }

    render() { 
      return (
       <View style={styles.containerStyle}>
       <ScrollView>

           <View style={styles.headerStyle} >
           <Text style = {styles.textStyle}> Ne Pişirsem ?</Text>
           </View>
           <View>
           <SliderBox images={this.state.images} />
           </View>
           <View style={styles.text1Style}>
           <Text style = {styles.textheight}>Malzeme Seçiniz..</Text>
           </View>
           <View>
           <Picker
            selectedValue={this.state.selectedValue}
            style={{ height: 50 }}
            onValueChange={(itemValue, itemIndex) => {
              this.malzemeEkle(itemValue)
              this.setState({
                selectedValue: itemValue
              })
             }}
            >
               <Picker.Item label = "Sebzeler" value = "Sebzeler" />
               <Picker.Item label = "Karnıbahar" value = "Karnıbahar" />
               <Picker.Item label = "Pırasa" value = "Pırasa" />
               <Picker.Item label = "Havuç" value = "Havuç" />
               <Picker.Item label = "Lahana" value = "Lahana" />
               <Picker.Item label = "Domates" value = "Domates" />
               <Picker.Item label = "Biber" value = "Biber" />
               <Picker.Item label = "Kabak" value = "Kabak" />
               <Picker.Item label = "Patlıcan" value = "Patlıcan" />
               <Picker.Item label = "Soğan" value = "Soğan" />
               <Picker.Item label = "Patates" value = "Patates" />
           </Picker>
           </View>

           <View>
           <Picker
            selectedValue={this.state.selectedValue}
            style={{ height: 50 }}
            onValueChange={(itemValue, itemIndex) => {
              this.malzemeEkle(itemValue)
              this.setState({
                selectedValue: itemValue
              })
             }}
            >
               <Picker.Item label = "Bakliyat" value = "Bakliyat" />
               <Picker.Item label = "Kırmızı Mercimek" value = "Kırmızı Mercimek" />
               <Picker.Item label = "Pirinç" value = "Pirinç" />
               <Picker.Item label = "Bulgur" value = "Bulgur" />
               <Picker.Item label = "Yeşil Mercimek" value = "Yeşil Mercimek" />
               <Picker.Item label = "Barbunya" value = "Barbunya" />
               <Picker.Item label = "Nohut" value = "Nohut" />
               <Picker.Item label = "Kurufasulye" value = "Kuru Fasulye" />
               <Picker.Item label = "Arpa" value = "Arpa" />
           </Picker>
           </View>

           <View>
           <Picker
            selectedValue={this.state.selectedValue}
            style={{ height: 50 }}
            onValueChange={(itemValue, itemIndex) => {
              this.malzemeEkle(itemValue)
              this.setState({
                selectedValue: itemValue
              })
             }}
            >
               <Picker.Item label = "Et Ürünleri" value = "Et Ürünleri" />
               <Picker.Item label = "Kuşbaşı Et" value = "Kuşbaşı Et" />
               <Picker.Item label = "Kıyma" value = "Kıyma" />
               <Picker.Item label = "Hindi" value = "Hindi" />
               <Picker.Item label = "Tavuk" value = "Tavuk" />
               <Picker.Item label = "Kırmızı Et" value = "Kırmızı Et" />
               <Picker.Item label = "Pastırma" value = "Pastırma" />
           </Picker>
           </View>

           <View style={styles.MenuStyle} >
           <Text style = {styles.textheight}>Seçilen Malzemeler:</Text>
           {this.state.malzemeler.map(malzeme => (<Text>{malzeme}</Text>))}
           </View>
           <View>
          <Button
            title="Yemek Bul"
            onPress={() => this.yemekBul()}
           />
          <Button
          title="Malzemeleri sil"
          onPress={() => this.malzemeleriSil()}
          />
          </View>

          <View style={styles.SonucStyle}>
          <Text style = {styles.textheight}>Bulunan Tarifler:{"\n"}</Text>
          {this.state.yemekler.map(yemek =>(<Text><Text style={{fontWeight: 'bold'}}>{yemek.ad}</Text>{"\n"}{"\n"}{yemek.malzemeler}{"\n"}{"\n"}{yemek.tarif}{"\n"}{"\n"}</Text>))} 
          </View>

        </ScrollView>
       </View>
       
       );
    }
    
    
  }

  const styles = StyleSheet.create({
    text:{
      borderWidth: 1,
      padding: 10,
      alignItems:'center',
      backgroundColor: 'grey',
      
    },
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor:'#000',
        shadowOffset: { widht: 0, height:2},
        shadowOpacity:0.1,
        shadowRadius: 2,
        elevation:1,
      },
    textStyle: {
      fontSize: 25 
      },
    textheight:{
      fontSize: 15
    },
    MenuStyle:{
      backgroundColor: '#FFD700',
      height: 90,
      shadowOpacity: 0.2,
      borderRadius: 2,
      padding: 3,
      paddingLeft: 5,
      paddingRight: 5,
      marginBottom: 0.2
    },
    SonucStyle:{
      backgroundColor: '#FFDEAD',
      height: 1500,
      shadowOpacity: 0.2,
      borderRadius: 2,
      padding: 3,
      paddingLeft: 5,
      paddingRight: 5,
      marginTop:0.2

    },
    headerStyle: {
        backgroundColor: '#EF5350',
        height: 60,
        justifyContent:'center',
        alignItems:'center',
        shadowOpacity: 0.2,
        borderWidth: 1,
        borderRadius: 2,
      },
    text1Style: {
        backgroundColor: '#EF5350',
        height: 35,
        shadowOpacity: 0.2,
        borderWidth: 1,
        borderRadius: 2,
      },
   
}
); 