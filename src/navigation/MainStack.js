import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {Icon} from 'native-base';
import AboutMeSc from '../screens/AboutMeSc'
import ProjectsSc from '../screens/ProjectsSc'
import LanguagesSc from '../screens/LanguagesSc'


const Tab = createBottomTabNavigator();

export default class MainTab extends React.Component {

  render() {
      return (
        <NavigationContainer>
          <Tab.Navigator
            tabBarOptions={{
              activeTintColor: 'black',
              inactiveTintColor: '#616A6B',
              activeBackgroundColor:'#45B39D',
              inactiveBackgroundColor:'#A9DFBF'
            }}
          >
            <Tab.Screen 
              name="AboutMe" 
              component={AboutMeSc} 
              options={{
                tabBarLabel:'ABOUT ME',
                tabBarIcon: ({}) => (
                  <Icon name='person' style={{color:'#315581'}}/>
                )}}/>

            <Tab.Screen 
              name="Projects" 
              component={ProjectsSc} 
              options={{
                tabBarLabel:'PROJECTS',
                tabBarIcon: ({}) => (
                  <Icon name='folder' style={{color:'orange'}}/>
                )}}/>

            <Tab.Screen 
              name="Languages" 
              component={LanguagesSc} 
              options={{
                tabBarLabel:'LANGUAGES',
                tabBarIcon: ({}) => (
                  <Icon name='code' style={{color:'#444094'}}/>
                )}}/>
          </Tab.Navigator>
        </NavigationContainer>
      );
    }
}