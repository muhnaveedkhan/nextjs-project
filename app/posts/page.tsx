"use client"

import { useState, useEffect } from "react";

export default function Page() {

    const [data, setData] = useState();

    useEffect(() => {
        async function fetchDataAsync() {
            const result = await fetchData();
            setData(result);
        }
        fetchDataAsync();
    }, []);

    return (

        <>
            <h1>Posts Page!</h1>

            {data ? (
                data.map((dt:any) => (
                    <p key={dt.id}>{dt.id} <br /> {dt.title} <br /> {dt.body} <hr /></p> // Use dt.id instead of data.id
                ))
            ) : (
                <p>Loading data...</p>
            )}



        </>
    );
}

async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        return await response.json()
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}
