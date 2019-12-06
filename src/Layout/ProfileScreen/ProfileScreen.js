import {Text, View} from "react-native";
import {Icon} from "native-base";
import React from "react";

class ProfileScreen extends React.Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {/*<Icon name={"poweroff"}/>*/}
                <Text onPress={() => {navigate('DetailPage')}}>Settings!</Text>
            </View>
        );
    }
}

export default ProfileScreen