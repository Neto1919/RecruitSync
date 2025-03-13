import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';

const AppButtonWhite = (props) => {
    const color = props.color || 'black';
    const backgroundColor = props.backgroundColor || 'white';
    const borderColor = props.borderColor || 'white';
    const title = props.title || '?title?';

    const handlePress = () => {
        props.onPress();

        <ConfettiCannon count={200} origin={{ x: 0, y: 0 }} />
    };

    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={{ ...props.style, backgroundColor: backgroundColor, borderColor: borderColor, borderWidth: 1, alignItems: 'center', padding: 10, borderRadius: 10 }}>
                <Text style={{ color: color, fontWeight: 'bold' }}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default AppButtonWhite;