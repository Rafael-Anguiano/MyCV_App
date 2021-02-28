import React from 'react'
import {Image, Alert} from 'react-native'
import {Button, Text, View, Card, CardItem,  DeckSwiper, Icon, Left, Right, Body, Header, Title, Fab} from 'native-base'
import * as WebBrowser from 'expo-web-browser';
import Clipboard from 'expo-clipboard';


export default class ProjectsSc extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          active: false
        };
    }

    render() {
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

        const cards = [
            {
                text: 'My Curriculum as an Application',
                name: 'One',
                image: require('./images/CVImage.png'),
                date: '2021',
                role: 'Programmer',
                program:'Text Editor / Expo',
                language:'Javascript',
                link:'https://github.com/Rafael-Anguiano/MyCV_App',
                description: 'A mobile application to use as a curriculum and show some of my information and abilities in a diferent way.'
            },
            {
                text: 'Amig@ de Familia',
                name: 'Two',
                image: require('./images/AmigoDeFamilia.png'),
                date: '2020',
                role: "Web Site and it's conection with Database",
                program:'Text Editor',
                language:'Python and Django / MySQL',
                link:'https://drive.google.com/drive/folders/1UTRWmSXOVHcqXi_Ux0vFL9peXepPJnRp?usp=sharing',
                description: "Is an application focused to be helpfull for seniors, and assist them and their families using reminders and easier ways to use their phones. I made the website where the people would register before using the application and its connection with a database."
            },
            {
                text: 'Guitar Store Inventory',
                name: 'Three',
                image: require('./images/InventarioGuitarra.png'),
                date: '2019',
                role: 'Programmer',
                program:'Text Editor / Console',
                language:'C++',
                link:'https://drive.google.com/drive/folders/1IaO47htF94l4LLPC9mrNCKdgopMmZihr?usp=sharing',
                description: 'A console simulator of an inventory where you can add registers and save them on a document, it can read them with the application and you can search info and sort them in a tree from.'
            },
            {
                text: 'Line-Follower Robot',
                name: 'Four',
                image: require('./images/CJ-6.png'),
                date: '2018',
                role: '3D Designer',
                program:'Solid Edge / Arduino',
                language:'C++',
                link: 'https://drive.google.com/drive/folders/1lVdZyjLsSMOf-LVv_D57yWo58ql4-kb2?usp=sharing',
                description: 'A drone designed in Solid Edge and programed in C++ able to follow a line to solve a maze, using ultrasonic and infrared sensors.'
            },
          ];

        return (
        <View style={{flexDirection: 'column', justifyContent: 'flex-start', backgroundColor:'#C1FAF6', flex:1}}>
            <Header style={{backgroundColor:'#45B39D'}}>
                <Body style={{flexDirection:'row'}}>
                    <Left>
                        <Title style={{fontWeight:'bold', marginLeft:20}}>Projects</Title>
                    </Left>
                    <Body style={{flexDirection:'row'}}>
                        <Icon name="caret-back-circle"/>
                    <Title style={{fontWeight:'bold', marginLeft:20}}>Swipe   </Title>
                    <Icon name="caret-forward-circle"/>
                    </Body>
                    
                </Body>
            </Header>
            <View>
                <DeckSwiper
                    dataSource={cards}
                    renderItem={item =>
                    <Card style={{ elevation: 3}}>
                        <CardItem>
                            <Left>
                                <Icon name="ribbon" style={{ color: 'orange' }} />
                                <Body>
                                    <Text style={{fontWeight:'bold'}}>{item.text}</Text>
                                    <Text note>{item.date}</Text>
                                </Body>
                                <Right>
                                    <Button rounded bordered success onPress={() => {WebBrowser.openBrowserAsync(item.link)}}>
                                        <Text style={{fontWeight:'bold'}}>CODE</Text>
                                    </Button>
                                </Right>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image style={{ height:200, flex:1}} source={item.image} />
                        </CardItem>
                        <CardItem bordered>
                            <Text style={{fontStyle:'italic'}}>Role: </Text>
                            <Text style={{fontWeight:'bold', textAlign:'justify'}}>{item.role}</Text>
                        </CardItem>
                        <CardItem>
                            <Text style={{fontStyle:'italic'}}>Program Used: </Text>
                            <Text style={{fontWeight:'bold'}}>{item.program}</Text>
                        </CardItem>
                        <CardItem bordered>
                            <Text style={{fontStyle:'italic'}}>Language Used: </Text>
                            <Text style={{fontWeight:'bold'}}>{item.language}</Text>
                        </CardItem>
                        <CardItem>
                            <Text style={{textAlign:'justify'}}>{item.description}</Text>
                        </CardItem>
                    </Card>
                    }
                />
            </View>
            
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