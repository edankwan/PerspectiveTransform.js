# PerspectiveTransform#

This is an extremely useful class for advanced CSS 3d animation. You can set the x, y point of the corners of a DOM element and do need to think about the complicated Matrix formula behind it.

[![alt text](http://edankwan.github.com/PerspectiveTransform.js/screenshot/001.jpg)](http://edankwan.github.com/PerspectiveTransform.js/)

##Usage##
```js
    // create PerspectiveTransfrom
    var transform = new PerspectiveTransform(elem, width, height, useBackFacing);

    // the properties represent the 4 corners are "topLeft", "topRight", "bottomLeft" and "bottomRight"
    transform.bottomRight.x = 200;
    transform.bottomRight.y = 200;

    // check the polygon error before updating
    if(transform.checkError()==0){
        transform.update(); // update the perspective transform
        elem.style.display = "block"; // show the element
    }else{
        elem.style.display = "none"; // hide the element
    }
```

##Credit##
The original PerspectiveTransform.js is created by  Israel Pastrana
http://www.is-real.net/experiments/css3/wonder-webkit/js/real/display/PerspectiveTransform.js

Matrix Libraries from a Java port of JAMA: A Java Matrix Package, http://math.nist.gov/javanumerics/jama/
Developed by Dr Peter Coxhead: http://www.cs.bham.ac.uk/~pxc/
Available here: http://www.cs.bham.ac.uk/~pxc/js/

I simply removed some irrelevant variables and functions and merge everything into a smaller function. I also added some error checking functions and bug fixing things.
