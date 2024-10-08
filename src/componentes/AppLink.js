import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const AppLink = (props) => {
    const color = props.color || 'blue';
    const title = props.title || '?title?';
    
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={{ ...props.style, alignItems: 'center'}}>
                <Text style={{ color: color }}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}


export default AppLink;