import React, {Component} from 'react';
import {Text, View} from "react-native";
import {Header, Left, Button, Icon} from 'native-base'
class DetailPage extends Component {
    render() {
        const {navigate} = this.props.navigation
        return (
            <View style={{flex: 1}}>
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
            </View>
        );
    }
}

export default DetailPage;