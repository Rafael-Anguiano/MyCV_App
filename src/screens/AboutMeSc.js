import React from 'react'
import {TouchableOpacity, ScrollView, Alert} from 'react-native'
import {Button, Text, View, Card, CardItem, Icon, Left, Body, Header, Title, Thumbnail, Fab} from 'native-base'
import * as WebBrowser from 'expo-web-browser';
import Clipboard from 'expo-clipboard';

export default class AboutMeSc extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          active: false
        };
    }

    render() {
        const { navigation } = this.props;
        const MySelf = {uri: "https://1.bp.blogspot.com/-Wez1q3pM4Kc/X_Zgx6hEQbI/AAAAAAAAACk/wEawLE_pl0cEfTQMB_DwhKsVZnblzzIyQCLcBGAsYHQ/s320/Yo.png"}
        const MaristaLogo = { uri: "https://www.marista.edu.mx/files/media/image/element_cabe847850553119dfa2a539f64b838f.gif" };
        const GaribaldiLogo = { uri: "https://inscripcion.colegiossalesianosgdl.com/images/BotonCAG.png" };
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
                    <Title style={{fontWeight:'bold', marginLeft:20}}>About Me</Title>
                </Body>
            </Header>
            <ScrollView>
                <View style={{marginTop: 10, marginBottom:10}}>
                    <Card style={{width: '93%', alignSelf:'center'}}>
                        <TouchableOpacity onPress={()=> navigation.navigate('CuartaSc')}>
                        <CardItem bordered>
                            <Left>
                                <Thumbnail source={MySelf} />         
                                <Body>
                                    <Text style={{fontWeight:'bold'}}>Rafael de Jesús</Text>
                                    <Text style={{fontWeight:'bold'}}>Anguiano Suárez del Real</Text>
                                    <Text note>Ingeniero en Cibernética y Sistemas Computacionales</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        </TouchableOpacity>
                        <CardItem cardBody bordered>
                            <Body style={{margin:15}}>
                                <Text style={{fontWeight:'bold', color:'#2E7D77' }}>
                                    <Icon name='person-circle' style={{color:'#2E7D77', fontSize:20}}> </Icon>
                                    Who am I?
                                </Text>
                                <Text style={{marginTop:10, textAlign: "justify"}}>
                                    I'm an engineering student motivated to learn and grow both professionally and personally. 
                                </Text>
                                <Text style={{textAlign: "justify"}}> 
                                    I'm interested in software development,
                                    and it's application in life as an enhancer and accelerator of our abilities
                                    and activities.
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem style={{flexDirection:'column'}}>
                            <Body>
                                <Text style={{fontWeight:'bold', color:'#2E7D77', marginBottom:10}}>
                                    <Icon name='school' style={{color:'#2E7D77', fontSize:20}}> </Icon>
                                    Studies
                                </Text>
                            </Body>
                            <Left>
                                <Thumbnail source={MaristaLogo} />         
                                <Body>
                                    <Text style={{fontWeight:'bold'}}>Universidad Marista de Guadalajara</Text>
                                    <Text note>Licenciatura en Ingeniería Cibernética y Sistemas Computacionales</Text>
                                    <Text note style={{fontStyle:'italic'}}>August 2018 - Today</Text>
                                    <Text note style={{fontWeight:'bold'}}>Studying 6th Semester</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem bordered>
                            <Left>
                                <Thumbnail source={GaribaldiLogo} />         
                                <Body>
                                    <Text style={{fontWeight:'bold'}}>Colegio Salesiano Anahuac Garibaldi</Text>
                                    <Text note style={{fontStyle:'italic'}}>August 2015 - June 2018</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem bordered cardBody>
                            <Body style={{margin:15}}>
                                <Text style={{fontWeight:'bold', color:'#2E7D77' }}>
                                    <Icon name='color-wand' style={{color:'#2E7D77', fontSize:20}}> </Icon>
                                    Abilities
                                </Text>
                                <Text style={{marginTop:10, textAlign: "justify"}}>
                                    <Icon name='sunny' style={{color:'#315581', fontSize:20}}/>  Lively 
                                </Text>
                                <Text style={{marginTop:3, textAlign: "justify"}}>
                                    <Icon name='musical-notes' style={{color:'#315581', fontSize:20}}/>  Creative
                                </Text>
                                <Text style={{marginTop:3, textAlign: "justify"}}>
                                    <Icon name='file-tray-stacked' style={{color:'#315581', fontSize:20}}/>  Arranged 
                                </Text>
                                <Text style={{marginTop:3, textAlign: "justify"}}>
                                    <Icon name='star' style={{color:'#315581', fontSize:20}}/>  Responsable 
                                </Text>
                                <Text style={{marginTop:3, textAlign: "justify"}}>
                                    <Icon name='stopwatch' style={{color:'#315581', fontSize:20}}/>  Quick Learner 
                                </Text>
                                <Text style={{marginTop:3, textAlign: "justify"}}>
                                    <Icon name='people' style={{color:'#315581', fontSize:20}}/>  Good at teamwork 
                                </Text>
                            </Body>
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
                <Button 
                    style={{ backgroundColor: '#000000' }}
                    onPress={() => WebBrowser.openBrowserAsync('https://github.com/Rafael-Anguiano')}>
                    <Icon name="logo-github" />
                </Button>
            </Fab>
        </View>
        )
    }
}
