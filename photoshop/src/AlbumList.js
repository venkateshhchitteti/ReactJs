import { useState } from "react";
import './AlbumList.css';
import Counter from "./Counter";
function AlbumList() {
    let [photos, setPhotos] = useState([]); //in order to trigger a re-render , use state
    
    if (!photos.length) {
        // getAlbums();
    }
    async function getAlbums() {
        photos = await (await fetch("https://jsonplaceholder.typicode.com/photos?_page=1&albumId="+document.getElementById('searchtext').value)).json();//why twice
        console.log(photos);
        setPhotos(photos);
    }
    return (
        <div>
            <Counter count={photos.length}></Counter>
            <input placeholder="Album Id" id='searchtext'></input><button onClick={getAlbums}>Search</button>
            <table>
                <thead>
                   <tr>
                    <td>Title</td>
                    <td>URL</td></tr>
                </thead>
                <tbody>
                    {
                        photos.map(function (photo) {
                            return <tr key={photo.id}>
                                <td>{photo.title}</td>
                                <td><a href={photo.url}>click here</a></td></tr>
                        })
                    }</tbody>
            </table>
        </div>
    )
}

export default AlbumList;