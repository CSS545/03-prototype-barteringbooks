import React from 'react';
import {View,Text,Image,ImageBackground,TouchableOpacity} from 'react-native';
import {ScrollView,TextInput} from 'react-native-gesture-handler';
import Icon from '@expo/vector-icons/Entypo';
import Posts from '../screens/Posts'
import { Entypo } from '@expo/vector-icons'; 



export default class Home extends React.Component{
    state={
        popularSelected:true
    }
    onTabPressed=()=>{
        this.setState({popularSelected:!this.state.popularSelected})
    }
    render(){
        return(
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                height:"100%",
                backgroundColor:"#006bb3"
            }}
          >
              <View style={{
                  height:260,
                  width:"100%",
                  paddingHorizontal:35
              }}>
                  <View style={{
                      flexDirection:"row",
                      width:"100%",
                      paddingTop:40,
                      alignItems:"center"
                  }}>
                      <View style={{
                          width:"50%"
                      }}>
                        <Entypo name="book" size={30} color="black" />
                      </View>
                      <View style={{
                          width:"50%",
                          alignItems:"flex-end",
                      }}>
                          <Icon name = "dots-two-vertical"
                            size={22}
                            color="#d2d2d2"
                            style={{
                                marginRight:-7,
                                marginTop:7
                            }}/>
                      </View>
                  </View>


                <Text style={{
                    fontFamily:"Bold",
                    fontSize:25,
                    color:"#FFF",
                    paddingVertical:25
                }}>Bartering Books</Text>

                <View style={{
                    flexDirection:"row",
                    borderColor:"#9ca1a2",
                    borderRadius:20,
                    borderWidth:1.0,
                    paddingVertical:5,
                    alignItems:"center"
                }}>
                    <TextInput
                        placeholder="Search Books ..."
                        style={{
                            paddingHorizontal:20,
                            fontFamily:"Medium",
                            fontSize:20,
                            width:"90%",
                            color:'black',
                            fontFamily:'Bold'
                        }}
                    />
                    <Icon name="magnifying-glass"
                          size={15}
                          color="#9ca1a2"/>
                </View>

              </View>

              <View style={{
                  backgroundColor:"#FFF",
                  borderTopLeftRadius:40,
                  borderTopRightRadius:40,
                  height:1000,
                  paddingHorizontal:35
              }}>
                  <View style={{
                      flexDirection:"row",
                      paddingTop:20
                  }}>
                      <TouchableOpacity
                        onPress={this.onTabPressed}
                        style={{
                            borderBottomColor:this.state.popularSelected ? "#044244":"#FFF",
                            borderBottomWidth:4,
                            paddingVertical:6
                        }}
                      >
                          <Text style={{
                              fontFamily:"Bold",
                              color:this.state.popularSelected ? "#044244":"#9ca1a2"
                          }}>MOST POPULAR</Text>
                      </TouchableOpacity>


                      <TouchableOpacity
                        onPress={this.onTabPressed}
                        style={{
                            borderBottomColor:this.state.popularSelected ? "#FFF":"#044244",
                            borderBottomWidth:4,
                            paddingVertical:6,
                            marginLeft:30
                        }}
                      >
                          <Text style={{
                              fontFamily:"Bold",
                              color:this.state.popularSelected ? "#9ca1a2":"#044244"
                          }}>RECENT</Text>
                      </TouchableOpacity>
                  </View>

                  <View style={{
                      flexDirection:"row"
                  }}>
                      <Posts
                        onPress={()=>this.props.navigation.navigate('Detail')}
                        name="JFK"
                        profile={require('../images/p1.jpg')}
                        photo={require('../images/5.jpg')}
                      />

                      <View style={{
                          height:160,
                          backgroundColor:"#006bb3",
                          width:20,
                          marginLeft:20,
                          marginTop:120,
                          borderTopLeftRadius:20,
                          borderBottomLeftRadius:20
                      }}>

                      </View>

                  </View>



                  <View style={{
                      flexDirection:"row"
                  }}>
                     
                      <View style={{
                          height:160,
                          backgroundColor:"#006bb3",
                          width:20,
                          marginLeft:-40,
                          marginRight:20,
                          marginTop:120,
                          borderTopRightRadius:20,
                          borderBottomRightRadius:20
                      }}>

                      </View>

                      <Posts
                        onPress={()=>this.props.navigation.navigate('Detail')}
                        name="XYZ"
                        profile={require('../images/p2.jpg')}
                        photo={require('../images/6.jpg')}
                      />

                  </View>

                  <View style={{
                      flexDirection:"row"
                  }}>
                      <Posts
                        onPress={()=>this.props.navigation.navigate('Detail')}
                        name="ABC"
                        profile={require('../images/p1.jpg')}
                        photo={require('../images/3.jpg')}
                      />

                      <View style={{
                          height:160,
                          backgroundColor:"#006bb3",
                          width:20,
                          marginLeft:20,
                          marginTop:120,
                          borderTopLeftRadius:20,
                          borderBottomLeftRadius:20
                      }}>

                      </View>

                  </View>
              </View>

          </ScrollView>
        )
    }
}
