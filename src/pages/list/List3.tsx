import React from "react";
import { arr2 } from './data2.js'

let { arr } = require('./data.ts')

const List3 = function (props) {

    return <div className="list">list
        {props.arr.map(item => {
            return (
                <div>{item}</div>
            )
        })}
        {props.arr2.map(item => {
            return (
                <div>{item}</div>
            )
        })}
    </div>;
};
export default List3;
