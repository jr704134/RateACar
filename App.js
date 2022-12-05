import React, {useState} from 'react';
import { StyleSheet, Text, ScrollView, Image, TextInput, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import ListView from 'deprecated-react-native-listview';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as SplashScreen from 'expo-splash-screen';

const toyota = require('./Images/ToyotaGrSupra2023.png');
const nissan = require('./Images/NissanSkylineR34.png');
const chevrolet = require('./Images/ChevroletBlazer2023.png');

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

function HomeScreen({navigation}) {  
  const [rating, setRating] = useState(0);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.mainText}>2023 Toyota GR Supra</Text>
        <Image source={toyota} style={styles.cars}/>
          <Text style={styles.ratingDisplay}>Your Rating: {rating}</Text>
          <Text style={styles.ratings}>Review:</Text>
            <TextInput style={styles.ratingInput} placeholder="Write a review"/>
          <Text style={styles.ratings}>Rating:</Text>
            <TextInput style={styles.ratingInput} placeholder="Enter rating"
            onChangeText={newRating => setRating(newRating)}/>
              <TouchableOpacity style={styles.submitRating}
              onPress={() => {
                setRating(rating);
              }}>
                <Text style={styles.inputText}>Submit</Text>
              </TouchableOpacity>

      <Text style={styles.mainText}>Nissan Skyline GT-R R34</Text>
        <Image source={nissan} style={styles.cars}/>
          <Text style={styles.ratingDisplay}>Your Rating: {rating}</Text>
          <Text style={styles.ratings}>Review:</Text>
            <TextInput style={styles.ratingInput} placeholder="Write a review"/>
          <Text style={styles.ratings}>Rating:</Text>
            <TextInput style={styles.ratingInput} placeholder="Enter rating"
            onChangeText={newRating => setRating(newRating)}/>
              <TouchableOpacity style={styles.submitRating}
              onPress={() => {
                setRating(rating);
              }}>
                <Text style={styles.inputText}>Submit</Text>
              </TouchableOpacity>

      <Text style={styles.mainText}>2023 Chevrolet Blazer</Text>
        <Image source={chevrolet} style={styles.cars}/>
          <Text style={styles.ratingDisplay}>Your Rating: {rating}</Text>
          <Text style={styles.ratings}>Review:</Text>
            <TextInput style={styles.ratingInput} placeholder="Write a review"/>
          <Text style={styles.ratings}>Rating:</Text>
            <TextInput style={styles.ratingInput} placeholder="Enter rating"
            onChangeText={newRating => setRating(newRating)}/>
              <TouchableOpacity style={styles.submitRating}
              onPress={() => {
                setRating(rating);
              }}>
                <Text style={styles.inputText}>Submit</Text>
              </TouchableOpacity>
    </ScrollView>
  );
}

function InfoScreen({route}) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.mainText}>Information about these cars will go here</Text>
    </ScrollView>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#3976DE',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 24,
          color: 'black'
        },
        tabBarStyle: {
          backgroundColor: '#000000'
        }
      }}>
        <Tab.Screen name="Rate A Car" component={HomeScreen}/>
        <Tab.Screen name="Info" component={InfoScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainText: {
    fontSize: 22,
    marginTop: 16,
    paddingLeft: 10,
    paddingBottom: 10
  },
  cars: {
    width: 300,
    height: 200,
    marginLeft: 60,
  },
  ratings: {
    fontSize: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
  },
  ratingInput: {
    padding: 10,
    backgroundColor: '#ecf0f1',
    marginRight: 20,
    marginLeft: 20,
  },
  submitRating: {
    padding: 20,
    marginBottom: 20,
    marginTop: 10,
    backgroundColor: '#808080',
    marginRight: 150,
    marginLeft: 150,
  },
  inputText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  ratingDisplay: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
