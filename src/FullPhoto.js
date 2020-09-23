import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

export const FullPhoto = ({ route }) => {
    const { src } = route.params;
    return (
        <View style={styles.contPhoto}>
            <Image style={styles.img} source={{ uri: `${src}` }} />
        </View>
    );
}

const styles = StyleSheet.create({
    img: {
        width: '100%',
        height: '100%',
    },
    contPhoto: {
        flex: 1,
        alignItems: 'center',
    },
})