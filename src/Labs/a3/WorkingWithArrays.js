import ArrayIndexAndLength from "./ArrayIndexAndLength";
import AddingAndRemovingDataToFromArrays from "./AddingAndRemovingDataToFromArrays";
import ForLoops from "./ForLoops";
import MapFunction from "./MapFunction";
import JSONStringify from "./JSON Stringify";
import FindFunction from "./FindFunction";
import FindIndex from "./FindIndex";
import FilterFunction from "./FilterFunction";

function WorkingWithArrays(){
    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];

    let variableArray1 = [
        functionScoped,   blockScoped,
        constant1,        numberArray1,   stringArray1
    ];
    console.log('Working with Arrays');
    console.log('numberArray1:', numberArray1);
    console.log('stringArray1:', stringArray1);
    console.log('variableArray1:', variableArray1);

    return (
        <div>
            <h2>Working with Arrays</h2>
            <p>numberArray1= {numberArray1}</p>
            <p>stringArray1= {stringArray1}</p>
            <p>variableArray1= {variableArray1}</p>

            <ArrayIndexAndLength/>
            <AddingAndRemovingDataToFromArrays/>
            <ForLoops/>
            <MapFunction/>
            <JSONStringify/>
            <FindFunction/>
            <FindIndex/>
            <FilterFunction/>
        </div>
    );





}
export default WorkingWithArrays