import { Layout } from "./layout";
import React from "react"


export function Item({ user, position }) {

    const pos = position + 4

    return (
        <Layout
            user={user}
            position={pos}
        />
    )
}