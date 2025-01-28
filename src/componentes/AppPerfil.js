import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const AppPerfil = (props) => {
    const color = props.color || 'white';
    
    const borderColor = props.borderColor || 'white';
    const title = props.title || '?title?';

    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={{ ...props.style, borderColor: borderColor, alignItems: 'center', padding: 10, borderRadius: 10 }}>
                <Text style={{ color: color, fontWeight: 'bold', fontSize: 20 }}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}


export default AppPerfil;