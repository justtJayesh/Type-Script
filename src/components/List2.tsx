import React, { useState } from "react";
import useNumberList from "../hooks/useNumberList";

type List2Props = {
    // TODO
    list: number[];
};
const List2 = (props: List2Props) => {
    const { list, appendStart, appendEnd, popStart, popEnd, clear, reset } =
        useNumberList(props.list);
    const [input, setInput] = useState(0);

    return (
        <div data-testid="list2">
            <h3 data-testid="list2-label">List 2</h3>

            {/* Iterate List and wrap the element div below inside */}
            {list.map((e, i) => (
                <div data-testid="list2-element" key={i}>{e}</div>
            ))}

            <input data-testid="list2-input" onChange={(e)=>setInput(Number(e.target.value))}/>
            <button data-testid="list2-btn-append-end" onClick={()=>appendEnd(input)}>
                Append End
            </button>
            <button data-testid="list2-btn-pop-start" onClick={popStart}>
                Pop start
            </button>
            <button data-testid="list2-btn-clear" onClick={clear}>
                Clear
            </button>
            <button data-testid="list2-btn-reset" onClick={reset}>
                Reset
            </button>
        </div>
    );
};

export default List2;
