import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import { decrement, increment, incrementAsync, incrementByAmount } from "../state/counter/counterSlice";

export const Counter = () => {

    const count = useSelector((state: RootState) => state.counter.value);
    const lang = useSelector((state: RootState) => state.language.value);
    const dispatch = useDispatch<AppDispatch>();
    var total_text = "Total ";
    if(lang == "my") {
        total_text = "စုစုပေါင်း "
    }
    return (
    <div>

        <h2>{total_text} {count}</h2>
        <div>
            <button onClick={() => dispatch(decrement()) }>-</button>
            <button onClick={() => dispatch(increment()) }>+</button>
            <button onClick={() => dispatch(incrementByAmount(10)) }>+10</button>
            <button onClick={() => dispatch(incrementAsync(15)) }>+15 Async</button>
        </div>
    </div>
    );
}