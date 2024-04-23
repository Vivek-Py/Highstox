import BottomSheet from "../../components/BottomSheet"
import { FlatList, Text, TouchableOpacity, View } from "react-native";

import styles from "./styles";
import { IRenderItemProp } from "./types";
import useHoldingsData from "../../hooks/useHoldingsData";


const renderItem = ({ index, item }: IRenderItemProp) =>  {
  const currentVal = item.ltp*item.quantity;
  const investedVal = item.avgPrice*item.quantity;
  const totalPnl = currentVal-investedVal;
  return (
    <TouchableOpacity>
      <View style={styles.itemContainer}>
        <View style={styles.itemRowPrimary}>
          <Text style={styles.symbol}>{item.symbol}</Text>
          <Text>LTP: <Text style={styles.boldText}>₹ {item.ltp}</Text></Text>
        </View>
        <View style={styles.itemRowSecondary}>
          <Text>{item.quantity}</Text>
          <Text>P/L: <Text style={styles.boldText}>₹ {totalPnl.toFixed(2)}</Text></Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

function Holdings():Element {
    const [data] = useHoldingsData()
  
    return (
      <View style={styles.primaryContainer}>
        <FlatList
          style={styles.flatList}
          data={data}
          renderItem={(item) => renderItem(item)}
          keyExtractor={item => item.symbol}
        />
        <BottomSheet data={data} />
      </View>
    );
  }

export default Holdings;
