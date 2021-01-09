import React from 'react';
import {Text, View} from 'react-native';
import {Thumbnail} from 'native-base'
import * as SplashScreen from 'expo-splash-screen';
import MainStack from './src/navigation/MainStack'

export default class App extends React.Component {
  state = {
    appIsReady: false,
    timer: false
  };

  async componentDidMount() {
    try {
      setTimeout(() => {
        this.setState({timer: true})
     }, 2500)
      await SplashScreen.preventAutoHideAsync();
    } catch (e) {
      console.warn(e);
    }
    this.prepareResources();
  }

  prepareResources = async () => {
    try {
      await performAPICalls();
      await downloadAssets();
    } catch (e) {
      console.warn(e);
    } finally {
      this.setState({ appIsReady: true }, async () => {
        await SplashScreen.hideAsync();
      });
    }
  };

  render() {
    const loading = {uri: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/dae67631234507.564a1d230a290.gif"}

    if (!this.state.appIsReady || !this.state.timer) {
      return (//#9AF9E5
        <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#C1FAF6'}}>
          <Text 
            style={{
              fontWeight:'bold', 
              fontSize:30, 
              fontFamily:'serif', 
              fontStyle:'italic', 
              color:'#2D98B3'}}>
                RAFAEL
          </Text>
          <Text 
            style={{
              fontWeight:'bold', 
              fontSize:30, 
              fontFamily:'serif', 
              fontStyle:'italic', 
              color:'#2D98B3'}}>
                ANGUIANO
          </Text>
          <Thumbnail large square source={loading}></Thumbnail>
          <Text 
            style={{
              fontWeight:'bold', 
              fontSize:30, 
              fontFamily:'serif', 
              fontStyle:'italic',
              color:'#2D98B3'}}>
                CV
            </Text>
        </View>
      );
    }
    return (
      <MainStack/>
    );  
  }
}

async function performAPICalls() {}
async function downloadAssets() {}
