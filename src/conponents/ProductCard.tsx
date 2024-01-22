import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { IProduct } from '../data/dummy-data.tsx';
import { Button, IconButton } from 'react-native-paper';

const CURRENCY: string = 'UAH';

const ProductCard = ({ product }: { product: IProduct }) => {
    const { name, short_description, old_price, new_price, icon } = product;

    return (
        <View style={styles.card}>
            <Image source={icon} style={styles.cardImage} />
            <View style={styles.cardInfo}>
                <Text style={styles.cardName}>{name}</Text>
                <View style={styles.cardPrices}>
                    <Text style={styles.cardOldPrice}>
                        {old_price} {CURRENCY}
                    </Text>
                    <Text style={styles.cardNewPrice}>
                        {new_price} {CURRENCY}
                    </Text>
                </View>
                <Text numberOfLines={1} style={styles.cardDesc}>
                    {short_description}
                </Text>
                <View style={styles.buttons}>
                    <Button
                        buttonColor={'#FFFCF9'}
                        textColor={'#322E18'}
                        style={styles.cardButton}
                        mode={'contained'}>
                        Details
                    </Button>
                    <Button
                        buttonColor={'#03CEA4'}
                        textColor={'#FFFCF9'}
                        style={styles.cardButton}
                        mode={'contained'}>
                        Buy
                    </Button>
                </View>
            </View>
            <IconButton
                icon={'heart'}
                iconColor={'#FFFCF9'}
                style={styles.cardLikeButton}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: '#352D39',
        marginHorizontal: 10,
        borderRadius: 10,
        position: 'relative',
    },
    cardImage: {
        width: 65,
        height: 65,
        borderRadius: 10,
        borderColor: '#FFFCF9',
        borderWidth: 1,
    },
    cardInfo: {
        flex: 1,
        flexDirection: 'column',
        gap: 5,
    },
    cardName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFCF9',
    },
    cardDesc: {
        fontSize: 14,
        color: '#FFFCF9',
        fontStyle: 'italic',
    },
    cardPrices: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    },
    cardOldPrice: {
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        color: '#F24333',
        fontSize: 14,
        fontWeight: 'bold',
    },
    cardNewPrice: {
        color: '#FFFCF9',
        fontSize: 15,
        fontWeight: 'bold',
    },
    buttons: {
        flexDirection: 'row',
        gap: 10,
    },
    cardLikeButton: {
        position: 'absolute',
        top: 0,
        right: 0,
    },
    cardButton: {
        flex: 1,
    },
});

export default ProductCard;
