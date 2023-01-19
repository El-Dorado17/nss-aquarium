export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 * 
 * name, species, length, origin, diet
 */
const database = {
    fish: [
        {
            image: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Sally_Lightfoot_crab_%284202519454%29.jpg',
            name: "Bart",
            species: "crustaceans",
            size: 3,
            origin: 'All oceans', 
            diet: 'Anything they can catch: clams, urchins, fish, etc.'

        },
        {
            image: 'https://a-z-animals.com/media/animals/images/original/clown.jpg',
            name: 'Marlin',
            species: 'Clown Fish',
            size: 4.4,
            origin: 'Indian Ocean',
            diet: 'Algae & Small vertibret',
        },
        {
            image: 'https://post.healthline.com/wp-content/uploads/2020/04/Lionfish-732x549-thumbnail.jpg',
            name: 'Leo',
            species: 'Lionfish',
            size: 2.5,
            origin: 'Southern Pacific & Inidan Ocean',
            diet: 'Yellowtail Snapper & Parrotfish',
        },
        {
            image: 'https://static.voices.com/wp-content/uploads/2022/09/mgid_arc_imageassetref_nick-e1672861268415.jpeg',
            name: 'Patrick Star',
            species: 'Star Fish',
            size: 6.6,
            origin: 'All Oceans!',
            diet: 'Clams, Mussels, & Oysters',
        },
        {
            image: 'https://www.thesprucepets.com/thmb/fgK5C8pFGh5NH4Mbh9sm14vUsgE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/siamese-fighting-fish-bettas-1378308-hero-f459084da1414308accde7e21001906c.jpg',
            name: 'Berry',
            species: 'Betta Fish',
            size: 1.5,
            origin: 'Thailand, Vietnam, Laos, & Cambodia',
            diet: 'Brine Shrimp & small worms',
        },
        
    ]
}