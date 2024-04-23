import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from "./styles";
import { ReducerInterface, CalculatedProps, BottomSheetProps } from "./types"


const calculatePnl = (data:Array<ReducerInterface>): CalculatedProps => {
  return data.reduce((prev, curr) => {
    const currentVal = curr.ltp * curr.quantity;
    const investVal = curr.avgPrice * curr.quantity;
    const todayPnl =  (curr.close-curr.ltp) * curr.quantity;
    const pnl = currentVal - investVal;
    prev.currentValue += currentVal;
    prev.investedValue += investVal;
    prev.totalPnl += pnl;
    prev.todayPnl += todayPnl;
    return prev;
  }, {
    totalPnl: 0,
    todayPnl: 0,
    currentValue: 0,
    investedValue: 0
  })
}

const BottomSheet: React.FC<BottomSheetProps> = ({data}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const calculated = calculatePnl(data || [])

  const toggleSheet = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <View style={styles.container}>
      {/* Arrow */}
      <TouchableOpacity onPress={toggleSheet} style={styles.arrowContainer}>
        <View style={[styles.arrow, isExpanded && styles.arrowUp]} />
      </TouchableOpacity>

      {/* Content */}
      <View style={styles.content}>
        {isExpanded && (
          <View>
            <View style={styles.contentRows}>
              <Text style={styles.fontStyles}>Current Value: </Text>
              <Text>₹ {calculated.currentValue.toFixed(2)}</Text>
            </View>
            <View style={styles.contentRows}>
              <Text style={styles.fontStyles}>Total Investment:</Text>
              <Text>₹ {calculated.investedValue.toFixed(2)}</Text>
            </View>
            <View style={styles.lastRow}>
              <Text style={styles.fontStyles}>Today's Profit & Loss:</Text>
              <Text>₹ {calculated.todayPnl.toFixed(2)}</Text>
            </View>
          </View>
        )}
        <View style={styles.contentRows}>
          <Text style={styles.fontStyles}>Profit & Loss:</Text> 
          <Text>₹ {calculated.totalPnl.toFixed(2)}</Text>
        </View>
      </View>
    </View>
  );
};

export default BottomSheet;
