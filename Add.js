import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { datasource } from './Data';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    input: {
        marginTop: 20,
        marginBottom: 20,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ccc',
    },
    button: {
        marginBottom: 10,
    },
});

const Add = ({ navigation }) => {
    const [name, setName] = useState('');
    const [status, setStatus] = useState('Not Completed');
    const [description, setDescription] = useState('');

    const addTask = () => {
        datasource[0].data.push({ name, status, description });
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Task Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Description"
                value={description}
                onChangeText={setDescription}
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
            <View style={styles.button}>
                <Button title="Add Task" onPress={addTask} />
            </View>
            <View style={styles.button}>
                <Button title="Back" onPress={() => navigation.goBack()} />
            </View>
        </View>
    );
};

export default Add;
