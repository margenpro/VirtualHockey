import { connect } from 'react-redux'
import { setterUserAction } from '../../redux/actions/userActions'
import { getFirestore } from '../../firebase'
import { useFirebaseApp } from "reactfire";

const dailyLogin = 5
const videoFinished = 20
const db = getFirestore()
const firebase = useFirebaseApp()

export const assignPoints = async (event, { user, setUser }) => {
    const actualPoints = user.points
    const updatedPoints = actualPoints
    const earnPoints = 0
    if (event === LOGIN) {
        let lastSignIn = firebase.auth().currentUser.metadata.lastSignInTime
        let d1 = new Date()
        let today = new Date(d1.getUTCFullYear(), d1.getUTCMonth(), d1.getUTCDate(), d1.getUTCHours(), d1.getUTCMinutes(), d1.getUTCSeconds())
        let dif = today - lastSignIn
        if (dif >= 1) {
            earnPoints = dailyLogin
        }
    } else if (event === VIDEO) {
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
