import * as React from 'react';
import { Text, View ,Image,StyleSheet } from 'react-native';

function About() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor: 'lightgreen', }}>
     <Text style={styles.titleText}> Welcome to ATR Goat Farm</Text>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
    <Image
            
                source={require("./assets/ramesh.jpg")}
               style={styles.img}
              />
              <Text style={styles.titleText}> Er.D.Ramesh ME.,MBA.,</Text>
              <Text style={styles.titleText}> Founder</Text>
             
            </View>
            <View style={styles.viewTextRights}>
                <Text style={styles.textRights}>
                  © 2022 All Rights Reserved | ATR Farm
                </Text>
              </View>

      
    </View>
  );
}
export default About;
const styles = StyleSheet.create({

  viewTextRights: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  textRights: {
    fontSize: 15,
    color:"darkgreen",
  },
  img: {
    width:150,
   height:150,
    marginTop:0,
    borderRadius:100,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
     color:"darkgreen",
     justifyContent: 'center', 
     alignItems: 'center',
     marginTop:25,
  },
});