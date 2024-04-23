import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    primaryContainer: { 
        flex: 1, 
        backgroundColor: "lightgrey",
    },
    flatList: {
        flexGrow: 0,
        backgroundColor: '#fff',
        padding: 10, 
        paddingTop: 0,
        paddingBottom: 0
    },
    itemContainer: { borderBottomColor: 'lightgrey', borderBottomWidth: 1, paddingTop: 10, paddingBottom: 10},
    itemRowPrimary: {flexDirection: "row", justifyContent: "space-between"},
    itemRowSecondary: {flexDirection: "row", justifyContent: "space-between", marginTop: 10},
    symbol: {fontSize: 14, fontWeight: "bold"},
    boldText: {fontWeight: '600'}

})

export default styles;