import React, { useState, useEffect } from "react";
import { Image, View } from "react-native";
import { Layout } from "./layout";
// import { Vimeo } from "vimeo"

export function Video({ navigation, route }) {

//     const getUrl = () => route.params.url

//     return (
//         <Layout
//             getUrl={getUrl}
//         />
//     );
// }
    
    const [videoUri, setVideoUri] = useState('este no es el link')

    // useEffect(() => {
    //     getVideo()
        
    //     console.log(videoUri)
    // })

    const getVideo = () => {
        //TODO - No van aca las claves
        // let client = new Vimeo("ec3313f574ce286ab55a552d0831287181060180", "w5QjEEHeU8Bvbx3M6qqg+8tA3r6IqgXHg4/8HfWP22vlZYs0GsvVlVc6pd+pe0WDm/18WP/1HfbxPQmVoqpwJCyoc77eN2fD2LiHF6reCMUv7pO8hRL0P0xO70r17sXm", "4abbc0f7a99b7fee5d3707728e4785da");
        // client.request({
        //     method: 'GET',
        //     path: '/videos/541377453',
           
        // }, function (error, body, status_code, headers) {
        //     if (error) {
        //         console.log(error);
        //     }
        //     console.log("Seteo el video")
        //     setVideoUri(body)
        // })
    }
    return (
        <>
            <Layout
                videoUri={getVideo}
            />
        </>
    );
}



