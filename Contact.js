import * as React from 'react';
import { Text, View ,Image,StyleSheet,SafeAreaView } from 'react-native';

function Contact() {
  return (
     <SafeAreaView style={styles.container}>
     <View style={styles.container}>
    
    <Text style={styles.titleText}> Welcome to ATR Goat Farm</Text>
     <View >
              <Image
                resizeMode="contain"
                source={require("./assets/images%20(3).jpg")}
               style={styles.img}
              />
              <Image
                resizeMode="contain"
                source={require("./assets/images%20(2).jpg")}
               style={styles.img}
              />
             
            </View>
      <Text style={styles.titleText1}>Farm Address:</Text><Text style={styles.titleText2}>
      Thalakuttaipudur Bus Stop, Muniyappampalayam - Makkalpudur - Karuvalvadipudur Rd, Vembathi, Tamil Nadu 638315, India</Text>
      <Text style={styles.titleText3}>Email: rameshbeme@gmail.com</Text>
      <Text style={styles.titleText3}>Mobile:+91 9629360011</Text>
       <View style={styles.viewTextRights}>
                <Text style={styles.textRights}>
                  © 2022 All Rights Reserved | ATR Farm
                </Text>
              </View>
    </View>
   </SafeAreaView >
  );
}
const styles = StyleSheet.create({
container: {
 flex:1,
    backgroundColor: 'lightgreen',
  
    
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
    width:"100%",
   height:150,
    marginTop:0,
    borderRadius:100,
    justifyContent: 'center', 
    alignItems: 'center',
    marginTop:15,
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
     color:"darkgreen",
     marginTop: 10,
  },
  titleText1: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
     color:"darkgreen",
     marginTop: 10,
  },
  titleText2: {
    fontSize: 15,
    textAlign: 'center',
    //fontWeight: 'bold',
     color:"darkgreen",
     marginTop: 10,
  },
  titleText3: {
    fontSize: 15,
    textAlign: 'center',
    //fontWeight: 'bold',
     color:"darkgreen",
     marginTop: 10,
  },
  
});
export default Contact;