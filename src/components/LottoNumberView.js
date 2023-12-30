import { useCallback } from "react";
import { View } from "react-native";
import { Typography } from "./Typography";

export const LottoNumberView = (props) => {
    const getNumberBackgroundColor = useCallback(() => {
        const randomNumber = Math.floor(Math.random() * 10) % 6;

        if (randomNumber === 0) {
            return 'red';
        } else if (randomNumber === 1) {
            return 'blue';
        } else if (randomNumber === 2) {
            return 'gray';
        } else if (randomNumber === 3) {
            return 'green';
        } else if (randomNumber === 4) {
            return 'purple';
        } else {
            return 'black';
        }
    }, [])

    return (
        <View style={{ flex:1, flexDirection:'row', alignItems:'center', justifyContent:'space-between' }}>
            {props.numbers.map((item) => {
                return (
                    <View 
                        style={{ 
                            backgroundColor:getNumberBackgroundColor(), 
                            width:40, 
                            height:40, 
                            borderRadius:20, 
                            alignItems:'center', 
                            justifyContent:'center' 
                        }}
                        key={item}
                    >
                        <Typography fontSize={20} color='white'>
                            {item}
                        </Typography>
                    </View>
                )
            })}
        </View>
    )
}