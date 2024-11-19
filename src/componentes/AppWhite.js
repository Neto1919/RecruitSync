import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const AppWhite = (props) => {
    const color = props.color || 'white';
    const title = props.title || '?title?';

    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={{ ...props.style, alignItems: 'center' }}>
                <Text style={{ color: color, fontSize: 18, fontWeight: 'bold' }}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default AppWhite;