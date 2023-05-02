import React from 'react'
import Card from './Components/Card';
import data from './Components/data';

const App = () => {
  return (
    <div>
      
      {/*<Card 
      imgsrc= {data[0].imgsrc}
      title = {data[0].title}
      sname = {data[0].sname}
      link =  {data[0].link}/>
      
      <Card 
      imgsrc= {data[1].imgsrc}
      title = {data[1].title}
      sname = {data[1].sname}
      link =  {data[1].link}/>

      <Card 
      imgsrc= {data[2].imgsrc}
      title = {data[2].title}
      sname = {data[2].sname}
      link =  {data[2].link}/>

      <Card 
      imgsrc= {data[3].imgsrc}
      title = {data[3].title}
      sname = {data[3].sname}
      link =  {data[3].link}/>

      <Card 
      imgsrc= {data[4].imgsrc}
      title = {data[4].title}
      sname = {data[4].sname}
      link =  {data[4].link}/> */}

      {/* using map method*/}

     { data.map((currdata) => {

          return (
            <Card 
            imgsrc= {currdata.imgsrc}
            title = {currdata.title}
            sname = {currdata.sname}
            link =  {currdata.link}/>
          )
      }) }

    </div>
  )
}

export default App
