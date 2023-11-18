import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import '../index.css';
import Card from './Card';
import prizeData from '../data.json';

export default function List() {
  const [prizes, setPrizes] = useState([]);
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    setPrizes(prizeData.prizes || []);
  }, []);

  const yearsArray = [];
  for (let year = 2018; year >= 1900; year--) {
    yearsArray.push(year)
  }

  const uniqueCategories = Array.from(new Set(prizes.map((prize) => prize.category)))

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value)
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value)
  }

  return (
    <>
      <div className='container list'>
        <h1 className='p-3 mb-2'>The list of noble prize winners yearwise are here</h1>
        <div className='dropHead'>
          <select
            className='fs-5 h-100 bg-warning pr-5 pl-5 rounded'
            onChange={handleYearChange}
            value={selectedYear}
          >
            <option value=''>Select Year</option>
            {yearsArray.map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </select>
          <select
            className='fs-5 h-100 bg-warning pr-5 pl-5 rounded'
            onChange={handleCategoryChange}
            value={selectedCategory}
          >
            <option value=''>Select Category</option>
            {uniqueCategories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className='container'>
        {prizes
          .filter(
            (prize) =>
              (!selectedYear || prize.year === selectedYear.toString()) &&
              (!selectedCategory || prize.category === selectedCategory)
          )
          .map((prize, index) => (
            <div key={index} className='m-3 fs-3'>
              <div>
                {prize.year}
                <hr />
                <div key={index}>
                  <Card prize={prize} />
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  )
}

