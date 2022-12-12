import React, {useState} from 'react';
import { StyleSheet, Text, ScrollView, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
//import ListView from 'deprecated-react-native-listview';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as SplashScreen from 'expo-splash-screen';
import Panel from './Panel';
import * as WebBrowser from 'expo-web-browser';
import Button from './Button';
import data from './carInfo.json';

const toyota = require('./Images/ToyotaGrSupra2023.png');
const nissan = require('./Images/NissanSkylineR34.png');
const chevrolet = require('./Images/ChevroletBlazer2023.png');
const nissangtr = require('./Images/NissanGT-R.png');
const cadillac = require('./Images/CadillacEscalade2022.png');
const subaru = require('./Images/2023SubaruCrosstrek.png');

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

function HomeScreen({}) {  
  const [rating, setRating] = useState(-1);
  const [rating1, setRating1] = useState(-1);
  const [rating2, setRating2] = useState(-1);
  const [rating3, setRating3] = useState(-1);
  const [rating4, setRating4] = useState(-1);
  const [rating5, setRating5] = useState(-1);
  const [submitted, SetSubmitted] = useState(false);
  const onPressHandler = () => {
    SetSubmitted(!submitted);
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.mainText}>2023 Toyota GR Supra</Text>
        <Image source={toyota} style={styles.cars}/>
          {submitted ?
          <Text style={styles.ratingDisplay}>{rating >= 0 ? 'Your Rating: ' + rating :''}</Text>
          : null
          }
          <Text style={styles.ratings}>Review:</Text>
            <TextInput style={styles.ratingInput} placeholder="Write a review"/>
          <Text style={styles.ratings}>Rating:</Text>
            <TextInput style={styles.ratingInput} placeholder="Enter rating"
            onChangeText={(newRating) => setRating(newRating)}/>
              <TouchableOpacity style={styles.submitRating}
              onPress={onPressHandler}>
                <Text style={styles.inputText}>Submit</Text>
              </TouchableOpacity>

      <Text style={styles.mainText}>Nissan Skyline GT-R R34</Text>
        <Image source={nissan} style={styles.cars}/>
          {submitted ?
          <Text style={styles.ratingDisplay}>{rating1 >= 0 ? 'Your Rating: ' + rating1 :''}</Text>
          : null
          }
          <Text style={styles.ratings}>Review:</Text>
            <TextInput style={styles.ratingInput} placeholder="Write a review"/>
          <Text style={styles.ratings}>Rating:</Text>
            <TextInput style={styles.ratingInput} placeholder="Enter rating"
            onChangeText={(newRating) => setRating1(newRating)}/>
              <TouchableOpacity style={styles.submitRating}
              onPress={onPressHandler}>
                <Text style={styles.inputText}>Submit</Text>
              </TouchableOpacity>

      <Text style={styles.mainText}>2023 Chevrolet Blazer</Text>
        <Image source={chevrolet} style={styles.cars}/>
          {submitted ?
          <Text style={styles.ratingDisplay}>{rating2 >= 0 ? 'Your Rating: ' + rating2 :''}</Text>
          : null
          }
          <Text style={styles.ratings}>Review:</Text>
            <TextInput style={styles.ratingInput} placeholder="Write a review"/>
          <Text style={styles.ratings}>Rating:</Text>
            <TextInput style={styles.ratingInput} placeholder="Enter rating"
            onChangeText={(newRating) => setRating2(newRating)}/>
              <TouchableOpacity style={styles.submitRating}
              onPress={onPressHandler}>
                <Text style={styles.inputText}>Submit</Text>
              </TouchableOpacity>

      <Text style={styles.mainText}>Nissan GT-R</Text>
        <Image source={nissangtr} style={styles.cars}/>
          {submitted ?
          <Text style={styles.ratingDisplay}>{rating3 >= 0 ? 'Your Rating: ' + rating3 :''}</Text>
          : null
          }
          <Text style={styles.ratings}>Review:</Text>
            <TextInput style={styles.ratingInput} placeholder="Write a review"/>
          <Text style={styles.ratings}>Rating:</Text>
            <TextInput style={styles.ratingInput} placeholder="Enter rating"
            onChangeText={(newRating) => setRating3(newRating)}/>
              <TouchableOpacity style={styles.submitRating}
              onPress={onPressHandler}>
                <Text style={styles.inputText}>Submit</Text>
              </TouchableOpacity>

      <Text style={styles.mainText}>2022 Cadillac Escalade</Text>
        <Image source={cadillac} style={styles.cars}/>
          {submitted ?
          <Text style={styles.ratingDisplay}>{rating4 >= 0 ? 'Your Rating: ' + rating4 :''}</Text>
          : null
          }
          <Text style={styles.ratings}>Review:</Text>
            <TextInput style={styles.ratingInput} placeholder="Write a review"/>
          <Text style={styles.ratings}>Rating:</Text>
            <TextInput style={styles.ratingInput} placeholder="Enter rating"
            onChangeText={(newRating) => setRating4(newRating)}/>
              <TouchableOpacity style={styles.submitRating}
              onPress={onPressHandler}>
                <Text style={styles.inputText}>Submit</Text>
              </TouchableOpacity>

      <Text style={styles.mainText}>2023 Subaru Crosstrek</Text>
        <Image source={subaru} style={styles.cars}/>
          {submitted ?
          <Text style={styles.ratingDisplay}>{rating5 >= 0 ? 'Your Rating: ' + rating5 :''}</Text>
          : null
          }
          <Text style={styles.ratings}>Review:</Text>
            <TextInput style={styles.ratingInput} placeholder="Write a review"/>
          <Text style={styles.ratings}>Rating:</Text>
            <TextInput style={styles.ratingInput} placeholder="Enter rating"
            onChangeText={(newRating) => setRating5(newRating)}/>
              <TouchableOpacity style={styles.submitRating}
              onPress={onPressHandler}>
                <Text style={styles.inputText}>Submit</Text>
              </TouchableOpacity>
    </ScrollView>
  );
}

