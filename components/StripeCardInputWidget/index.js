import React, { useEffect, useState } from "react";
import {StripeCardInputWidget} from '@agaweb/react-native-stripe';

export const Test = () => {
    return (
        <StripeCardInputWidget
            onCardValidCallback={({isValid, cardParams}) => {
                console.log(isValid, cardParams);
        }} />
    );
};