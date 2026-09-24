// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../Packages/Beckhoff.TwinCAT.HMI.Framework.14.3.319/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var TcHmiProject1;
        (function (TcHmiProject1) {
            function CreateBindingElementByIndex(ControlId, Index, ArraySymbolName, PropertyName) {
                /*
                Original symbol name example:
                    '%s%ADS.PLC1.MAIN.stData%/s%';
                We want to add the keyword to access to a member of array [Index] so
                we extract the end part of the name (4 elements '%/s%'), and put again. 
                The result could be like this:
                    '%s%ADS.PLC1.MAIN.stData[0]%/s%';
                */
                var VariableName = ArraySymbolName.slice(0,-4) + "[" + Index + "]%/s%";
                console.log(VariableName);
                console.log(PropertyName);
                //Get the control object
                var ControlObject = TcHmi.Controls.get(ControlId);
                //Create the binding by attribute name
                TcHmi.Binding.createEx2(VariableName, PropertyName, ControlObject);
            }
            TcHmiProject1.CreateBindingElementByIndex = CreateBindingElementByIndex;
        })(TcHmiProject1 = Functions.TcHmiProject1 || (Functions.TcHmiProject1 = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('CreateBindingElementByIndex', 'TcHmi.Functions.TcHmiProject1', TcHmi.Functions.TcHmiProject1.CreateBindingElementByIndex);
