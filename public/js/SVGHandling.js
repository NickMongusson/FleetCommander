function replaceText() {

    console.log("I've been called ");
    // Get the Object by ID
    var a = document.getElementById("svgObject");
    // Get the SVG document inside the Object tag
    var svgDoc = a.contentDocument;

    var svgItem = svgDoc.getElementById("txt30002130");
    //$('txt30002157').textContent = 'Test';
    console.log(svgItem);

}