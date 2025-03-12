const charmingSongs = [
    { file: "APT.mp3", artist: "Rose" },
    { file: "Setar.mp3", artist: "Chub1na Ge" },
    { file: "I LUV IT.mp3", artist: "PSY" },
    { file: "bye bye bye.mp3", artist: "N'Sync" }
];
const phonkSongs = [
    { file: "Aura.mp3", artist: "Ogryzek" },
    { file: "Glory.mp3", artist: "Ogryzek" },
    { file: "Metamorphosis.mp3", artist: "Unknown" },
];
const brunoSongs = [
    { file: "Die with a smile.mp3", artist: "Bruno Mars" },
];
const divideSongs = [
    { file: "Perfect.mp3", artist: "Ed Sheeran" },
    { file: "Shape of you.mp3", artist: "Ed Sheeran" },
];

const allSongs = [...charmingSongs, ...phonkSongs, ...brunoSongs, ...divideSongs];

let songUL = document.querySelector(".song-lists ul");
let audioPlayer = new Audio();
let currentSongIndex = null;

// Function to display songs in the left div
function displaySongs(songs) {
    songUL.innerHTML = ""; // Clear the current list

    songs.forEach((song, index) => {
        songUL.innerHTML += `
            <li class="flex space-x-6">
                <div class="bg-[#2d2d2d9c] h-[60px] w-[60px] rounded-[8px] flex justify-center items-center">
                    <svg class="play" height="20px" width="20px" viewBox="0 0 512 512" fill="#fff">
                        <path d="M510.069,388.114V70.633V3.268l-65.848,14.204L110.483,92.396v262.876c-12.625-1.872-26.132-1.332-39.711,2.03 
                        c-48.156,11.924-78.972,54.796-68.83,95.756s57.403,64.499,105.559,52.575c48.156-11.924,78.972-54.796,68.83-95.756V182.327 
                        l267.901-60.733v211.914c-12.625-1.872-26.132-1.332-39.712,2.03c-48.156,11.924-78.972,54.796-68.83,95.756 
                        s57.403,64.499,105.559,52.575C489.395,471.946,520.211,429.075,510.069,388.114z"></path>
                    </svg>
                </div>
                <div class="song-info flex items-center  space-x-2 w-[60px]">
                    <div class="text-white text-[13px] font-[600]   w-[60px]">${song.file.replace(".mp3", "")}</div>
                    <div class="text-[#9a9a9a] text-[11px] font-[500]  w-[60px]">${song.artist}</div>
                </div>
                <div class="playnow flex justify-center items-center w-[130px] space-x-2 relative left-6">
                    <svg class="playsvg w-[34px]" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM15.5963 10.3318C16.8872 11.0694 16.8872 12.9307 15.5963 13.6683L11.154 16.2068C9.9715 16.8825 8.5002 16.0287 8.5002 14.6667V9.33339C8.5002 7.97146 9.9715 7.11762 11.154 7.79333L15.5963 10.3318Z" fill="white"/>
                    </svg>
                    <svg class="pausesvg w-[34px] hidden" viewBox="0 0 24 24" fill="none">
                        <rect width="24" height="24"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM9.5 9C9.22386 9 9 9.22386 9 9.5V14.5C9 14.7761 9.22386 15 9.5 15H10.5C10.7761 15 11 14.7761 11 14.5V9.5C11 9.22386 10.7761 9 10.5 9H9.5ZM13.5 9C13.2239 9 13 9.22386 13 9.5V14.5C13 14.7761 13.2239 15 13.5 15H14.5C14.7761 15 15 14.7761 15 14.5V9.5C15 9.22386 14.7761 9 14.5 9H13.5Z" fill="white"/>
                    </svg>
                </div>
            </li>`;
    });

    // Add event listeners to the new play buttons
    setupPlayButtons(songs);
}

