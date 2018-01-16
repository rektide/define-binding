/**
  Define what looks and acts like a mundane member property, but which is a (read-) binding to another field on an object
*/
function defineBinding( dest, slot, src, optionalSrcSlot, propOptions){
	var srcSlot= optionalSrcSlot|| slot
	propOptions= propOptions|| { configurable: true, enumerable: true}
	Object.defineProperty( dest, slot, {
		get: function(){
			return src[ srcSlot]
		},
		...propOptions
	})
}
export default assignDefaults
export assignDefaults