function InfoScreen({}) {
  return (
    <ScrollView style={styles.container}>
      <Panel title={'2023 Toyota GR Supra'} style={styles.panel}>
        <FlatList data={data} renderItem={renderRow}/>
        <Button info style={styles.button}
      onPress={() => WebBrowser.openBrowserAsync('https://www.toyota.com/grsupra/')}>Listing</Button>
      </Panel>
      <Panel title={'Nissan Skyline GT-R R34'} style={styles.panel}>
        <Text style={styles.panelText}>Around $61,425.25 or more depending on where you find it</Text>
        <Text style={styles.panelText}>In-line 6-cylinder twin-turbo</Text>
        <Text style={styles.panelText}>All-wheel drive</Text>
        <Text style={styles.panelText}>0-60mph in 4.8 seconds</Text>
        <Button info style={styles.button}
      onPress={() => WebBrowser.openBrowserAsync('https://www.classic.com/m/nissan/skyline/r34/')}>Listings</Button>
      </Panel>
      <Panel title={'2023 Chevrolet Blazer'} style={styles.panel}>
        <Text style={styles.panelText}>$35,100 to $42,800</Text>
        <Text style={styles.panelText}>4-Cylinder Turbo 2.0 Liter</Text>
        <Text style={styles.panelText}>Front-wheel or All-wheel drive</Text>
        <Text style={styles.panelText}>0-60mph in 8.4 seconds</Text>
        <Button info style={styles.button}
      onPress={() => WebBrowser.openBrowserAsync('https://www.chevrolet.com/suvs/trailblazer')}>Listing</Button>
      </Panel>
      <Panel title={'Nissan GT-R'} style={styles.panel}>
        <Text style={styles.panelText}>$138,490</Text>
        <Text style={styles.panelText}>3.8-liter V-6 Twin-turbo</Text>
        <Text style={styles.panelText}>All-wheel drive</Text>
        <Text style={styles.panelText}>0-60mph in 2.9 seconds</Text>
        <Button info style={styles.button}
      onPress={() => WebBrowser.openBrowserAsync('https://www.carfax.com/Used-Nissan-GT-R_w534')}>Listings</Button>
      </Panel>
      <Panel title={'2022 Cadillac Escalade'} style={styles.panel}>
        <Text style={styles.panelText}>$77,795 to $149,695</Text>
        <Text style={styles.panelText}>6.2-liter V-8</Text>
        <Text style={styles.panelText}>All-wheel drive</Text>
        <Text style={styles.panelText}>0-60mph in 5.25 seconds</Text>
        <Button info style={styles.button}
      onPress={() => WebBrowser.openBrowserAsync('https://www.carfax.com/Used-2022-Cadillac-Escalade_z38668')}>Listing</Button>
      </Panel>
      <Panel title={'2023 Subaru CrossTrek'} style={styles.panel}>
        <Text style={styles.panelText}>$23,645 to $29,495</Text>
        <Text style={styles.panelText}>2.0-liter 4-cylinder SUBARU BOXER engine</Text>
        <Text style={styles.panelText}>All-wheel drive</Text>
        <Text style={styles.panelText}>0-60pmh in 7.6 to 8.7 seconds</Text>
        <Button info style={styles.button}
      onPress={() => WebBrowser.openBrowserAsync('https://www.subaru.com/vehicles/crosstrek.html')}>Listing</Button>
      </Panel>
    </ScrollView>
  );
}

function renderRow({item}) {
  return (
    <ScrollView style={styles.listView}>
      <Text style={styles.panelText}>${item.price}</Text>
      <Text style={styles.panelText}>{item.engine}</Text>
      <Text style={styles.panelText}>{item.drivetrain}</Text>
      <Text style={styles.panelText}>{item.acceleration}</Text>
    </ScrollView>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {

  state = {
    links: [
      {
        url: 'https://www.toyota.com/grsupra/',
        type: 'internal link'
      },
      {
        url: 'https://www.classic.com/m/nissan/skyline/r34/',
        type: 'internal link'
      },
      {
        url: 'https://www.chevrolet.com/suvs/trailblazer',
        type: 'internal link'
      },
      {
        url: 'https://www.carfax.com/Used-Nissan-GT-R_w534',
        type: 'internal link'
      },
      {
        url: 'https://www.carfax.com/Used-2022-Cadillac-Escalade_z38668',
        type: 'internal link'
      },
      {
        url: 'https://www.subaru.com/vehicles/crosstrek.html',
        type: 'internal link'
      }
    ]
  }

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
          backgroundColor: '#000000',
        }
      }}>
        <Tab.Screen name="Rate A Car" component={HomeScreen}/>
        <Tab.Screen name="Information" component={InfoScreen}/>
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
    borderWidth: 2,
    borderColor: 'black',
  },
  inputText: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff',
  },
  ratingDisplay: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  panel: {
    marginBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'black'
  },
  panelText: {
    fontSize: 18,
    marginBottom: 15,
    paddingLeft: 10,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 135,
    marginRight: 135,
    marginBottom: 10,
  },
  listView: {
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
  }
});
