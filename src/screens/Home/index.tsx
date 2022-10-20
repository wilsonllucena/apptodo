import { useEffect, useState } from "react";
import { Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import Todo from "../../components/Todo";
import { styles } from "./styles";

export default function Home() {

    const [todos, setTodos] = useState<string[]>([]);
    const [todoName, setTodoName] = useState("")
    const [todoDone, setTodoDone] = useState<string[]>([]);

    useEffect(() => {
        setTodos(todos)
        setTodoDone(todoDone)
    }, [todos, todoDone]);

    function handleTodoAdd() {
        setTodos(prevItem =>[...prevItem, todoName])
        setTodoName("")
    }

    function handleTodoRemove(item: string) {
        const index = todos.indexOf(item);

        Alert.alert(`Remover`, `Deseja remover ?`, [
            {
                text: "Sim",
                onPress: () => {
                    todos.splice(index, 1),
                    setTodos([...todos])
                    handleCountDone(item);

                }
            },
            {
                text: "Não",
                style: "cancel"
            }
        ])
    }

    function handleCountDone(item: string) {
        if (!todoDone.includes(item) && todos.includes(item)) {
            setTodoDone(prevItem => [...prevItem, item]);
            return;
        }
        const index = todoDone.indexOf(item);
        todoDone.splice(index, 1),
        setTodoDone([...todoDone]);

    }

    return (
        <>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.logo}>
                        <Image source={{
                            uri: '../../../assets/logo.png',
                        }} />
                    </View>
                    <View style={styles.form}>
                        <TextInput
                            style={styles.input}
                            placeholder="Adicione uma nova tarefa"
                            placeholderTextColor="#6b6b6b"
                            onChangeText={text => setTodoName(text)}
                            value={todoName}
                        />
                        <TouchableOpacity
                            style={styles.button}
                            onPress={handleTodoAdd}
                        >
                            <Text style={styles.buttonText}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.headerBody}>
                    <View style={styles.badgetContainer}>
                        <Text style={styles.headerBodyText}>
                            Criadas
                        </Text>
                        <View style={styles.badget}>
                            <Text style={styles.badgetText}>{todos.length}</Text>
                        </View>
                    </View>
                    <View style={styles.badgetContainer}>
                        <Text style={styles.headerBodyText2}>
                            Concluídas
                        </Text>
                        <View style={styles.badget}>
                            <Text style={styles.badgetText}>{todoDone.length}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.lists}>
                    <FlatList
                        data={todos}
                        keyExtractor={item => item}
                        renderItem={({ item }) =>
                            <Todo key={item} name={item} onRemove={() => handleTodoRemove(item)} onCountDone={() => handleCountDone(item)} />
                        }
                        showsVerticalScrollIndicator={false}
                        ListEmptyComponent={() => (
                            <>
                                <View style={styles.hr} />
                                <Text style={styles.listEmptyText}>
                                    Você ainda não tem tarefas cadastradas
                                </Text>
                            </>

                        )}

                    />
                </View>
              
            </View>
        </>
    )
}