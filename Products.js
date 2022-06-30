// Example to Send WhatsApp Message from React Native App
// https://aboutreact.com/send-whatsapp-message/
 
// import React in our code
import React, {useState} from 'react';
 
// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Linking,
  Image,
  ScrollView,
} from 'react-native';
 
const App = () => {
  //const [mobileNumber, setMobileNumber] = useState();
  const [whatsAppMsg, setWhatsAppMsg] = useState("Please Place Order here and Delivery Address, Payment Mode GPay:+919629360011");
    
  
 
  const initiateWhatsApp = () => {
    // Check for perfect 10 digit length
    // if (mobileNumber.length != 10) {
    //   alert('Please insert correct WhatsApp number');
    //   return;
    // }
    // Using 91 for India
    // You can change 91 with your country code
    let url =
      'whatsapp://send?text=' + 
       whatsAppMsg +
      '&phone=91' + 9629360011;
    Linking.openURL(url)
      .then((data) => {
        console.log('WhatsApp Opened');
      })
      .catch(() => {
        alert('Make sure Whatsapp installed on your device');
      });
  };
 
  return (
    <SafeAreaView style={styles.container}>
     <ScrollView>
      <View style={styles.container}>
       <Text style={styles.titleText}> ATR Products</Text>
      <View  >
       <Text style={styles.titleText1}> Goat</Text>
              <Image style={styles.img}
                resizeMode="contain"
                source={require("./assets/images%20(2).jpg")}
               
              />
              <Text style={styles.titleText1}> Goat Milk</Text>
              <Image style={styles.img}
                resizeMode="contain"
                source={require("./assets/milk.jpg")}
               
              />
              <Text style={styles.titleText1}> AKHIL Goat Soap Rs 60</Text>
              <Image style={styles.img}
                resizeMode="contain"
                source={require("./assets/soapbox.jpg")}
               
              />
               
            </View>
       
        
      
        <TextInput
          value={whatsAppMsg}
          onChangeText={
            (whatsAppMsg) => setWhatsAppMsg(whatsAppMsg)
          }
          placeholder={'Please order Here!!'}
          style={styles.textInput}
        
          editable={false}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={initiateWhatsApp}>
          <Text style={styles.buttonTextStyle}>
            Order
          </Text>
        </TouchableOpacity>
         <View style={styles.viewTextRights}>
                <Text style={styles.textRights}>
                  © 2022 All Rights Reserved | ATR Farm
                </Text>
              </View>
      </View>
       </ScrollView>
    </SafeAreaView>
  );
};
 
export default App;
const styles = StyleSheet.create({
  container: {
 
    backgroundColor: 'lightgreen',
  
    
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
     color:"darkgreen",
  },
  titleText1: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
     color:"darkgreen",
  },
  
  buttonStyle: {
    justifyContent: 'center',
    marginTop: 15,
    marginLeft:75,
 alignItems: 'center',
    width:200,
    height:40,
    backgroundColor: 'darkgreen',
    borderRadius: 30,
  },
  buttonTextStyle: {
    color: '#fff',
  
     justifyContent: 'center', 
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop:30,
    paddingHorizontal: 10,
    borderRadius: 20,
    paddingTop:0,
  },
  viewTextRights: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  textRights: {
    fontSize: 15,
     color:"darkgreen",
  },
  img: {
   
    width: '100%',
    height:100,
    justifyContent: 'center', 
    alignItems: 'center'
  },
});