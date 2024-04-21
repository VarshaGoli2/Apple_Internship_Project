import React from "react"
export default function Datatable({data}){
    const columns=data[0] && Object.keys(data[0])
    return(
        <table cellPadding={0} cellSpacing={0}>
            <thread>
                <tr>{data[0] && columns.map((heading)=><th>{heading}</th>)}</tr>
            </thread>
            <tbody>
                {data.map(row=><tr>
                    {
                        columns.map((column) => (
                        <td>{row[column]}</td>
                        ))
                    }
                </tr>)}
            </tbody>

        </table>
    )
}
