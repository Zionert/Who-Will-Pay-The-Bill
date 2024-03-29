import React from "react";
import { Text } from "react-native-elements";

export const MainLogo = () => {
    return (
        <Text 
            style = {{
                fontFamily: 'Pacifico-Regular',
                color: '#db3eb1',
                textDecorationLine: 'underline',
                textDecorationColor: '#41b6e6',
                fontSize: 30
            }}
        >
            Who pays the bill ? 
        </Text>
    )
}