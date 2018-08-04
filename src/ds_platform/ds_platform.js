import React, { Component} from 'react';
import { StyleSheet, Text, View, Platform, Dimensions } from 'react-native';
import SuperText from '../widgets/supertext'

class DsPlatform extends Component {
    constructor(props){
        super(props)

        this.state = {
            os:Platform.OS,
            orientation: Dimensions.get('window').height > 500 ? 'Portrait' : 'Landscape' 
        }


       Dimensions.addEventListener("change",(ds)=>{
           this.setState({
                orientation: ds.window.height > 500 ? 'Portrait' : 'Landscape' 
           })
        })

    }


    // ios : 11.2
    // ANDROID:  27

    checkSupport = () => {
        if(this.state.os === 'ios'){
            if(Platform.Version > 11.5){
                return false
            }
        } else {
            if(Platform.Version > 27){
                return false
            }
        }

        return true;
    }

    componentWillUnmount(){
        Dimensions.removeEventListener("change")
    }


    render(){
        return(
            <View>
                { this.checkSupport() ?
                    <SuperText
                        style={
                            this.state.orientation === 'Portrait' ? styles.roguePortrait : styles.rogueLandscape
                        }
                    >
                        { this.state.os === 'ios'?
                            'Welcome to your IOS app'
                        :
                            'Your android is awesome'
                        }
                    </SuperText>
                    :
                        <Text>Sorry your phone is to new</Text>

                }
                
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    roguePortrait:{
        width:'100%',
       ...Platform.select({
           ios: {backgroundColor:'red'},
           android:{backgroundColor:'green'}
       })
    },
    rogueLandscape:{
        width:'40%',
        ...Platform.select({
            ios: {backgroundColor:'yellow'},
            android:{backgroundColor:'yellow'}
        })
     }
});

export default DsPlatform;