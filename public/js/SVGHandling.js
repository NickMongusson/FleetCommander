/**
 * Library used: SVG.js http://svgjs.com/
 */

var SVGMap = {
    doc: false,
    init: function(e) {
        this.doc = e.target.ownerDocument;

    },

    cleanMap: function() {
        var systems = SVG.select('a.sys');
        systems.each(function(i) {
            console.log(this);
            //this.each(function(i, children) {
            //});
        });

        var set = SVG.select('rect.s');
        set.each(function(i) {
            this.style('fill:#FFFFFF;');
        });

        set = SVG.select('text.st');
        set.each(function(i) {
            this.node.textContent = '';
        });
    }
}