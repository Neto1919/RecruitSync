import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const AppButtonSenha = (props) => {
    const color = props.color || 'white';
    const backgroundColor = props.backgroundColor || '#7E7E7E';
    const borderColor = props.borderColor || 'white';
    const title = props.title || '?title?';

    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={{ ...props.style, backgroundColor: backgroundColor, borderColor: borderColor, borderWidth: 1, alignItems: 'center', padding: 10, borderRadius: 10 }}>
                <Text style={{ color: color, fontWeight: 'bold' }}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}


export default AppButtonSenha;