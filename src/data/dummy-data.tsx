export const Products = [
    {
        id: 1,
        name: "Assassin's Creed Valhalla",
        short_description: 'Epic adventure in the world of Vikings',
        icon: require('../img/games/ac_valhala.jpg'),
        old_price: 999,
        new_price: 799,
    },
    {
        id: 2,
        name: 'Cyberpunk 2077',
        short_description: 'Explore the city of the future',
        icon: require('../img/games/cyberpunk.jpg'),
        old_price: 799,
        new_price: 599,
    },
    {
        id: 3,
        name: 'The Last of Us Part II',
        short_description: 'Survival story in a post-apocalyptic world',
        icon: require('../img/games/tlou2.jpeg'),
        old_price: 699,
        new_price: 599,
    },
    {
        id: 4,
        name: 'Doom Eternal',
        short_description: 'Fight demons in hell on Earth',
        icon: require('../img/games/doom.jpg'),
        old_price: 899,
        new_price: 699,
    },
    {
        id: 5,
        name: 'FIFA 22',
        short_description: 'Immerse yourself in the world of football passion',
        icon: require('../img/games/fifa22.jpeg'),
        old_price: 799,
        new_price: 499,
    },
    {
        id: 6,
        name: 'Red Dead Redemption 2',
        short_description: 'One of the best open-world western games',
        icon: require('../img/games/rdr2.jpg'),
        old_price: 899,
        new_price: 699,
    },
    {
        id: 7,
        name: 'Minecraft',
        short_description: 'Build your world with blocks',
        icon: require('../img/games/minecraft.jpeg'),
        old_price: 599,
        new_price: 499,
    },
    {
        id: 8,
        name: 'Call of Duty: Warzone',
        short_description: 'Battle royale in the world of Call of Duty',
        icon: require('../img/games/cod.jpeg'),
        old_price: 799,
        new_price: 599,
    },
    {
        id: 9,
        name: 'Ghost of Tsushima',
        short_description: 'Immerse yourself in the spirit of Japanese samurai',
        icon: require('../img/games/got.jpeg'),
        old_price: 899,
        new_price: 799,
    },
    {
        id: 10,
        name: 'Fortnite',
        short_description: 'Survival and building in the world of battle',
        icon: require('../img/games/fortnite.png'),
        old_price: 199,
        new_price: 99,
    },
    {
        id: 11,
        name: 'Overwatch',
        short_description: 'Team battles in the world of the future',
        icon: require('../img/games/overwatch.jpeg'),
        old_price: 599,
        new_price: 499,
    },
    {
        id: 12,
        name: 'Halo Infinite',
        short_description: 'Master Chief is back',
        icon: require('../img/games/halo.jpeg'),
        old_price: 899,
        new_price: 799,
    },
];

export interface IProduct {
    id: number;
    name: string;
    short_description: string;
    icon: _SourceUri;
    old_price: number;
    new_price: number;
}
