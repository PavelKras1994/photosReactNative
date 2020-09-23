import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Photo } from './Photo';
import axios from 'axios';
// import fetch from 'fetch';

export const Main = ({ navigation }) => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch('https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0')
            .then(res => res.json())
            .then((data) => {
                setPhotos(data);
            });
    }, []);

    return (
        <ScrollView>
            <View style={styles.container}>
                {photos.map((photo) => {
                    return (
                        <Photo
                            thumpPict={photo.urls.thumb}
                            fullPict={photo.urls.full}
                            author={photo.user.name}
                            key={Math.random()}
                            navigation={navigation}
                        />
                    );
                })}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 20,
    },
});

