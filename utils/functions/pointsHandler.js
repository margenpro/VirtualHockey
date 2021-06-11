import { getFirestore } from '../../firebase'

const dailyLogin = 5
const videoFinished = 20
const db = getFirestore()

export async function assignPoints(event, user, setUser) {
    const actualPoints = user.points ? user.points : 0
    let lastSignIn = user.lastSignIn ? user.lastSignIn : ""
    let today = new Date()
    let updatedPoints = actualPoints
    let earnPoints = 0
    if (event === "Login") {
        let signIn = new Date()
        signIn.setTime(Date.parse(lastSignIn))
        if (today.getFullYear() >= signIn.getFullYear()) {
            if (today.getMonth() >= signIn.getMonth()) {
                if (today.getDate() !== signIn.getDate()) {
                    earnPoints = dailyLogin
                }
            }
        }
    }
    if (event === "Video") {
        earnPoints = videoFinished
    }
    updatedPoints = actualPoints + earnPoints
    if (updatedPoints > actualPoints) {
        try {
            await db.collection("users")
                .doc(user.id)
                .update({
                    "points": updatedPoints,
                    "lastSignIn": today.toString(),
                })
            setUser({ points: updatedPoints, lastSignIn: today.toString() })
        } catch (error) {
            console.log(error)
        }
    }
    return earnPoints
}
