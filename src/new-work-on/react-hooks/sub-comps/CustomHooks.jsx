import React, {useState, useEffect} from 'react';

export function CustomHooks2(){
    return(
        <div>
            <h3>I am custom hooks example :</h3>
            <h4>Todo</h4>
            <p>1- Hooks that copy the Behavior of even or odd</p>
            <ByInnerLogic/>

            <p>2- Hook that Do it from inside by using the custom hook</p>
            <p>This problem solve the need to get some state from inner component, without the need to get if from the parent props. </p>
        </div>
    )
};

export function useRandomGenerator(){
    const [number, setNumber] = useState(0);
    // useEffect(()=>{
    //     generateRandom();
    // },[]);

    useEffect(generateRandom,[]);
    function generateRandom(){
        setInterval(()=>{
            let rndm = Math.floor(Math.random() * Math.floor(100));
            setNumber(rndm);

        },3000)
    };
    if (number === null) {
        return -1;
    }
    return number;
}

export function ByInnerLogic(){
    // const [number, setNumber] = useRandomGenerator();
    const number = useRandomGenerator();

    // const [number, setNumber] = useState(0);

    return(
        <div>
            <h5>ByInnerLogic</h5>
            <p>number = {number}</p>
        </div>
    )
}