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
    });
});
