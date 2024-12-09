import React from 'react';
import { SectionList, Text, TouchableOpacity, View, Button, Alert, StyleSheet } from 'react-native';
import { datasource } from './Data';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        padding: 10,
        backgroundColor: '#e8f4f8',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    itemContainer: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 3,
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        alignItems: 'center',
    },
    itemText: {
        fontSize: 16,
        color: '#444',
    },
    buttonContainer: {
        marginTop: 20,
    },
});

const Home = ({ navigation }) => {
    const renderItem = ({ item, index }) => (
        <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => navigation.navigate('Edit', { sectionIndex: 0, index })}>
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.itemText}>Status: {item.status}</Text>
            <Text style={styles.itemText}>Description: {item.description}</Text>
        </TouchableOpacity>

);

    const calculateSummary = () => {
        const completedCount = datasource[0].data.filter(task => task.status === 'Completed').length;
        const totalTasks = datasource[0].data.length;
        const incompleteCount = totalTasks - completedCount;
        const completionPercentage = ((completedCount / totalTasks) * 100).toFixed(2);

        Alert.alert(
            'Summary',
            `You have completed ${completedCount} task(s).\nIncomplete: ${incompleteCount} task(s).\nCompletion: ${completionPercentage}%`
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Task List</Text>
            <SectionList
                sections={datasource}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
            <View style={styles.buttonContainer}>
                <Button title="Add Task" onPress={() => navigation.navigate('Add')} />
                <Button title="Show Summary" onPress={calculateSummary} />
            </View>
        </View>
    );
};

export default Home;
