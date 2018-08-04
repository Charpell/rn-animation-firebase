import React, { Component} from 'react';
import { StyleSheet, Text, View, Animated, Easing, Button } from 'react-native';

class AnimOne extends Component {
    state = {
        redSquare: new Animated.Value(1)
    }

    // where is it
    // where is gonna be
    // which comp

    runAnim = () => {
        Animated.timing(this.state.redSquare,{
            toValue:0,
            duration:1000,
            delay:1000,
            easing:Easing.bounce
        }).start();
        
    }

    render(){
        return(
            <View>
                <Animated.View
                    style={{
                        //opacity:this.state.redSquare,
                        transform:[
                            {
                                rotateX:this.state.redSquare.interpolate({
                                    inputRange:[0, 0.5, 1],
                                    outputRange:['0deg','180deg','0deg']
                                })
                            }
                        ]
                    }}
                >
                    <View style={styles.square}>
                        <Animated.Text
                            style={{
                                fontSize:this.state.redSquare.interpolate({
                                    inputRange:[0,0.5,1],
                                    outputRange:[20,5,30]
                                }),
                                color:this.state.redSquare.interpolate({
                                    inputRange:[0,1],
                                    outputRange:['blue','white']
                                })
                            }}
                        >
                            <Text>Hello</Text>
                        </Animated.Text>
                        
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
    square:{
        width:100,
        height:100,
        backgroundColor:'red'
    }
});

export default AnimOne;