import React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';

export const Photo = ({ thumpPict, fullPict, author, navigation }) => {

    const goToFull = (fullPict) => {
        navigation.navigate('FullPhoto', { src: fullPict })
    }

    return (
        <View style={styles.contPhoto}>
            <TouchableHighlight onPress={() => goToFull(fullPict)}>
                <Image style={styles.img} source={{ uri: `${thumpPict}` }} />
            </TouchableHighlight>

            <Text key={Math.random()}> by: {author}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    img: {
        width: 100,
        height: 100,
        marginRight: 10,
    },
    contPhoto: {
        flexDirection: 'row',
        marginVertical: 5,
        alignItems: 'center',
    },
})