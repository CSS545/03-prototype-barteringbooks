import React from 'react';
import {Text,View,ImageBackground,Image,TouchableOpacity} from 'react-native';
import Icon from "@expo/vector-icons/Entypo"
export default class Menu extends React.Component{

    state={
        collectionSelected:true
    }
    onTabPressed=()=>{
        this.setState({ collectionSelected:!this.state.collectionSelected})
    }
    render(){
        return(
            <View style={{
                backgroundColor:"#006bb3",
                height:"100%",
            }}>
                 <Text style={{
                                fontFamily:"Bold",
                                color:"black",
                                fontSize:15
                            }}> Genres </Text>
                </View>
        )
        }
    }   
