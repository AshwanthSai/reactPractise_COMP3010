import React, { useState } from 'react';
import {Image, View, Text, SafeAreaView, ScrollView, StyleSheet, Picker, Button} from 'react-native';
import pic from "./assets/Calculate_Logo.png";

export default function App() {
  
  const [veggieChoiceValue, setVeggieChoiceValue] = useState("6");
  const [veggieQuantity, setVeggieQuantity] = useState("1");
  const [fruitChoiceValue, setFruitChoiceValue] = useState("7");
  const [fruitQuantity, setFruitQuantity] = useState("1");

  const [calculatedValue, setCalculatedValue] = useState("");

  return (
  <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
      <View style = {styles.header_wrapper}>
        <Text style={styles.welcome_heading}>
          {'Welcome to VFUS Calculate'}
        </Text>
        <Image
          style={styles.tinyLogo}
          source={require('./assets/Calculate_Logo.png')}
        />
        <View style = {styles.dropdown_wrapper}>
          <Text style={styles.selection_heading}>Vegatable Choice</Text>
          <View style = {styles.row_container}>
            <View style = {styles.choice_dropdown}>
              <Picker 
              style={styles.picker_theme}
              testId='1'
              mode='dropdown'
              prompt='Select Veggie'
              selectedValue={veggieChoiceValue}
              onValueChange={(itemValue, itemIndex) => setVeggieChoiceValue(itemValue)}>
                <Picker.Item label="Cauliflower - $6" value="6" />
                <Picker.Item label="Potato - $5" value="5" />
                <Picker.Item label="Carrot - $5" value="5" />
              </Picker>
            </View>
            <View style = {styles.quantity_dropdown}>
              <Picker 
                style={styles.picker_theme}
                testId='2'
                mode='dropdown'
                selectedValue={veggieQuantity}
                onValueChange={(itemValue, itemIndex) => setVeggieQuantity(itemValue)}>
                  <Picker.Item label="1" value="1" />
                  <Picker.Item label="2" value="2" />
                  <Picker.Item label="3" value="3" />
                  <Picker.Item label="4" value="4" />
                  <Picker.Item label="5" value="5" />
              </Picker>
            </View>
          </View>
          <Text style={styles.selection_heading}>Fruit Choice</Text>
          <View style = {styles.row_container}>
            <View style = {styles.choice_dropdown}>
              <Picker 
                style={styles.picker_theme}
                testId='3'
                mode='dropdown'
                prompt = 'Select Fruit'
                selectedValue={fruitChoiceValue}
                onValueChange={(itemValue, itemIndex) => setFruitChoiceValue(itemValue)}>
                  <Picker.Item label="Banana - $7" value="7" />
                  <Picker.Item label="Durian - $8" value="8" />
                  <Picker.Item label="Passionfruit - $8" value="8" />
              </Picker>
            </View>
            <View style = {styles.quantity_dropdown}>
              <Picker 
                style={styles.picker_theme}
                testId='4'
                mode='dropdown'
                selectedValue={fruitQuantity}
                onValueChange={(itemValue, itemIndex) => setFruitQuantity(itemValue)}>
                  <Picker.Item label="1" value="1" />
                  <Picker.Item label="2" value="2" />
                  <Picker.Item label="3" value="3" />
                  <Picker.Item label="4" value="4" />
                  <Picker.Item label="5" value="5" />
              </Picker>
            </View>
          </View>
        </View>
        <View style={styles.calculate_button}>
          <Button
            title="Calculate Total"
            onPress={() => {
              const vegCost = parseInt(veggieChoiceValue);
              const vegQuant = parseInt(veggieQuantity);
              const fruitCost = parseInt(fruitChoiceValue);
              const fruitQuant = parseInt(fruitQuantity);         
              setCalculatedValue("Total cost of the order: $ "+String((vegCost*vegQuant)+(fruitCost*fruitQuant)))
            }}
          />
        </View>
        <Text style={styles.welcome_heading}> {calculatedValue} </Text>
      </View>
    </ScrollView>
    <View style={styles.footer}>
      <Text style={styles.footer_text}>App developed by Chris Austin, Edward Fay, Sai Sivaprasad, Ishaq Siddiqui</Text>
    </View>
  </SafeAreaView>
  );}

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f7ffec',
      flex:1
    },
    scrollView:{
      paddingBottom:60
    },
    tinyLogo: {
      width: 250,
      height: 250,
      paddingBottom:30
    },
    header_wrapper:{
      paddingTop:70,
      paddingBottom:70,
      alignContent:"center",
      justifyContent:"center",
      alignItems:"center",
    },
    welcome_heading:{
      color:'#008037',
      fontWeight:'bold',
      paddingBottom:15,
      fontSize:20
    },
    selection_heading:{
      color:'#008037',
      fontWeight:'bold',
      paddingTop:15,
      paddingBottom:5,
      fontSize:15,
    },
    row_container:{
      flexDirection:'row',
      justifyContent: 'space-between',
    },
    dropdown_wrapper: {
      width:'80%',
    },
    choice_dropdown: {
      width:'70%'
    },
    quantity_dropdown: {
      width:'30%'
    },
    picker_theme: {
      color:'#008037'
    },
    footer:{
      paddingTop:30,
      position:"absolute",
      bottom:0,
      width:'100%'
    },
    footer_text:{
      backgroundColor:'#FFDE59',
      color:'#008037'
    },
    calculate_button:{
      paddingTop:30,
      paddingBottom:30
    }
  });
