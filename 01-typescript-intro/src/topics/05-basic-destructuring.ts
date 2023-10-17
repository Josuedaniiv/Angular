
interface AudioPlayer {
    audioVolumen: number;
    songDuration: number;
    son : string;
    details: Details;

}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolumen: 90,
    songDuration: 36,
    son: "Julia",
    details: {
        author: "Lagos",
        year: 2022
    }
}

const song = 'New song';

const {song:anotherSong, } = audioPlayer;

//console.log('song: ', anotherSong);

const dbz: string[] = ['Goku', 'Vegeta', 'Trunk'];

console.error('Personaje 3:', dbz[2] );


export {};