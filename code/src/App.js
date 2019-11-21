import React from 'react'
import data from './data.json'
import playlistdata from './stretch-goal.json'
import './app.css'
import { Header } from './components/Header'
import { Album } from './components/Album'
import { Playlist } from './components/Playlist'

//console.log(data)
//Get the data from API (data.albums.items is where every release info is)
//Using the id from API to uniqe key ID
//item={item} is getting all info from comp Album 
//Which one is parent component and child component?

export const App = () => {
  return (
    <div className="app">
      <section className="sideBar">
        {playlistdata.playlists.items.map(item => {
          return (
            <Playlist key={item.id} item={item} />
          )
        })}
      </section>

      <div className="mainContent">
        <Header />
        <div className="appContent">
          {data.albums.items.map(item => {
            return (
              <Album key={item.id} item={item} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

//Working APP without sidebar
// export const App = () => {
//   return (
//     <div className="app">
//       <Header />
//       <div className="appContent">
//         {data.albums.items.map(item => {
//           return (
//             <Album key={item.id} item={item} />
//           )
//         })}
//       </div>
//     </div>
//   )
// }