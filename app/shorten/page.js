"use client"

import Link from "next/link";
import { useState } from "react"

const LinkShortener = () => {
  const [url, setUrl] = useState("");
  const [endpoint, setEndpoint] = useState("");
  const [generated, setGenerated] = useState("");

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "endpoint": endpoint
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        alert(result.message);
        setUrl("");
        setEndpoint("");
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${endpoint}`);
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className='bg-orange-300 w-fit p-10 rounded-4xl border-2 border-orange-500 mx-auto mt-25 flex flex-col gap-10'>
      <h1 className='text-2xl'>Generate your short and easily shareable URLs</h1>
      <div className='flex flex-col gap-3.5'>
        <input type='text' value={url} placeholder='Paste long URL here' className='text-lg w-full border-1 border-orange-100 focus:border-orange-500 p-3 rounded-xl bg-orange-100 outline-none' onChange={event => setUrl(event.target.value)}/>
        <input type='text' value={endpoint} placeholder='Custom URL endpoint' className='text-lg w-full border-1 border-orange-100 focus:border-orange-500 p-3 rounded-xl bg-orange-100 outline-none' onChange={event => setEndpoint(event.target.value)}/>
        <button onClick={generate} className='try-now-btn w-full mx-auto p-3 bg-orange-200 shadow-lg hover:cursor-pointer rounded-2xl text-lg'>Generate</button>
      </div>
      {generated && 
        <div className="flex flex-col gap-2">
          <div className="text-xl">Here is your generated URL:</div>
          <Link href={generated} target="_blank">
            <code className="text-xl font-bold text-orange-800 hover:cursor-pointer">{generated}</code>
          </Link>
        </div>
      }
    </div>
  )
}

export default LinkShortener
