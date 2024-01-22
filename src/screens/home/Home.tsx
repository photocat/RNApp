import React from 'react';
import { Appbar } from 'react-native-paper';
import { FlatList, StyleSheet, View } from 'react-native';
import { Products, IProduct } from '../../data/dummy-data.tsx';
import ProductCard from '../../conponents/ProductCard.tsx';

const Home = () => {
    return (
        <View style={styles.container}>
            <Appbar.Header mode={'center-aligned'} style={styles.appbar}>
                <Appbar.Content title="Home" titleStyle={styles.appbarTitle} />
            </Appbar.Header>
            <FlatList
                style={{ paddingTop: 10 }}
                data={Products}
                ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
                renderItem={({ item }) => <ProductCard product={item} />}
                keyExtractor={(item: { item: IProduct }) => item.id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFCF9',
    },
    appbar: {
        backgroundColor: '#322E18',
        height: 50,
    },
    appbarTitle: {
        color: '#FFFCF9',
        fontWeight: 'bold',
    },
});

export default Home;
