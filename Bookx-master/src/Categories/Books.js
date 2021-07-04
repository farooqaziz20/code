import React from 'react'
import Header from '../Components/Header';
import Categories from "../Components/Categories";
import ADsListingGrid from '../Pages/ADsListingGrid';


const Books = () => {
    return (
        <div>
      <Header />
      <Categories />
      <ADsListingGrid/>
        </div>
    )
}

export default Books
