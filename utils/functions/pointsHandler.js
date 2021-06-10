import { connect } from 'react-redux'
import { setterUserAction } from '../../redux/actions/userActions'
import { getFirestore } from '../../firebase'

const dailyLogin = 5
const videoFinished = 20
const db = getFirestore()

export async function assignPoints(event, user, setUser) {
    const actualPoints = user.points
    let updatedPoints = actualPoints
    let earnPoints = 0
    /*
    if (event === "Login") {
        //Igualar que sea el mismo dia sino ganar puntos
        let lastSignIn = firebase.auth().currentUser.metadata.lastSignInTime
        let today = new Date()
        if (today != lastSignIn) {
            earnPoints = dailyLogin
        }
    }*/
    if (event === "Video") {
        earnPoints = videoFinished
    }
    updatedPoints = actualPoints + earnPoints
    if (updatedPoints > actualPoints) {
        try {
            await db.collection("users")
                .doc(user.id)
                .update({
                    "points": updatedPoints
                })
            setUser({ points: updatedPoints })
        } catch (error) {
            console.log(error)
        }
    }
    return earnPoints
}

const mapStateToProps = state => {
    return {
        user: state.userReducer.user,
    }
}
const actionCreators = {
    setUser: setterUserAction
}
connect(mapStateToProps, actionCreators)
