// src/App.js
import React, { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { ChakraProvider, Box, Spinner, Text, VStack } from '@chakra-ui/react';
import store from './store';
import { fetchCoffee } from './actions';

const CoffeeList = () => {
    const dispatch = useDispatch();
    const { coffeeList, loading, error } = useSelector(state => state);

    useEffect(() => {
        dispatch(fetchCoffee());
    }, [dispatch]);

    if (loading) return <Spinner />;
    if (error) return <Text color="red.500">{error}</Text>;

    return (
        <VStack spacing={4}>
            {coffeeList.map(coffee => (
                <Box key={coffee.id} p={5} shadow="md" borderWidth="1px">
                    <Text fontWeight="bold">{coffee.name}</Text>
                    <Text>{coffee.description}</Text>
                </Box>
            ))}
        </VStack>
    );
};

const App = () => (
    <ChakraProvider>
        <Provider store={store}>
            <Box p={5}>
                <Text fontSize="2xl" mb={4}>Coffee List</Text>
                <CoffeeList />
            </Box>
        </Provider>
    </ChakraProvider>
);

export default App;
