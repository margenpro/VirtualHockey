import React from 'react';
import { Image, View, ScrollView, Text } from 'react-native';
import styles from "./styles";
import oldCard from '../../../../assets/images/courseCard.png'


export function Layout({
    // size
    //screenHandler 
    videoImages
}) {
    return (
        <ScrollView horizontal={true} >
                
            {
                videoImages.length > 0 ? videoImages.map((e, index) => 

                    <View key={index}>
                        <Image
                            style={styles.imagenTitulo}
                            source={e}
                        />
                    </View> 

                   
                ) : <Text>Empieza con el primer Video</Text> 
                
            }

        </ScrollView>
    );
}
