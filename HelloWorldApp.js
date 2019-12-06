import React, {Component} from 'react';
import {StyleSheet, Text, SafeAreaView, View} from 'react-native';

const styles = StyleSheet.create({
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red'
    }
});

class HelloWorldApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowingText: true
        };
    }

    componentDidMount() {
        // setInterval(() => {
        //     this.state.isShowingText ? this.setState({isShowingText: false}) : this.setState({isShowingText: true});
        // }, 1000);
        // setInterval(() => (this.setState(previousState => (
        //     {isShowingText: !previousState.isShowingText}
        // ))), 1000)
    }

    render() {
        if (!this.state.isShowingText) {
            return null;
        }
        return (
            <>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text>Hello A Đức</Text>
                    <Text style={styles.red}>just red</Text>
                    <Text style={styles.bigBlue}>just bigBlue</Text>
                    <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
                    <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
                </View>
            </>
        );
    }
}

export default HelloWorldApp;