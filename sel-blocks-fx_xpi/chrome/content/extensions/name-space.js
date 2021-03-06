// SelBlocks name-space
var selblocks = {
   name: "selblocks"
  ,seleniumEnv: "ide"
  ,globalContext: this // alias for global Selenium scope
};

(function($$){
  $$.fn = {};

  /* Starting with FF4 lots of objects are in an XPCNativeWrapper,
   * and we need the underlying object for == and for..in operations.
   */
  $$.unwrapObject = function(obj) {
    if (typeof(obj) === "undefined" || obj == null)
      return obj;
    if (obj.wrappedJSObject)
      return obj.wrappedJSObject;
    return obj;
  };

  $$.fmtCmd = function(cmd) {
    var c = cmd.command;
    if (cmd.target) { c += "|" + cmd.target; }
    if (cmd.value)  { c += "|" + cmd.value; }
    return c;
  }

}(selblocks));
