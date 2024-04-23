import { SafeAreaView, Text, View } from "react-native";
import styles from "./styles";
import { CustomHeaderProps } from "./types";

const CustomHeader:React.FC<CustomHeaderProps> = ({ title }) => (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.headerText}>
          {title}
        </Text>
      </View>
    </SafeAreaView>
  );

export default CustomHeader;