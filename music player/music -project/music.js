// List of song sources (add your song file paths here)
const songs = [
    "song1.mp3",
    "song2.mp3",
    "song3.mp3", // Replace with your actual file path
];

let currentSongIndex = 0; // Start with the first song

// Select elements
const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause');
const nextBtn = document.getElementById('next-next');
const backBtn = document.getElementById('back-back');

// Function to load a song
function loadSong(index) {
    audio.src = songs[index]; // Set the current song source
    audio.load(); // Load the new song
}

// Play/Pause functionality
playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = 'Pause'; // Update button text
    } else {
        audio.pause();
        playPauseBtn.textContent = 'Play'; // Update button text
    }
});

// Next song functionality
nextBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length; // Go to the next song and loop back to the start
    loadSong(currentSongIndex); // Load the new song
    audio.play(); // Automatically play the new song
    playPauseBtn.textContent = 'Pause'; // Update button text
});

// Back song functionality
backBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length; // Go to the previous song and loop to the last
    loadSong(currentSongIndex); // Load the new song
    audio.play(); // Automatically play the new song
    playPauseBtn.textContent = 'Pause'; // Update button text
});

// Load the first song on page load
loadSong(currentSongIndex);


