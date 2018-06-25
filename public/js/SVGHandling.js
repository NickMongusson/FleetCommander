/**
 * Library used: SVG.js http://svgjs.com/
 */

 class MapHandling {
     constructor() {
     }

     get doc() {
         return this._dock;
     }

     set doc(value) {
        this._dock = value;
     }

     init(e) {
         this.dock = e.target.ownerDocument;
     }

     cleanMap() {
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
