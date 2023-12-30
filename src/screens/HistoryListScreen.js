import { View } from "react-native"
import { Header } from '../components/header/Header';

export const HistoryListScreen = (props) => {
    return (
        <View style={{ flex:1 }}>
            <Header>
                <Header.Title title='HISTORY'></Header.Title>
            </Header>
        </View>
    )
}