import {useState} from "react";

function Xtr({fds}) {
    const [yui, rty] = useState(fds);
    return (
        <div>
            <h2>{fds+yui}</h2>
            <input
                value={yui}
                onChange={(qwe) => rty(qwe.target.value)}
            />
        </div>
    );
}

export default Xtr;