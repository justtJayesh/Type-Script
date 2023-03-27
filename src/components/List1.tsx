import React, { useState } from "react";
import useNumberList from "../hooks/useNumberList";

type List1Props = {
    list: number[];
};

const List1 = (props: List1Props) => {
    const { list, appendStart, appendEnd, popStart, popEnd, clear, reset } =
        useNumberList(props.list);
    const [input, setInput] = useState(0);
    return (
        <div data-testid="list1">
            <h3 data-testid="list1-label">List 1</h3>
            {list?.map((val, i) => {
                return <div data-testid="list1-element" key={i}>
                    {val}
                </div>;
            })}
            <input
                data-testid="list1-input"
                onChange={(e) => setInput(Number(e.target.value))}
            />
            <button
                data-testid="list1-btn-append-start"
                onClick={() => appendStart(input)}
            >
                Append start
            </button>
            <button data-testid="list1-btn-pop-end" onClick={popEnd}>
                Pop End
            </button>
            <button data-testid="list1-btn-clear" onClick={clear}>
                Clear
            </button>
            <button data-testid="list1-btn-reset" onClick={reset}>
                Reset
            </button>
        </div>
    );
};

export default List1;