// Function to set up play/pause functionality for the songs
function setupPlayButtons(songs) {
    document.querySelectorAll(".playnow").forEach((button, index) => {
        button.addEventListener("click", () => {
            if (currentSongIndex === index && !audioPlayer.paused) {
                // If the same song is already playing, pause it
                audioPlayer.pause();
                button.querySelector(".playsvg").style.display = "block";
                button.querySelector(".pausesvg").style.display = "none";
                document.querySelector(".play2svg").style.display = "block";
                document.querySelector(".pause2svg").style.display = "none";
            } else {
                // Load and play the new song
                audioPlayer.src = `./songs/${songs[index].file}`;
                audioPlayer.play();
                currentSongIndex = index;

                // Reset all buttons
                document.querySelectorAll(".playsvg").forEach(svg => svg.style.display = "block");
                document.querySelectorAll(".pausesvg").forEach(svg => svg.style.display = "none");

                // Update the clicked button
                button.querySelector(".playsvg").style.display = "none";
                button.querySelector(".pausesvg").style.display = "block";

                // Update play2svg and pause2svg
                document.querySelector(".play2svg").style.display = "none";
                document.querySelector(".pause2svg").style.display = "block";
            }
        });
    });
}

// Add event listeners to the green play buttons of the cards
document.querySelectorAll(".greenplay").forEach((button, index) => {
    button.addEventListener("click", () => {
        switch (index) {
            case 0:
                displaySongs(charmingSongs);
                break;
            case 1:
                displaySongs(phonkSongs);
                break;
            case 2:
                displaySongs(brunoSongs);
                break;
            case 3:
                displaySongs(divideSongs);
                break;
        }
    });
});

// Play/Pause Toggle for play2svg and pause2svg
document.querySelector(".play2svg").addEventListener("click", () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        document.querySelector(".play2svg").style.display = "none";
        document.querySelector(".pause2svg").style.display = "block";

        // Update individual song buttons
        if (currentSongIndex !== null) {
            let button = document.querySelectorAll(".playnow")[currentSongIndex];
            button.querySelector(".playsvg").style.display = "none";
            button.querySelector(".pausesvg").style.display = "block";
        }
    }
});

document.querySelector(".pause2svg").addEventListener("click", () => {
    if (!audioPlayer.paused) {
        audioPlayer.pause();
        document.querySelector(".play2svg").style.display = "block";
        document.querySelector(".pause2svg").style.display = "none";

        // Update individual song buttons
        if (currentSongIndex !== null) {
            let button = document.querySelectorAll(".playnow")[currentSongIndex];
            button.querySelector(".playsvg").style.display = "block";
            button.querySelector(".pausesvg").style.display = "none";
        }
    }
});

// Function to format time (e.g., 125 -> "2:05")
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
}

// Update song name and artist
function updateSongInfo() {
    if (currentSongIndex !== null) {
        const song = allSongs[currentSongIndex];
        document.getElementById("currentSongName").textContent = song.file.replace(".mp3", "");
        document.getElementById("currentSongArtist").textContent = song.artist;
    }
}

// Update seekbar and time
function updateSeekbar() {
    const seekbar = document.querySelector(".seekbar");
    const progress = document.querySelector(".seekbar .progress");
    const circle = document.querySelector(".seekbar .circle");
    const currentTimeElement = document.getElementById("currentTime");
    const totalDurationElement = document.getElementById("totalDuration");

    // Update total duration
    audioPlayer.addEventListener("loadedmetadata", () => {
        totalDurationElement.textContent = formatTime(audioPlayer.duration);
    });

    // Update current time and seekbar
    audioPlayer.addEventListener("timeupdate", () => {
        const currentTime = audioPlayer.currentTime;
        const duration = audioPlayer.duration;

        // Update current time display
        currentTimeElement.textContent = formatTime(currentTime);

        // Update seekbar progress
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = `${progressPercent}%`;
        circle.style.left = `${progressPercent}%`;
    });

    // Seekbar drag functionality
    let isSeekbarDragging = false;

    seekbar.addEventListener("mousedown", (e) => {
        isSeekbarDragging = true;
        updateSeekbarProgress(e);
    });

    document.addEventListener("mousemove", (e) => {
        if (isSeekbarDragging) {
            updateSeekbarProgress(e);
        }
    });

    document.addEventListener("mouseup", () => {
        isSeekbarDragging = false;
    });

    function updateSeekbarProgress(e) {
        const rect = seekbar.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const seekbarWidth = rect.width;
        const seekTime = (offsetX / seekbarWidth) * audioPlayer.duration;

        audioPlayer.currentTime = seekTime;
    }
}

