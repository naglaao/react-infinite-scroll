import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import './App.css';


function App() {

  const [items, setItems] = useState(Array.from({ length: 20 }))
  const hasMore = true

  const fetchData = () => {
    setTimeout(() => setItems([...items.concat(Array.from({ length: 20 }))]),
      1500); // Simulate fetching new data after a timeout of two seconds
  };


  // remove item function
  const handleRemove = (index) => {
    let deletElement = document.querySelectorAll('.items')[index];
    let newItem = items.filter((item) => item !== index)
    deletElement.remove()
    setItems(newItem);

  }



  return (
    <div className="App" >
      <div id='main' className='items-container' >
        <InfiniteScroll
          scrollableTarget="main"
          loader={''}
          dataLength={items.length}
          next={fetchData}
          hasMore={hasMore}
        >

          {items.map((item, index) => (
            <div className='items' key={index}>
              <div className='item'>
                <div className='item-text'>
                  <p>Item :{index + 1} </p>
                </div>
                <div className='item-btn'>
                  <button
                    onClick={() => handleRemove(index)}
                    className='btn'
                  >Delete</button>
                </div>
              </div>

            </div>
          ))}

        </InfiniteScroll>

      </div>
    </div>
  );
}

export default App;