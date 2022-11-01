import React from 'react';
import {Text,View,ImageBackground,Image,TouchableOpacity} from 'react-native';
import Icon from "@expo/vector-icons/Entypo"

export default class Detail extends React.Component{
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
                <View style={{
                    paddingHorizontal:40,
                    backgroundColor:"#FFF",
                    height:"50%",
                    borderBottomLeftRadius:50,
                    borderBottomRightRadius:50
                }}>
                    <View style={{
                        flexDirection:"row",
                        width:"100%",
                        marginTop:40
                    }}>
                        <TouchableOpacity
                            onPress={()=>this.props.navigation.goBack()}
                            style={{
                                width:"50%",
                            }}
                        >

                            <Icon
                                name="chevron-left"
                                size={30}
                                color="#006bb3"
                            />
                        </TouchableOpacity>
                        <View style={{
                            width:"50%",
                            alignItems:"flex-end"
                        }}>
                            <Icon
                                name="dots-two-vertical"
                                size={24}
                                color="#006bb3"
                            />
                        </View>
                    </View>

                    <Image
                        source={require('../images/p2.jpg')}
                        style={{
                            height:100,
                            width:100,
                            borderRadius:20,
                            alignSelf:"center",
                            marginVertical:20
                        }}
                    />
                    <Text style={{
                        fontSize:22,
                        fontFamily:"Bold",
                        color:"black",
                        alignSelf:"center"
                    }}>
                        Elon Behzos
                    </Text>
                    <Text style={{
                        fontFamily:"Medium",
                        fontSize:16,
                        color:"#9ca1a2",
                        alignSelf:"center"
                    }}>
                        Bothell, Seattle
                    </Text>

                    
                    <View style={{
                        flexDirection:"row",
                        alignSelf:"center",
                        marginTop:20
                    }}>
                        <View>
                                <Text style={{
                                    fontFamily:"Bold",
                                    fontSize:15,
                                    color:"black",
                                    alignSelf:"center"
                                }}>1,000</Text>
                                <Text style={{
                                    fontFamily:"Medium",
                                    fontSize:16,
                                    color:"#9ca1a2",
                                    alignSelf:"center"
                                }}>
                                    Books
                                </Text>
                        </View>

                        <View style={{marginHorizontal:40}}>
                                <Text style={{
                                    fontFamily:"Bold",
                                    fontSize:15,
                                    color:"black",
                                    alignSelf:"center"
                                }}>15B</Text>
                                <Text style={{
                                    fontFamily:"Medium",
                                    fontSize:16,
                                    color:"#9ca1a2",
                                    alignSelf:"center"
                                }}>
                                    followers
                                </Text>
                        </View>


                        <View>
                                <Text style={{
                                    fontFamily:"Bold",
                                    fontSize:15,
                                    color:"black",
                                    alignSelf:"center"
                                }}>1</Text>
                                <Text style={{
                                    fontFamily:"Medium",
                                    fontSize:16,
                                    color:"#9ca1a2",
                                    alignSelf:"center"
                                }}>
                                    follows
                                </Text>
                        </View>
                    </View>
                </View>


                <View style={{
                    flexDirection:"row",
                    paddingHorizontal:40,
                    paddingTop:20
                }}>
                    <TouchableOpacity
                        onPress={this.onTabPressed}
                        style={{
                            borderBottomColor: this.state.collectionSelected ? "#FFF":"#044244",
                            borderBottomWidth:4,
                            paddingVertical:6,
                        }}
                    >
                        <Text style={{
                            fontFamily:"Bold",
                            color:this.state.collectionSelected ? "#FFF":"lightblue"
                        }}>COLLECTIONS</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={this.onTabPressed}
                        style={{
                            borderBottomColor: this.state.collectionSelected ? "#044244":"#FFF",
                            borderBottomWidth:4,
                            paddingVertical:6,
                            marginLeft:30
                        }}
                    >
                        <Text style={{
                            fontFamily:"Bold",
                            color:this.state.collectionSelected ? "lightblue":"#FFF"
                        }}>FEATURED</Text>
                    </TouchableOpacity>
                </View>


                <View style={{flexDirection:"row"}}>
                    <View style={{
                        backgroundColor:"lightblue",
                        height:260,
                        width:280,
                        marginHorizontal:40,
                        borderRadius:30,
                        marginTop:30
                    }}>
                        <ImageBackground
                            source={require('../images/7.jpg')}
                            style={{
                                width:280,
                                height:180
                            }}
                            imageStyle={{
                                borderRadius:30
                            }}
                        >
                            <View style={{
                                width:"100%",
                                alignItems:"flex-end"
                            }}>
                                    <TouchableOpacity style={{
                                        width:90,
                                        alignItems:"center",
                                        justifyContent:"center",
                                        marginTop:5,
                                        borderRadius:10,
                                        padding:1,
                                        marginRight:10,
                                        backgroundColor:"skyblue"
                                    }}>
                                        <Text>Upload Books</Text>
                                            <Icon
                                                name="edit"
                                                size={20}
                                                color="#FFF"
                                            />
                                    </TouchableOpacity>
                            </View>
                        </ImageBackground>
                        
                        <View style={{
                            paddingVertical:20,
                            paddingHorizontal:30
                        }}>
                            <Text style={{
                                fontFamily:"Bold",
                                color:"black",
                                fontSize:15
                            }}>Book Contributions</Text>
                            <Text style={{
                                fontFamily:"Medium",
                                color:"black",
                                fontSize:12
                            }}>
                                1,003 Books
                            </Text>
                        </View>
                    </View>
                
                    
                    <View style={{
                        height:180,
                        backgroundColor:"#006bb3",
                        width:20,
                        marginLeft:-20,
                        marginTop:70,
                        borderTopLeftRadius:20,
                        borderBottomLeftRadius:20
                    }}>

                    </View>
                </View>
            </View>
        )
    }
}
