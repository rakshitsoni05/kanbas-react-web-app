import {useState} from "react";

function Har() {
    const [dsa, zxc] = useState([123, 234, 345, 456]);
    const qwe = (ert) => {
        zxc([567, ...dsa]);
    };
    const wer = (rty) => {
        zxc(dsa.filter((x) => x !== 234));
    };
    return (
        <div>
            <h2>{JSON.stringify(dsa)}</h2>
            <button onClick={() => qwe(dsa)}>EWQ</button>
            <button onClick={() => wer(dsa)}>REW</button>
        </div>
    );
}

export default Har;