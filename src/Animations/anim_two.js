import React, { Component} from 'react';
import { StyleSheet, Text, View, Animated, Easing, Button } from 'react-native';

class AnimTwo extends Component {
    state = {
        first: new Animated.Value(1),
        redSquare: new Animated.ValueXY(0,0),
        blueSquare: new Animated.Value(1)
    }

    runAnim = () => {

        Animated.sequence([
            Animated.timing(this.state.first,{
                toValue:0
            }),
            Animated.parallel([
                Animated.spring(this.state.redSquare,{
                    toValue:{x:200,y:300}
                }),
                Animated.timing(this.state.blueSquare,{
                    toValue:0
                })
            ])
        ]).start();



    }

    render(){
        return(
            <View>

                <Animated.View
                    style={{
                        opacity:this.state.first
                    }}
                >
                    <View style={styles.first}>
                        <Text>First</Text>
                    </View> 
                </Animated.View>

                <Animated.View
                    style={this.state.redSquare.getLayout()}
                >
                    <View style={styles.redSquare}>
                        <Text>Hello</Text>
                    </View>  
                </Animated.View>
                
                <Animated.View
                    style={{
                        opacity:this.state.blueSquare
                    }}
                >
                    <View style={styles.blueSquare}>
                        <Text>Hello</Text>
                    </View> 
                </Animated.View>
                
         

                <Button
                    title="Start anim"
                    onPress={this.runAnim}
                />

            </View>
            
            
        )
    }

}


const styles = StyleSheet.create({ 
    redSquare:{
        width:100,
        height:100,
        backgroundColor:'red'
    },
    blueSquare:{
        width:100,
        height:100,
        backgroundColor:'blue'
    },
    first:{
        width:'100%',
        height:100,
        backgroundColor:'green'
    }
});

export default AnimTwo;