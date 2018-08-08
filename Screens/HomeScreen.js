import React from 'react';
import {
  Image, 
  StyleSheet,
  Text, 
  View, 
} from 'react-native';
import { Icon, Button, List, ListItem, Card } from 'react-native-elements';
import { ScrollView } from '../node_modules/react-native-gesture-handler';

class HomeScreen extends React.Component {

  render() {
    const { navigate } = this.props.navigation;
    const houseList = [
      {
        name: 'The Original: House - Dallas, TX',
        imgUrl:'https://photos.zillowstatic.com/p_f/IS15g1sjxeqcgwz.jpg',
        description: 'Lived there from 0-12'
      },
      {
        name: 'Beechwood - Coppell, TX',
        imgUrl: 'https://photos.zillowstatic.com/p_f/IS95iy1zij7ng81000000000.jpg',
        description: 'Through the formitable years of life'
      },
      {
        name: 'The Villagio - Provo, UT',
        imgUrl: 'https://photos.zillowstatic.com/p_f/IS1w4zho3iwsbs3.jpg',
        description: 'Where I met the one and only',
      },
      {
        name: 'La Casa Bifamiliare - Fayetteville, AR',
        imgUrl: 'https://photos.zillowstatic.com/p_f/ISmu1oql9cyy2p1000000000.jpg',
        description: 'Our first steps into the south',
      },
      {
        name: 'The Elaine House - Fayetteville, AR',
        imgUrl: 'https://photos.zillowstatic.com/p_f/ISy3xfsrk028121000000000.jpg',
        description: 'The first house we owned',
      }
    ]
    return (
      <ScrollView>
        <Image
          source={require('../twitter.jpeg')}
        />
        <Text style={styles.header}>HELLO WORLD</Text>
        <Text style={styles.body}>A get-to-know-me app that supposedly will help me with React-Native</Text>
        <View style={styles.arrowIcon}>
          <Icon type='font-awesome' name='arrow-down' />
        </View>
        {
          houseList.map((house, i) => {
            return (
              <Card
                key={i}
                title={house.name}
                image={{uri: house.imgUrl}}
              >
                <Text style={{marginBottom: 10}}>
                  {house.description}
                </Text>
              </Card>
            )
          })
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 10,
  },
  body: {
    fontSize: 18,
    padding: 10,
  },
  arrowIcon: {
    marginTop: 5,
    alignItems:'center',
  }
})

export default HomeScreen;