import React, { useEffect, useState } from 'react';

const SearchForm = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [allHouses, setAllHouses] = useState('');
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = allHouses.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(allHouses.length / recordsPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  console.log(records)
  useEffect(() => {
    fetch('https://house-hunter1.onrender.com/houses')
      .then(res => res.json())
      .then(data => {
        setAllHouses(data);
      });
  }, []);
  const prePage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  const changePage = (id) => {
    setCurrentPage(id);

  }
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  }


  const [citySearch, setCitySearch] = useState('')
  const [bathrooms, setBathrooms] = useState('')
  const [roomSize, setRoomSize] = useState('')
  const [bedRooms, setBedRooms] = useState('');

  const handleBook = () => {

  }
  return (
    <div className="">
      <div className='flex justify-between items-center mx-3 '>


        <select onChange={(e) => setCitySearch(e.target.value)} className="select w-52 mx-2   btn  max-w-xs">
          <option value='' selected>
            search By City
          </option>
          <option value="chittagong">chittagong</option>
          <option value="dhaka">Dhaka</option>
          <option value="comilla">cumilla</option>
          <option value="cox's bazar">Cox's Bazar</option>
          <option value="noakhali">Noakhali</option>
        </select>


        <select onChange={(e) => setBedRooms(e.target.value)} className="select w-52 mx-2   btn  max-w-xs">
          <option value='' selected>
            search By BedRooms
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>


        <select onChange={(e) => setBathrooms(e.target.value)} className="select  w-52 mx-2  btn wmax-w-xs">
          <option value='' selected>
            search By Bathrooms
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>

        <select onChange={(e) => setRoomSize(e.target.value)} className="select w-52 mx-2  btn-o btn w-full max-w-xs">
          <option value='' selected>
            search By Size
          </option>
          <option value="large">Large room</option>
          <option value="medium">medium room</option>
          <option value="small">small room</option>
        </select>
      </div>


      <div class="overflow-x-auto w-full">
        <table class="table w-full ">
          <thead className=' '>
            <tr className='w-full text-white '>
              <th>Image</th>
              <th>City</th>
              <th>Rooms</th>
              <th>Bathrooms</th>
              <th>size</th>
              <th>Price</th>
              <th>Booking</th>
            </tr>
          </thead>
          <tbody>
            {records &&
              records
                .filter((u) =>
                  (citySearch.toLowerCase() === "" ? u : u.city.toLowerCase().includes(citySearch)) &&

                  (!bedRooms ||
                    (bedRooms === "1" && u.bedrooms === 1) ||
                    (bedRooms === "2" && u.bedrooms === 2) ||
                    (bedRooms === "3" && u.bedrooms === 3) ||
                    (bedRooms === "4" && u.bedrooms === 4)) &&


                  (!bathrooms ||
                    (bathrooms === "1" && u.bathrooms === 1) ||
                    (bathrooms === "2" && u.bathrooms === 2) ||
                    (bathrooms === "3" && u.bathrooms === 3)) ||
                  (bathrooms === "4" && u.bathrooms === 4) &&

                  (roomSize.toLowerCase() === "" ? u : u.room_size.toLowerCase().includes(roomSize))

                )
                .map((u) => (
                  <tr key={u.id} className="text-white">
                    <td>
                      <img className='w-16' src={u.image} alt="" />
                    </td>
                    <td>
                      <div class="flex items-center space-x-3">
                        <div>
                          <div class="font-bold">{u.city}</div>
                        </div>
                      </div>
                    </td>
                    <td>{u.bathrooms}</td>
                    <td>{u.bedrooms}</td>
                    <td>{u.room_size}</td>
                    <td>{u.price}</td>
                    <td>
                      <button onClick={() => handleBook()} className='bg-indigo-500 btn btn-xs m-1 text-white'>Delete</button>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>




      <div className='pagination my-10 '>
        <button onClick={prePage} className='page-item btn  mx-1 '>
          Prev
        </button>
        {
          numbers.map((n, i) => (
            <button onClick={() => changePage(n)} className={`page-link btn btn-outline btn-info mx-1 ${currentPage === n ? 'active' : ''}`} key={i}>
              {n}
            </button>
          ))
        }
        <button onClick={nextPage} className='page-item btn  mx-1'>
          Next
        </button>
      </div>
    </div>
  );
};


export default SearchForm;
