import { useState } from "react";
import './AlbumList.css';
function AlbumList() {
    let [photos, setPhotos] = useState([]); //in order to trigger a re-render , use state
    
    if (!photos.length) {
        getAlbums();
    }
    async function getAlbums() {
        photos = await (await fetch("https://jsonplaceholder.typicode.com/photos?_page=1")).json();//why twice
        console.log(photos);
        setPhotos(photos);
    }
    return (
        <div>
            <input placeholder="Album Id"></input><button>Search</button>
            <table>
                <thead>
                   <tr>
                    <td>S.No</td> 
                    <td>Title</td>
                    <td>URL</td></tr>
                </thead>
                <tbody>
                    {
                        photos.map(function (photo) {
                            return <tr>
                                <td></td>
                                <td>{photo.title}</td>
                                <td><a href={photo.url}>click here</a></td></tr>
                        })
                    }</tbody>
            </table>
        </div>
    )
}

export default AlbumList;