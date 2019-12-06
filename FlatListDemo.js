import React, {Component} from 'react';
import {AsyncStorage, StyleSheet, Text, View} from 'react-native';
import {Button, Input, Form, Item, Label} from 'native-base';
import {API_URL} from "./src/config/config";
import axios from 'axios'

const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingTop: 60,
        paddingHorizontal: 20,
        paddingBottom: 20
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});

class FlatListDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>
                <Form>
                    <Item fixedLabel>
                        <Label>Username</Label>
                        <Input
                            value={this.state.username}
                            onChangeText={username => {
                                this.setState({
                                    username
                                });
                            }}
                            placeholder="Please input username"
                        />
                    </Item>

                    <Item fixedLabel>
                        <Label>Password</Label>
                        <Input
                            secureTextEntry={true}
                            value={this.state.password}
                            onChangeText={password => {
                                this.setState({
                                    password
                                });
                            }}
                            placeholder="Please input password"
                        />
                    </Item>
                </Form>
                <Button
                    block
                    primary
                    onPress={() => {
                        axios.request({
                            url: API_URL + '/auth-service/auth',
                            method: 'POST',
                            data: {
                                username: this.state.username,
                                password: this.state.password
                            }
                        }).then(({data, headers, status}) => {
                            if (status === 200) {
                                AsyncStorage.setItem('token', headers.authorization);
                                navigate('Layout', {name: 'user'})
                            }
                        }).catch((error) => {
                            if (!!error.response) {
                                alert(error.response.data.error)
                            }
                        })
                    }}
                >
                    <Text style={{color: 'white'}}>Login</Text>
                </Button>
            </View>
        );
    }
}

export default FlatListDemo;