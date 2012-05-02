# PerspectiveTransform#

The original PerspectiveTransform.js is created by  Israel Pastrana
http://www.is-real.net/experiments/css3/wonder-webkit/js/real/display/PerspectiveTransform.js

Matrix Libraries from a Java port of JAMA: A Java Matrix Package, http://math.nist.gov/javanumerics/jama/
Developed by Dr Peter Coxhead: http://www.cs.bham.ac.uk/~pxc/
Available here: http://www.cs.bham.ac.uk/~pxc/js/

I simply removed some irrelevant variables and functions and merge everything into a smaller function. I also added some error checking functions and bug fixing things.

##Usage##
```js
    // create PerspectiveTransfrom
    var transform = new PerspectiveTransform(elem, width, height, useBackFacing);
    
    // check the polygon error before updating
    if(transform.checkError()==0){
        transform.update(); // update the perspective transform
        elem.style.display = "block"; // show the element
    }else{
        elem.style.display = "none"; // hide the element
    }
```


