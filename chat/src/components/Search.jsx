import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type="text" placeholder='find friend'/>
      </div>
      <div className='userChat'>
        <img src="https://media.istockphoto.com/id/1082467846/pl/zdj%C4%99cie/u%C5%9Bmiechni%C4%99ci-rodzice-z-dw%C3%B3jk%C4%85-dzieci.jpg?s=612x612&w=0&k=20&c=afLAo7xxqEcMHVyMGYszIzE6txb6gCN4yoYJG4cXWgs=" alt="user search" />
        <span>Bob</span>
      </div>
      <div style={{marginLeft: 10,marginRight: 10, borderTop: "1px solid white"}}></div>
    </div>
  )
} 

export default Search