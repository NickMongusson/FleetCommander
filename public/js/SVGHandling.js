/**
 * Library used: SVG.js http://svgjs.com/
 */

var SVGMap = {
    doc: false,
    init: function(e) {
        this.doc = e.target.ownerDocument;

        console.log("Init has been called!");

    },

    cleanMap: function() {
        //var element = SVG.get('txt30002131');
        //element.node.textContent = '';
        //console.log(element);

        //element = SVG.get('rect30002131');
        //element.style('fill:#FFFFFF;');
        //console.log(element);

        //SVG.select('text.st')
        var set = SVG.select('rect.s');
        set.each(function(i) {
            this.style('fill:#FFFFFF;');
        });

        set = SVG.select('text.st');
        set.each(function(i) {
            this.node.textContent = '';
        });
        //alert (set);

        //$('#txt30002131').node.textContent = 'cleaned';
    }
}