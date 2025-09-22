//this goes into list componentns]\

import React from "react";

export default function ListItem({item}:{item:string | React.ReactNode}){
    return(
        <>
        <li className="p-2 hover:bg-blue-300/25 border-b border-b-blue-800/25 light">
            <p className="text-lg">{item}</p>
        </li>
        </>
    )
}