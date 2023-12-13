document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    const snapButton = document.getElementById('snap');

    // Be om åtkomst till webbkameran
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function(stream) {
                video.srcObject = stream;
                video.play();
            })
            .catch(function(error) {
                console.log("Något gick fel när kameran skulle användas: ", error);
            });
    }

    // Ta en bild när knappen klickas


snapButton.addEventListener('click', function() {
    context.drawImage(video, 0, 0, 640, 480);

// Skapa en ny ColorThief-instans och få de mest framträdande färgerna
// const colorThief = new ColorThief();
// const dominantColors = colorThief.getPalette(canvas, 6); // Ändra 6 till det antal färger du vill ha

// Visa färgerna på webbsidan
// const colorsDiv = document.getElementById('colors');
// colorsDiv.innerHTML = ''; // Rensa befintligt innehåll
// dominantColors.forEach(color => {
//     const colorDiv = document.createElement('div');
//     colorDiv.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
//     colorDiv.style.width = '100px';
//     colorDiv.style.height = '100px';
//     colorDiv.style.display = 'inline-block';
//     colorDiv.style.margin = '10px';
//     colorsDiv.appendChild(colorDiv);
// });
