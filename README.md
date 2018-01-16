# define-binding

> Define a property which looks normal but is a binding to another object's field

```
import defineBinding from "define-binding"
var propertyBag= {a: 1, b: 42}
var o= {}
defineBinding( o, "bByO", propertyBag, "b")

// this binding is enumerable, so it iterates
Object.keys(o).next().value //=> "bByO"

// this binding is configurable, so it can be overwritten
o.bByO //=> 42
o.bByO= 6*9
// o has a new property, original property is intact
propertyBag.b //=> 42
```
