"use client"

import React, { useState } from 'react';
import 'remixicon/fonts/remixicon.css'

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setMainTask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault()
    setMainTask([...mainTask, {title, desc}]);
    settitle("")
    setdesc("")
  };

  const deleteHandler = (i)=>{
    let copyTask = [...mainTask]
    copyTask.splice(i,1)
    setMainTask(copyTask)
  }

  let renderTask = <h2>No Task Available</h2>

  if (mainTask.length >0) {
    renderTask = mainTask.map((t, i) => {
      return(
        <li key={i} className='flex justify-between mb-5'>
          <div>
            <h5 className='title text-4xl font-mono font-bold capitalize'>{t.title}</h5>
            <h6 className='desc text-xl font-semibold text-gray-500'>{t.desc}</h6>
          </div>
          <button
          onClick={()=>{
            deleteHandler(i)
            }}
            className='dbtn text-4xl font-bold py-3 px-4  text-red-600 rounded text-center opacity-100 hover:opacity-80'>
            <i class="ri-delete-bin-6-fill"></i>
          </button>
        </li>
      );
    });
  }

  return (
    <>
      <div className="logo text-6xl items-center text-center bg-black py-5 px-5">
        <img className=' absolute' src="https://media.discordapp.net/attachments/1207022602191773698/1219755745516458075/logo.png?ex=660c750f&is=65fa000f&hm=ae746efe4b7ca235db94303de0dc1053f99ea0238864207c06cb1b64c91b5c03&=&format=webp&quality=lossless" alt=""/>
        <h1 className='banner text-white'>MURTUJA | Todo list
        </h1>
      </div>
      <form className=' text-center' 
      onSubmit={submitHandler}>
        <input 
          type="text"
          className='ititle text-3xl border-4 m-8 border-zinc-800 py-2 px-4'
          placeholder='Enter Title here'
          value={title}
          onChange={(e)=>{
            settitle(e.target.value)
          }}

        />

        <input 
          type="text"
          className='idesc text-3xl border-4 m-8 border-zinc-800 py-3 px-4'
          placeholder='Enter Description here'
          value={desc}
          onChange={(e)=>{
            setdesc(e.target.value)
          }}
        />

        <button className='btn text-3xl bottom-4 font-bold py-3 px-4 m-8 bg-black text-white  text-center'>
        <i class="ri-add-large-fill"></i>
        </button>
      </form>
      <hr />
      <div className='result p-5 bg-slate-200'>
        <ul>{renderTask}</ul>
      </div>
    </>
  )
}

export default page