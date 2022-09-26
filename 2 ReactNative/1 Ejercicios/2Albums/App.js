import {StatusBar} from "expo-status-bar";
import {ScrollView, StyleSheet} from "react-native";
import Album from "./components/Album";

export default function App() {
    const albumsData = [
        {
            name: "этажи-Молчат Дома",
            image: {
                uri: "https://i.scdn.co/image/ab67616d0000b2736ba3687aec030cec6089ed2c",
            },
            songs: [
                "На Дне",
                "Танцевать",
                "Фильмы",
                "Волны",
                "Тоска",
                "Прогноз",
                "Судно (Борис Рижий)",
                "Коммерсанты",
                "Клетка",
            ],
        },
        {
            name: "Vulgar Display of Power - Pantera",
            image: {
                uri: "https://mariskalrock.com/wp-content/uploads/2020/03/vulgar-display-of-power-pantera.jpg",
            },
            songs: [
                "Mouth for War",
                "A New Level",
                "Walk",
                "Fucking Hostile",
                "This Love",
                "Rise",
                "No Good (Attack the Radical)",
                "Live in a Hole",
                "Regular People (Conceit)",
                "By Demons Be Driven",
                "Hollow",
            ],
        },
        {
            name: "The Gereg-The HU",
            image: {
                uri: "https://m.media-amazon.com/images/I/91MgcYnTb3L._AC_SL1500_.jpg",
            },
            songs: [
                "The Gereg",
                "Wolf Totem",
                "The Great Chinggis Khaan",
                "The Legend of Mother Swan",
                "Shoog Shoog",
                "The Same",
                "Yuve Yuve Yu",
                "Shireg Shireg",
                "Song of Women",
            ],
        },
        {
            name: "Anastasis-Dead Can Dance",
            image: {
                uri: "https://i.discogs.com/kOh0P1j30NzqNuC7MoB2ppHLYSNa2mJl5gQjUWvPUjo/rs:fit/g:sm/q:90/h:543/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTk3MjUx/MTItMTQ4NTM3ODA0/OC0xNDA3LmpwZWc.jpeg",
            },
            songs: [
                "Children of the Sun",
                "Anabasis",
                "Agape",
                "Amnesia",
                "Kiko",
                "Opium",
                "Return of the She-King",
                "All in Good Time",
            ],
        },
        {
            name: "Nigredo-Diary of Dreams",
            image: {
                uri: "https://images-na.ssl-images-amazon.com/images/I/81RmBrdEK9L.jpg",
            },
            songs: [
                "Dead Letter",
                "Giftraum (Nigredo Version)",
                "Kindrom",
                "Reign of Chaos",
                "Charma Sleeper",
                "Tales of the Silent City",
                "Portrait of a Cynic",
                "Unmensch",
                "The Witching Hour",
                "Psycho-Logic",
                "Krank:Haft",
                "Cannibals",
                "Mask of Shame",
                "Kalt!",
            ],
        },
        {
            name: "Koyaanisqatsi (Life out of balance)-Phillip Glass",
            image: {
                uri: "https://m.media-amazon.com/images/I/51nkk-oVRvL.jpg",
            },
            songs: [
                "Koyaanisqatsi",
                "Vessels",
                "Cloudscape",
                "Pruit Igoe",
                "The Grid",
                "Prophecies",
            ],
        },
        {
            name: "Popular Problems-Leonard Cohen",
            image: {
                uri: "https://m.media-amazon.com/images/I/61NbjNWBPlL._AC_SX522_.jpg",
            },
            songs: [
                "Slow",
                "Almost Like the Blues",
                "Samson in New Orleans",
                "A Street",
                "Did I Ever Love You",
                "My Oh My",
                "Nevermind",
                "Born in Chains",
                "You Got Me Singing",
            ],
        },
        {
            name: "Frozen Throne-Groundislava",
            image: {
                uri: "https://i.discogs.com/UN8dmLbvFIoAVNlX9mUjDnUsQyiqrqHBvXWmyFNDZgg/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY1MzY3/MTktMTQyMTUwNzQ1/MC03Mjg4LmpwZWc.jpeg",
            },
            songs: [
                "Girl Behind The Glass",
                "Terminate Uplink",
                "Frozen Throne",
                "Under The Glow",
                "The Descent",
                "Feel The Heat",
                "October Acid",
                "A Way Out",
                "October Pt. 2",
                "Steel Sky",
            ],
        },
        {
            name: "Fuck The System-Cyberpunkers",
            image: {
                uri: "https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/01/f7/db/01f7db48-5f42-9f7c-a17a-75b303834325/cover.jpg/1200x1200bf-60.jpg",
            },
            songs: [
                "Fuck The System",
                "Cabala",
            ],
        }, {
            name: "Bodypop 1 1/2-And One",
            image: {
                uri: "https://is4-ssl.mzstatic.com/image/thumb/Music/18/22/88/mzi.cpqxxnot.jpg/600x600bf-60.jpg",
            },
            songs: [
                "Love Is a Drug Abuser",
                "Paddy Is My DJ",
                "Und Wenn",
                "So Klingt Liebe",
                "Love You to the End",
                "The Sun Alway Shines on Tv",
                "It's a Sin",
                "Big in Japan",
                "The Great Commandment",
                "Smalltown Boy",
                "Blue Monday",
                "True Faith",
                "Sometimes",
                "Only You",
            ],
        },
    ];
    return (
        <ScrollView style={styles.container}>
            {albumsData.map((album) => (
                <Album name={album.name} songs={album.songs} img={album.image} key={`album-${album.name}`}/>
            ))}
            <StatusBar style="auto"/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        color: "#FFF"
    },
});
