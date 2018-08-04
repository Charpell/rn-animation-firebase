import React,{ Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button,AsyncStorage } from 'react-native';
//import axios from 'axios';
import { connect } from 'react-redux';
import { registerUser,signIn,getPosts,refreshToken } from '../Store/actions';
import { bindActionCreators } from 'redux';


class LoginUser extends Component {
    
    state = {
        email:'',
        password:''
    }

    handleEmailInput = (email) => {
        this.setState({email})
    }

    handlePasswordInput = (password) => {
        this.setState({password})
    }

    addUser = () =>{
       // this.props.registerUser(this.state)
       this.props.signIn(this.state)
    }

    componentDidMount(){
        const refreshtoken = "APyOXy2F_Tox_CnAbZ-F-dcG7--pw4P0MvLI3ZH3pag0PaAU8_DOz0aA6xxLIuGFPcXH3yKGf6wBYYZZjlc_uUOdHXV9hCkL75nmton3d-XUePuNmHSokV3L9ZUYRfQatfmutcy9p9QSt0beRG7RCKv2-A5Y_utwdUARj7kr33SMLi5CDAGyvDaxxtmtyX___IWS_LPjxMbuRADqJtJlU8ZvNQRck3Mb91vAxJYyHMGCUh2AeBxeN_0"
        this.props.refreshToken(refreshtoken)
        
        //this.props.getPosts();
        // this.props.getPost('-L7_XVV0tvT_p04Ka4q8');
        // this.props.updatePost('-L7_XVV0tvT_p04Ka4q8')
        // this.props.deletePost('-L7_d3fh2QSBpcQhv1KI')
        // "-L7_d3fh2QSBpcQhv1KI"

        //const TOKEN = "hello"
        // AsyncStorage.setItem('@Animation:token',TOKEN)
        // .then(response => {
        //     console.log('TOKEN ADDED')
        // })

        // AsyncStorage.getItem('@Animation:token')
        // .then(response =>{
        //     console.log(response)
        // })


    }

    render(){
        return(
            <View style={styles.formContainer}>

                <View style={styles.inputWrapper}>
                    <Text>Email:</Text>
                    <TextInput
                        value={this.state.email}
                        style={styles.input}
                        onChangeText={this.handleEmailInput}
                        underlineColorAndroid="transparent"
                    />
                </View>

                <View style={styles.inputWrapper}>
                    <Text>Password:</Text>
                    <TextInput
                        value={this.state.password}
                        style={styles.input}
                        onChangeText={this.handlePasswordInput}
                        underlineColorAndroid="transparent"
                    />
                </View>

                <Button
                    title="Add post"
                    onPress={this.addUser}
                />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    formContainer:{
        flex:1,
        marginTop: 30,
        width:'100%',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    inputWrapper:{
        width:'80%'
    },
    input:{
        padding:5,
        borderWidth: 1,
        borderColor: 'lightgrey',
        marginBottom:5
    }
});

function mapStateToProps(state){
    console.log(state)
    return {
        articles:state.articles
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({registerUser,signIn,getPosts,refreshToken},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginUser);