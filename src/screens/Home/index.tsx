import { useState } from "react";
import { Text, View, StatusBar, Image, TextInput, TouchableOpacity, FlatList } from "react-native";

import { COLORS } from "../../../assets/colors";
import { CustomButtom } from "../../components/CustomButton";
import { Task } from "../../components/Task";

import { styles } from "./style";

export type task = {
    text: string,
    done: boolean
}

export function Home() {


    const [isFocused, setIsFocused] = useState(false);
    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState<task[]>([
        {
            text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
            done: false
        },
        {
            text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
            done: true
        },
        {
            text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
            done: false
        },
        {
            text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
            done: true
        },
    ]);
    const [tasksCount, setTasksCount] = useState(tasks.length);
    const [doneTasksCount, setDoneTasksCount] = useState(
        tasks.filter(task => task.done === true).length
    );

    function handleAddNewTask() {
        setTasks(prevState => {
            let tasks = [...prevState, { text: newTask, done: false }]
            updateTaskCount(tasks);
            return tasks;
        });
        setNewTask('');
    }

    function handleUpdateTask(index: number) {
        setTasks(prevState => {
            let tasks = prevState;
            tasks[index].done = !tasks[index].done;
            updateDoneTasks(tasks);
            return tasks;
        });
    }

    function handleRemoveTask(index: number) {
        setTasks(prevState => {
            let tasks = prevState;
            tasks.splice(index, 1);
            updateDoneTasks(tasks);
            updateTaskCount(tasks);
            return tasks;
        });
    }

    function updateDoneTasks(tasks: task[]) {
        let doneTasks = tasks.filter(task => task.done === true).length;
        setDoneTasksCount(doneTasks);
    }

    function updateTaskCount(tasks: task[]) {
        let tasksCount = tasks.length;
        setTasksCount(tasksCount);
    }

    return (
        <View style={styles.container}>
            <StatusBar />
            <Image style={styles.image} source={require('../../../assets/Logo.png')} />

            <View style={styles.form}>
                <TextInput
                    style={(!isFocused) ? styles.input : [styles.input, { borderColor: COLORS.purpleDark }]}
                    placeholder='Adicione uma nova tarefa'
                    placeholderTextColor={COLORS.gray300}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    value={newTask}
                    onChangeText={setNewTask}
                />
                <CustomButtom onPress={handleAddNewTask} />
            </View>

            <View style={styles.tasks}>
                <View style={styles.info}>
                    <View style={styles.box}>
                        <Text style={styles.created}>Criadas</Text>
                        <Text style={styles.counter}>
                            {tasksCount}
                        </Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.done}>Concluidas</Text>
                        <Text style={styles.counter}>
                            {doneTasksCount}
                        </Text>
                    </View>
                </View>

                <FlatList
                    data={tasks}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <Task
                            position={index}
                            task={item}
                            handleUpdateTask={handleUpdateTask}
                            handleRemoveTask={handleRemoveTask}
                        />
                    )}
                    style={styles.list}
                    ListEmptyComponent={() => (
                        <View style={styles.empty}>
                            <Image style={styles.emptyImage} source={require('../../../assets/Clipboard.png')} />
                            <Text style={[styles.emptyText, styles.textBold]}>
                                Você ainda não tem tarefas cadastradas
                            </Text>
                            <Text style={styles.emptyText}>
                                Crie tarefas e organize seus itens a fazer
                            </Text>
                        </View>
                    )}
                />
            </View>

        </View>
    )
}