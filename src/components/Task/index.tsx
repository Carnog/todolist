import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { task } from "../../screens/Home/index";

import { styles } from "./style";

type Props = {
    task: task,
    position: number,
    onRemove?: (name: string) => void
    handleUpdateTask: (index: number) => void
    handleRemoveTask: (index: number) => void
}

export function Task({ task, position, handleUpdateTask, handleRemoveTask }: Props) {
    const [isPressed, setIsPressed] = useState(false);
    const [isTrashPressed, setIsTrashPressed] = useState(false);


    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.taskConteiner}
                activeOpacity={1}
                onPressIn={() => setIsPressed(true)}
                onPressOut={() => setIsPressed(false)}
                onPress={(event) => handleUpdateTask(position)}
            >
                <View>
                    <Image
                        style={styles.checkbox}
                        source={
                            (task.done && !isPressed) ? require('../../../assets/checked.png') :
                                (task.done && isPressed) ? require('../../../assets/checked_active.png') :
                                    (!task.done && !isPressed) ? require('../../../assets/not_checked.png') :
                                        (!task.done && isPressed) ? require('../../../assets/not_checked_active.png') :
                                            require('../../../assets/not_checked.png')
                        }
                    />
                </View>
                <Text
                    style={(task.done) ? styles.taskTextDone : styles.taskText}
                >
                    {task.text}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={(isTrashPressed) ? styles.buttonPressed : styles.button}
                activeOpacity={1}
                onPressIn={() => setIsTrashPressed(true)}
                onPressOut={() => setIsTrashPressed(false)}
                onPress={(event) => handleRemoveTask(position)}
            >
                <Text style={(isTrashPressed) ? styles.trashPressed : styles.trash}>
                    <Icon name="trash-o" />
                </Text>
            </TouchableOpacity>
        </View>
    );
}