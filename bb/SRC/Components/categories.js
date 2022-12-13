import { StyleSheet, Text, View, ScrollView} from 'react-native'
import React from 'react'
// import { colors } from '../globals/style'
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Categories = () => {
    return (
        <View style={styles.container}>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.box}>
                    <Text style={styles.mytext}>English</Text>
                </View>

                <View style={styles.box}>
                    <Text style={styles.mytext}>Math</Text>
                </View>

                <View style={styles.box}>
                    <Text style={styles.mytext}>Biology</Text>
                </View>

                <View style={styles.box}>
                    <Text style={styles.mytext}>Physics</Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.mytext}>Chemistry</Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.mytext}>History</Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.mytext}>Technology</Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.mytext}>Foreign Language</Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.mytext}>Fiction</Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.mytext}>Comics</Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.mytext}>Novel</Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.mytext}>Others</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default Categories

const styles = StyleSheet.create({
    container: {
        backgroundColor:'white' ,
        width: '81%',
        // height: 100,
        // alignItems: 'center',
        elevation: 10,
        borderRadius: 10,
    },
    head: {
        color:'black',
        fontSize: 25,
        fontWeight: '300',
        margin: 10,
        alignSelf: 'center',
        paddingBottom: 5,
        borderBottomColor: 'red',
        borderBottomWidth: 1,
    },
    box: {
        backgroundColor:'white',
        elevation: 20,
        margin: 10,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    myicon: {
        marginRight: 10,
        color:'black',
    },
    mytext: {
        color: 'black',
    }
})