// Volume bar functionality
// Update the setupVolumeBar function
function setupVolumeBar() {
    const volumeBar = document.querySelector(".volume-bar");
    const volumeProgress = document.querySelector(".volume-bar .volume-progress");
    const volumeIcon = document.getElementById("volumeIcon");

    // Set default volume to 100%
    audioPlayer.volume = 1;
    volumeProgress.style.width = "100%";
    updateVolumeIcon(1);

    let isVolumeDragging = false;

    // Update volume icon based on volume level
    function updateVolumeIcon(volume) {
        volumeIcon.innerHTML = volume === 0 ? lowVolumeSVG :
            volume <= 0.6 ? midVolumeSVG :
                highVolumeSVG;
    }

    volumeBar.addEventListener("mousedown", (e) => {
        isVolumeDragging = true;
        updateVolumeProgress(e);
    });

    document.addEventListener("mousemove", (e) => {
        if (isVolumeDragging) {
            updateVolumeProgress(e);
        }
    });

    document.addEventListener("mouseup", () => {
        isVolumeDragging = false;
    });

    volumeBar.addEventListener("click", (e) => {
        updateVolumeProgress(e);
    });

    function updateVolumeProgress(e) {
        const rect = volumeBar.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const volumeBarWidth = rect.width;
        const volume = Math.min(Math.max(offsetX / volumeBarWidth, 0), 1);

        audioPlayer.volume = volume;
        volumeProgress.style.width = `${volume * 100}%`;
        updateVolumeIcon(volume);
    }
}

// Define SVG strings (replace with your actual SVG content)
const lowVolumeSVG = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5001 11.9998C15.5001 12.5317 15.4647 13.4879 15.4128 14.6052C15.2726 17.6226 15.2025 19.1313 14.2798 19.7797C14.1029 19.9041 13.9048 20.0049 13.7001 20.0747C12.7327 20.4048 11.5976 19.747 9.50009 18.3725M7.01629 17.0417C6.76828 16.9998 6.51225 16.9998 6.00018 16.9998C4.62626 16.9998 3.9393 16.9998 3.33997 16.7225C2.79239 16.4692 2.24482 15.9539 1.95863 15.4228C1.6454 14.8414 1.60856 14.237 1.53488 13.0282C1.52396 12.849 1.51525 12.6722 1.50928 12.4998M1.95863 8.57679C2.24482 8.04563 2.79239 7.53042 3.33997 7.27707C3.9393 6.99979 4.62626 6.99979 6.00018 6.99979C6.51225 6.99979 6.76828 6.99979 7.01629 6.95791C7.26147 6.9165 7.50056 6.84478 7.72804 6.74438C7.95815 6.64283 8.1719 6.50189 8.59941 6.22002L8.81835 6.07566C11.3613 4.39898 12.6328 3.56063 13.7001 3.92487C13.9048 3.9947 14.1029 4.09551 14.2798 4.21984C15.1151 4.80685 15.2517 6.09882 15.3741 8.57679" stroke="#a5a5a5" stroke-width="2.04" stroke-linecap="round"></path><path d="M20 18C20 18 21.5 16.2 21.5 12C21.5 9.56658 20.9965 7.93882 20.5729 7" stroke="#a5a5a5" stroke-width="2.04" stroke-linecap="round"></path><path d="M18 15C18 15 18.5 14.1 18.5 12C18.5 11.1381 18.4158 10.4784 18.3165 10" stroke="#a5a5a5" stroke-width="2.04" stroke-linecap="round"></path><path d="M22 2L2 22" stroke="#a5a5a5" stroke-width="2.04" stroke-linecap="round"></path></svg>`;

