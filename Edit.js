import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { datasource } from './Data';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        padding: 10,
        backgroundColor: '#f0f0f0',
    },
    input: {
        marginTop: 20,
        marginBottom: 20,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ccc',
    },
});

const Edit = ({ navigation, route }) => {
    const { sectionIndex, index } = route.params;
    const task = datasource[sectionIndex].data[index];

    const [name, setName] = useState(task.name);
    const [status, setStatus] = useState(task.status);
    const [description, setDescription] = useState(task.description);

    const saveChanges = () => {
        task.name = name;
        task.status = status;
        task.description = description;
        navigation.navigate('Home');
    };

    const deleteTask = () => {
        Alert.alert('Delete Task', 'Are you sure?', [
            {
                text: 'Yes',
                onPress: () => {
                    datasource[sectionIndex].data.splice(index, 1);
                    navigation.navigate('Home');
                },
            },
            { text: 'No' },
        ]);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Task Name"
            />
            <TextInput
                style={styles.input}
                value={description}
                onChangeText={setDescription}
                placeholder="Description"
                multiline
            />
            <RNPickerSelect
                value={status}
                onValueChange={setStatus}
                items={[
                    { label: 'Not Completed', value: 'Not Completed' },
                    { label: 'Completed', value: 'Completed' },
                ]}
                style={{ viewContainer: styles.input }}
            />
            <Button title="Save" onPress={saveChanges} />
            <Button title="Delete" onPress={deleteTask} color="red" />
        </View>
    );
};

export default Edit;
