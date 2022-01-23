document.getElementById('inputCm').addEventListener('input', function (e) {
    var cm = e.target.value;
    console.log(cm);
    document.getElementById('inputIn').value = (cm / 2.54).toFixed(10);
    document.getElementById('inputM').value = (cm / 100).toFixed(10);
    document.getElementById('inputKM').value = (cm / 100000).toFixed(10);
    document.getElementById('inputMM').value = (cm * 10).toFixed(10);
    document.getElementById('inputY').value = (cm * 0.0109361).toFixed(10);
    document.getElementById('inputMI').value = (cm / 160934).toFixed(10);
});

document.getElementById('inputIn').addEventListener('input', function (e) {
    var inches = e.target.value;
    console.log(inches);
    document.getElementById('inputCm').value = (inches / 0.3937008).toFixed(10);
    document.getElementById('inputM').value = (inches / 39.37008).toFixed(10);
    document.getElementById('inputKM').value = (inches / 39370.08).toFixed(10);
    document.getElementById('inputMM').value = (inches / .03937008).toFixed(10);
    document.getElementById('inputY').value = (inches / 36).toFixed(10);
    document.getElementById('inputMI').value = (inches / 63360).toFixed(10);
});

document.getElementById('inputM').addEventListener('input', function (e) {
    var meters = e.target.value;
    console.log(meters);
    document.getElementById('inputCm').value = (meters / 0.01).toFixed(10);
    document.getElementById('inputIn').value = (meters * 39.37008).toFixed(10);
    document.getElementById('inputKM').value = (meters / 1000).toFixed(10);
    document.getElementById('inputMM').value = (meters / 0.001).toFixed(10);
    document.getElementById('inputY').value = (meters * 1.09361).toFixed(10);
    document.getElementById('inputMI').value = (meters / 1609.34).toFixed(10);
});

document.getElementById('inputKM').addEventListener('input', function (e) {
    var kilometers = e.target.value;
    console.log(kilometers);
    document.getElementById('inputM').value = (kilometers / 0.001).toFixed(10);
    document.getElementById('inputCm').value = (kilometers / 0.00001).toFixed(10);
    document.getElementById('inputMM').value = (kilometers / 0.000001).toFixed(10);
    document.getElementById('inputIn').value = (kilometers * 39370.1).toFixed(10);
    document.getElementById('inputY').value = (kilometers / 0.0009144).toFixed(10);
    document.getElementById('inputMI').value = (kilometers * 0.621371).toFixed(10);
});

document.getElementById('inputMM').addEventListener('input', function (e) {
    var millimeters = e.target.value;
    console.log(millimeters);
    document.getElementById('inputCm').value = (millimeters * 0.1).toFixed(10);
    document.getElementById('inputIn').value = (millimeters * 0.0393701).toFixed(10);
    document.getElementById('inputKM').value = (millimeters * 0.000001).toFixed(10);
    document.getElementById('inputM').value = (millimeters * 0.001).toFixed(10);
    document.getElementById('inputY').value = (millimeters * 0.00109361).toFixed(10);
    document.getElementById('inputMI').value = (millimeters / 1609340).toFixed(10);
});

document.getElementById('inputY').addEventListener('input', function (e) {
    var yards = e.target.value;
    console.log(yards);
    document.getElementById('inputCm').value = (yards * 91.44).toFixed(10);
    document.getElementById('inputIn').value = (yards / 39.37008).toFixed(10);
    document.getElementById('inputM').value = (yards / 1.094).toFixed(10);
    document.getElementById('inputKM').value = (yards / 10940.01).toFixed(10);
    document.getElementById('inputMI').value = (yards / 1760).toFixed(10);
    document.getElementById('inputMM').value = (yards * 914.4).toFixed(10);
});

document.getElementById('inputMI').addEventListener('input', function (e) {
    var miles = e.target.value;
    console.log(miles);
    document.getElementById('inputCm').value = (miles * 160934.0).toFixed(10);
    document.getElementById('inputIn').value = (miles * 63360).toFixed(10);
    document.getElementById('inputM').value = (miles * 1609.34).toFixed(10);
    document.getElementById('inputKM').value = (miles * 1.60934).toFixed(10);
    document.getElementById('inputMM').value = (miles * 1609340.0).toFixed(10);
    document.getElementById('inputY').value = (miles * 1760).toFixed(10);
});
