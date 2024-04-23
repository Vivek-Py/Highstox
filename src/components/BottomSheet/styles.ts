import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 20,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 999,
      },
      arrowContainer: {
        alignItems: 'center',
        paddingBottom: 10,
      },
      arrow: {
        width: 0,
        height: 0,
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderBottomWidth: 15,
        borderStyle: 'solid',
        backgroundColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'gray',
      },
      arrowUp: {
        transform: [{ rotate: '180deg' }],
      },
      content: {
        paddingVertical: 10,
      },
      contentRows: {flexDirection: 'row', justifyContent: "space-between", marginBottom: 5},
      lastRow: {flexDirection: 'row', justifyContent: "space-between", marginBottom: 20},
      fontStyles: {fontSize: 14, fontWeight: "bold"}
})

export default styles;