import React, { useState, useEffect } from "react";
import { Layout } from './layout';
import { connect } from 'react-redux'
import { getStorage} from "../../../../firebase";


const OldWorkoutCard = ({ navigation, lastVideo }) => {

    const [videoImages, setVideoImages] = useState([]);



    const storage = getStorage();
    const storageRef = storage.ref();


    useEffect( () => {
        
        videosList()

    }, []);


    const videosList = async () => {     
        let arrayVideos = []
        for (let i = lastVideo; i > 0; i--) {
            
            await storageRef
                .child("images/videoImages/"+i+".png")
                .getDownloadURL()
                .then(resolve => {
                    arrayVideos[lastVideo -i] = resolve;                    
                })
                .catch(e => console.log(e.code, e.message));          
        }
        setVideoImages(arrayVideos);
      
    }

    return (
        
        <Layout 
            videoImages={videoImages}
        />
    );
}


const mapStateToProps = state => ({
    lastVideo: state.userReducer.user.lastVideo,
})

export default connect(mapStateToProps, {})(OldWorkoutCard)