const midVolumeSVG = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 9C18 9 18.5 9.9 18.5 12C18.5 14.1 18 15 18 15" stroke="#a5a5a5" stroke-width="2.04" stroke-linecap="round"></path><path d="M1.95863 8.57679C2.24482 8.04563 2.79239 7.53042 3.33997 7.27707C3.9393 6.99979 4.62626 6.99979 6.00018 6.99979C6.51225 6.99979 6.76828 6.99979 7.01629 6.95791C7.26147 6.9165 7.50056 6.84478 7.72804 6.74438C7.95815 6.64283 8.1719 6.50189 8.59941 6.22002L8.81835 6.07566C11.3613 4.39898 12.6328 3.56063 13.7001 3.92487C13.9048 3.9947 14.1029 4.09551 14.2798 4.21984C15.2025 4.86829 15.2726 6.37699 15.4128 9.3944C15.4647 10.5117 15.5001 11.4679 15.5001 11.9998C15.5001 12.5317 15.4647 13.4879 15.4128 14.6052C15.2726 17.6226 15.2025 19.1313 14.2798 19.7797C14.1029 19.9041 13.9048 20.0049 13.7001 20.0747C12.6328 20.4389 11.3613 19.6006 8.81834 17.9239L8.59941 17.7796C8.1719 17.4977 7.95815 17.3567 7.72804 17.2552C7.50056 17.1548 7.26147 17.0831 7.01629 17.0417C6.76828 16.9998 6.51225 16.9998 6.00018 16.9998C4.62626 16.9998 3.9393 16.9998 3.33997 16.7225C2.79239 16.4692 2.24482 15.9539 1.95863 15.4228C1.6454 14.8414 1.60856 14.237 1.53488 13.0282C1.52396 12.849 1.51525 12.6722 1.50928 12.4998" stroke="#a5a5a5" stroke-width="2.04" stroke-linecap="round"></path></svg>`;

const highVolumeSVG = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6C20 6 21.5 7.8 21.5 12C21.5 16.2 20 18 20 18" stroke="#a5a5a5" stroke-width="2.04" stroke-linecap="round"></path><path d="M18 9C18 9 18.5 9.9 18.5 12C18.5 14.1 18 15 18 15" stroke="#a5a5a5" stroke-width="2.04" stroke-linecap="round"></path><path d="M1.95863 8.57679C2.24482 8.04563 2.79239 7.53042 3.33997 7.27707C3.9393 6.99979 4.62626 6.99979 6.00018 6.99979C6.51225 6.99979 6.76828 6.99979 7.01629 6.95791C7.26147 6.9165 7.50056 6.84478 7.72804 6.74438C7.95815 6.64283 8.1719 6.50189 8.59941 6.22002L8.81835 6.07566C11.3613 4.39898 12.6328 3.56063 13.7001 3.92487C13.9048 3.9947 14.1029 4.09551 14.2798 4.21984C15.2025 4.86829 15.2726 6.37699 15.4128 9.3944C15.4647 10.5117 15.5001 11.4679 15.5001 11.9998C15.5001 12.5317 15.4647 13.4879 15.4128 14.6052C15.2726 17.6226 15.2025 19.1313 14.2798 19.7797C14.1029 19.9041 13.9048 20.0049 13.7001 20.0747C12.6328 20.4389 11.3613 19.6006 8.81834 17.9239L8.59941 17.7796C8.1719 17.4977 7.95815 17.3567 7.72804 17.2552C7.50056 17.1548 7.26147 17.0831 7.01629 17.0417C6.76828 16.9998 6.51225 16.9998 6.00018 16.9998C4.62626 16.9998 3.9393 16.9998 3.33997 16.7225C2.79239 16.4692 2.24482 15.9539 1.95863 15.4228C1.6454 14.8414 1.60856 14.237 1.53488 13.0282C1.52396 12.849 1.51525 12.6722 1.50928 12.4998" stroke="#a5a5a5" stroke-width="2.04" stroke-linecap="round"></path></svg>`;

// Initialize song info, seekbar, and volume bar
updateSongInfo();
updateSeekbar();
setupVolumeBar();
