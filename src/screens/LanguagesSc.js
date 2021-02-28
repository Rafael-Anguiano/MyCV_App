import React from 'react'
import { ScrollView, TouchableOpacity, Image, Alert} from 'react-native'
import {Button, Text, View, Card, CardItem, Icon, Left, Right, Body, Header, Title, Fab} from 'native-base'
import * as WebBrowser from 'expo-web-browser';
import Clipboard from 'expo-clipboard';

export default class LanguagesSc extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          active: false
        };
    }

    render() {
        const { navigation } = this.props
        const image = { uri: "https://miro.medium.com/max/1000/1*unmVsOH7qujPeBwFN5Y2Zw.png" };
        const mailAlert = () => {
            Alert.alert(
                "Email", //Title 
                "rj.anguiano.23@gmail.com", //Body
                [
                    {
                        text:"Mail",
                        onPress: () => WebBrowser.openBrowserAsync('mailto:rj.anguiano.23@gmail.com')
                    },
                    {
                        text:"Copy", 
                        onPress: ()=> Clipboard.setString('rj.anguiano.23@gmail.com')
                    },
                    {
                        text:"OK" 
                    }
                ],
                {cancelable:false}
            )
        }

        return (
            <View style={{flexDirection: 'column', justifyContent: 'center', backgroundColor:'#C1FAF6', flex:1}}>
            <Header style={{backgroundColor:'#45B39D'}}>
                <Body>
                    <Title style={{fontWeight:'bold', marginLeft:20}}>Languages</Title>
                </Body>
            </Header>
            <ScrollView>
                <View style={{marginTop: 10, marginBottom:10}}>
                    <Card style={{width: '93%', alignSelf:'center'}}>
                        <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
                                <CardItem cardBody style={{ justifyContent: 'center' }}>
                                    <Image source={image} style={{height: 200, width: null, flex:1}}/>
                                </CardItem>
                        </TouchableOpacity>
                        <CardItem style={{flexDirection:'column', alignItems:'flex-start'}}>
                            <Text>
                                <Icon name="mic" style={{fontSize:22, color:'#B39B14'}}> </Icon>English
                            </Text>
                            <Text note style={{marginLeft:22}}>B2 (Toefl)</Text>
                        </CardItem>
                        <CardItem style={{flexDirection:'column', alignItems:'flex-start'}}>
                            <Text>
                                <Icon name="mic" style={{fontSize:22, color:'#B39B14'}}> </Icon>Spanish
                            </Text>
                            <Text note style={{marginLeft:22}}>Native</Text>
                        </CardItem>
                        <CardItem>
                            <Text>
                                <Icon name="star" style={{fontSize:22, color:'#B39B14'}}> </Icon>Git
                            </Text>
                        </CardItem>
                        <CardItem>
                            <Text>
                                <Icon name="star" style={{fontSize:22, color:'#B39B14'}}> </Icon>Javascript
                            </Text>
                        </CardItem>
                        <CardItem>
                            <Text>
                                <Icon name="star" style={{fontSize:22, color:'#B39B14'}}> </Icon>ReactJS
                            </Text>
                        </CardItem>
                        <CardItem>
                            <Text>
                                <Icon name="star" style={{fontSize:22, color:'#B39B14'}}> </Icon>React Native
                            </Text>
                        </CardItem>
                        <CardItem>
                            <Text>
                                <Icon name="star" style={{fontSize:22, color:'#B39B14'}}> </Icon>C++
                            </Text>
                        </CardItem>
                        <CardItem>
                            <Text>
                                <Icon name="star" style={{fontSize:22, color:'#B39B14'}}> </Icon>C
                            </Text>
                        </CardItem>
                        <CardItem>
                            <Text>
                                <Icon name="star" style={{fontSize:22, color:'#B39B14'}}> </Icon>HTML/CSS
                            </Text>
                        </CardItem>
                        <CardItem>
                            <Text>
                                <Icon name="star" style={{fontSize:22, color:'#B39B14'}}> </Icon>SQL
                            </Text>
                        </CardItem>
                        <CardItem style={{flexDirection:'column', alignItems:'flex-start'}}>
                            <Text>
                                <Icon name="star" style={{fontSize:22, color:'#B39B14'}}> </Icon>Python/Django
                            </Text>
                            <Text note style={{marginLeft:22}}>Basic</Text>
                        </CardItem>
                    </Card>
                </View> 
            </ScrollView>
            <Fab
                active={this.state.active}
                direction="up"
                containerStyle={{ }}
                style={{ backgroundColor: '#5067FF' }}
                position="bottomRight"
                onPress={() => this.setState({ active: !this.state.active })}>
                <Icon name="person-add" />
                <Button 
                    style={{ backgroundColor: '#34A34F' }} 
                    onPress={() => WebBrowser.openBrowserAsync('https://wa.me/+523331504871')}>
                    <Icon name="logo-whatsapp" />
                </Button>
                <Button 
                    style={{ backgroundColor: '#3B5998' }}
                    onPress={() => WebBrowser.openBrowserAsync('https://m.me/rafael.anguiano.507')}>
                    <Icon name="chatbubble-ellipses" />
                </Button>
                <Button 
                    style={{ backgroundColor: '#DD5144' }}
                    onPress={() => mailAlert()}>
                    <Icon name="mail" />
                </Button>
            </Fab>
        </View>
        )
    }
}