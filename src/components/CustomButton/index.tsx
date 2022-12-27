import { Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

import { styles } from "./style";
import { COLORS } from "../../../assets/colors";
import { useState } from "react";

type Props = {
    onPress: () => void
}

export function CustomButtom({ onPress }: Props) {
    const [isPressed, setIsPressed] = useState(false);

    return (
        <TouchableOpacity
            style={(isPressed) ? styles.buttonPressed : styles.button}
            activeOpacity={1}
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => setIsPressed(false)}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>
                <Icon name="pluscircleo" size={15} color={COLORS.gray100} />
            </Text>
        </TouchableOpacity>
    );
}