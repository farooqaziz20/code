import React from 'react'

export default function PostAds() {
    return (
        <div>
          <form>
              <input type="text" placeholder="title"></input>
              <select>
                  <option>Category</option>
                  <option>NoteBook</option>
                  <option>Novel</option>
                  <option>Magazine</option>
              </select>
              <input type="text" placeholder="price"></input>
              <textarea placeholder="description"></textarea>
              <input type="file"></input>
              <input type="text" placeholder="Name"></input>
              <input type="text" placeholder="Number"></input>
              <select>
                  <option>Province</option>
                  <option>Punjab</option>
                  <option>Sindh</option>
                  <option>Balochistan</option>
              </select>
              <select>
                  <option>City</option>
                  <option>Lahore</option>
                  <option>Faislabad</option>
                  <option>Kamalia</option>
              </select>
            </form>  
        </div>
    )
}
