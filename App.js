import HomeScreen from './Screens/HomeScreen';
import Other from './Screens/Other';

import {
  createStackNavigator,
} from 'react-navigation';

const App = createStackNavigator(
  {
    Home:  HomeScreen,
    Other: Other 
  },
  {
    initialRouteName: 'Home',
  }
)

export default App;
