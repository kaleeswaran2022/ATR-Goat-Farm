import * as React from 'react';
import { Text, View ,Image,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Products from "./Products";
import Contact from "./Contact";
import AboutUs from "./AboutUs";

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor: 'lightgreen', }}>
      <Text style={styles.titleText}> Welcome to ATR Goat Farm</Text>
      <View >
              <Image style={styles.img}
                resizeMode="contain"
                source={require("./assets/images%20(1).jpg")}
               
              />
             <Text style={styles.titleText1}> Akhil Goat Milk & Soap</Text>
             <Text style={styles.titleText1}> Medical & Health</Text>
             
            </View>
            <View style={styles.viewTextRights}>
                <Text style={styles.textRights}>
                  © 2022 All Rights Reserved | ATR Farm
                </Text>
              </View>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Products/>
    </View>
  );
}


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="About Us" component={AboutUs} />
        <Tab.Screen name="Products" component={SettingsScreen} />
        <Tab.Screen name="Contact Us" component={Contact} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({

  viewTextRights: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 200,
  },
  textRights: {
    fontSize: 15,
    color:"darkgreen",
  },
  img: {
    width:600,
    paddingTop: 100,
    marginTop:50,
    borderRadius:10,
  },
  
  titleText: {
    fontSize: 26,
    textAlign: 'center',
    fontWeight: "bold",
     color:"darkgreen",
     marginTop:5,
  },
  titleText1: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
     color:"darkgreen",
     marginTop:10,
  },
});