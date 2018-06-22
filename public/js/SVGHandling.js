var SVGMap = {
    doc: false,
    init: function(e) {
        this.doc = e.target.ownerDocument;
        
        console.log("Init has been called!");
    }
}