// Video from the camera is loaded
const video = document.getElementById('video')
//let cleanLabel = 0;


// Here the models are loaded from the models folder
Promise.all([
    faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
    faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
    faceapi.nets.ssdMobilenetv1.loadFromUri('/models') //heavier/accurate version of tiny face detector
]).then(start)

// The loaded models are started here
function start() {
    document.body.append('Models Loaded')

    navigator.getUserMedia({
            video: {}
        },
        stream => video.srcObject = stream,
        err => console.error(err)
    )

    //video.src = '../videos/speech.mp4'
    console.log('video added')
    recognizeFaces()

}

// This asynchronous function is responsible for face recognition
async function recognizeFaces() {

    console.log("gsicht alder")
    // The images from the labeled_images folder are loaded and the vidoe is compared with the images on the basis of this
    const labeledDescriptors = await loadLabeledImages()
    console.log(labeledDescriptors)
    const faceMatcher = new faceapi.FaceMatcher(labeledDescriptors, 0.7)


    console.log('Playing')
    // It is defined how large the displayed area should be.
    const canvas = faceapi.createCanvasFromMedia(video)
    document.body.append(canvas)

    const displaySize = {
        width: video.width,
        height: video.height
    }
    faceapi.matchDimensions(canvas, displaySize)

    // It is queried at intervals how many faces are recognised and which of them is in the models
    setInterval(async () => {
        const detections = await faceapi.detectAllFaces(video).withFaceLandmarks().withFaceDescriptors()

        const resizedDetections = faceapi.resizeResults(detections, displaySize)

        canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)

        const results = resizedDetections.map((d) => {
            return faceMatcher.findBestMatch(d.descriptor)
        })
        // For each result, a box is drawn and named respectively.
        results.forEach((result, i) => {
            const box = resizedDetections[i].detection.box
            const drawBox = new faceapi.draw.DrawBox(box, {
                label: result.toString()
            })
            drawBox.draw(canvas)
            //console.log("box")
            //console.log(drawBox.options.label)

            var cleanLabel = drawBox.options.label.replace(/[^a-zA-Z]+/g, '');
            //console.log(cleanLabel);

            // The face is checked to see if it is one of the models
            // To simulate how the cabinet opens or stays closed, the circle and the writing, which is either red or green, are used to draw what happens
            if (cleanLabel == "Steve") {
                console.log("Schrank freigeschaltet")

                var context = canvas.getContext('2d');
                var centerX = canvas.width / 2;
                var centerY = canvas.height / 2;
                var radius = 70;

                context.fillStyle = "#7fe677";
                context.fillRect(750, 170, 300, 40);
                context.fillStyle = "black";
                context.font = "23px Verdana"
                context.fillText("Schrank freigeschaltet", centerX + 130, centerY - 160)

                context.beginPath();
                context.arc(centerX + 270, centerY - 270, radius, 0, 2 * Math.PI, false);
                context.fillStyle = 'green';
                context.fill();

                context.lineWidth = 5;
                context.strokeStyle = '#003300';
                context.stroke();
            } else {
                console.log("Schrank gesperrt")

                var context = canvas.getContext('2d');
                var centerX = canvas.width / 2;
                var centerY = canvas.height / 2;
                var radius = 70;

                context.fillStyle = "#e67b77";
                context.fillRect(750, 170, 300, 40);
                context.fillStyle = "black";
                context.font = "23px Verdana"
                context.fillText("Schrank gesperrt", centerX + 150, centerY - 160)

                context.beginPath();
                context.arc(centerX + 270, centerY - 270, radius, 0, 2 * Math.PI, false);
                context.fillStyle = 'red';
                context.fill();
                context.lineWidth = 5;
                context.strokeStyle = '#700d0d';
                context.stroke();
            }

        })
    }, 100)
}

function drawCircle() {
    var context = canvas.getContext('2d');
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    var radius = 70;

    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.fillStyle = 'green';
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = '#003300';
    context.stroke();
}

// The loaded images are gone through here one by one, as soon as this is done, the models that were loaded are displayed
function loadLabeledImages() {
    console.log("load labled images");
    //const labels = ['Black Widow', 'Captain America', 'Hawkeye' , 'Jim Rhodes', 'Tony Stark', 'Thor', 'Captain Marvel']
    //const labels = ['Prashant Kumar'] // for WebCam
    const labels = ['Steve']
    return Promise.all(
        labels.map(async (label) => {
            const descriptions = []
            for (let i = 1; i <= 2; i++) {
                const img = await faceapi.fetchImage(`https://raw.githubusercontent.com/IoTSteve/Face-Detection/master/labeled_images/${label}/${i}.jpg`)
                const detections = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor()
                //console.log(label + i + JSON.stringify(detections))
                descriptions.push(detections.descriptor)
            }
            document.body.append(label + ' Faces Loaded | ')
            return new faceapi.LabeledFaceDescriptors(label, descriptions);
        })
    )
}