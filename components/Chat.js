/**
 * KYIV MEDIA 22.11.2019
 */
import {
    View,
    Text
} from 'react-native';

import React, { Component } from 'react';
import GiftedChat from 'react-native-gifted-chat';
import Backend from '../Backend';

export default class Chat extends Component {
    state = {
        messages: []
    };

    componentWillMount() {

    };

    render() {
        return (
            <GiftedChat
                messages={this.state.messages}
                onSend={(message) => {
                    //send message to your backend
                    Backend.sendMessage(message);
                }}
                user={{
                    _id: Backend.getUid(),
                    name: this.props.name,
                }}
            />
        );
    }

    componentDidMount() {
        Backend.loadMessages((message) => {
            this.setState((previousState) => {
                return {
                    messages: GiftedChat.append(previousState.messages, message)
                };
            });
        });
    };
    componentWillUnmount() {
        Backend.closeChat();
    }
};

Chat.defaultProps = {
    name: ''
};
Chat.propTypes = {
    name: React.PropTypes.string
};

const styles = StyleSheet.create({


});