var SVGMap = {
    doc: false,
    init: function(e) {
        this.doc = e.target.ownerDocument;

        console.log("Init has been called!");

        var element = SVG.get('txt30002131');
        //element.rotate(45);
        element.node.textContent = 'test';
        console.log(element);

    }
}