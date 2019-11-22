import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import HistoryScreen from './pages/HistoryScreen';
import HomeScreen from './pages/HomeScreen';
import CashierScreen from './pages/CashierScreen';
import TabBar from './Common/TabBar';
import Icon from './Common/Icon';

const HistoryStack = createStackNavigator(
  {
    History: {screen: HistoryScreen},
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#42f44b',
      },
      headerTintColor: '#FFFFFF',
      title: 'History',
      header: null,
    },
  },
);
const HomeStack = createStackNavigator(
  {
    Home: {screen: HomeScreen},
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#42f44b',
      },
      headerTintColor: '#FFFFFF',
      title: 'Home',
      header: null,
    },
  },
);
const CashierStack = createStackNavigator(
  {
    Cashier: {screen: CashierScreen},
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#42f44b',
      },
      headerTintColor: '#FFFFFF',
      title: 'Cashier',
      header: null,
    },
  },
);

const App = createBottomTabNavigator(
  {
    History: {screen: HistoryStack},
    Home: {screen: HomeStack},
    Cashier: {screen: CashierStack},
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          var soureImge;
          if (tintColor === '#CBCBCB') {
            soureImge = 'onHome';
          } else {
            soureImge = 'onHomeActive';
          }
          return <Icon name={soureImge} size={68} color={tintColor} />;
          // iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          // return <IconComponent name={iconName} size={25} color={tintColor} />;
        } else if (routeName === 'History') {
          iconName = `ios-checkmark-circle${focused ? '' : '-outline'}`;
          return <IconComponent name={iconName} size={25} color={tintColor} />;
        } else if (routeName === 'Cashier') {
          iconName = `ios-checkmark-circle${focused ? '' : '-outline'}`;
          return <IconComponent name={iconName} size={25} color={tintColor} />;
        }
      },
    }),
    initialRouteName: 'Home',
    tabBarComponent: TabBar,
    tabBarOptions: {
      activeTintColor: '#009972',
      inactiveTintColor: '#146150',
    },
  },
);
export default createAppContainer(App);
