/**
 * KYIV MEDIA 22.11.2019
 */
import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import React, { Component } from 'react';

export default class Home extends Component {
    state = {
        name: ''
    }
    render() {
        return (
            <View>
                <Text style={styles.title}>
                    Enter your name:
                </Text>
                <TextInput
                    style={styles.nameInput}
                    placeholder='Please enter your name'
                    onChangeText={(text) => {
                        this.setState({ name: text })
                    }}
                    value={this.state.name}
                />
                <TouchableOpacity onPress={() =>
                    //navigate to second screen, and to pass it the name
                    Actions.chat({
                        name: this.state.name
                    })
                }>
                    <Text style={styles.buttonText}>
                        Next
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    title: {
        marginTop: 20,
        marginLeft: 20,
        fontSize: 20
    },
    nameInput: {
        height: 40,
        borderWidth: 2,
        borderColor: 'black',
        margin: 20,
        padding: 5
    },
    buttonText: {
        marginLeft: 20,
        fontSize: 20,
        color: 'blue'
    }
});