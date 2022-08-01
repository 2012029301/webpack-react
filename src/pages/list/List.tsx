import React from "react";
import List3 from './List3'
import { arr2 } from './data2.js'
let { arr } = require('./data.ts')
const List = function () {

    const obj = { list: [1, 2, 3], ageList: [1, 2, 3, 4] }
    console.log(Object.values(obj).flat(Infinity), Object.keys(obj), arr, arr2);

    return <div className="list">list
        <button onClick={() => {
            arr[1] = arr[1] + 1
            arr2[1] = arr2[1] + 1
            console.log(arr, arr2);
        }}>+1</button>
        <List3 arr={arr} arr2={arr2} />
    </div>;
};
export default List;
