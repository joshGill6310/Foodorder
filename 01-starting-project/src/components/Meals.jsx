import { useState, useEffect } from 'react';

import MealItem from './MealItem';
import useHttp from '../hooks/useHttp';

const requestConfig ={}
export default function Meals(){
    const {data:loadedMeals, isLoading, error,
    }=useHttp('http://localhost:3000/meals',requestConfig, [])
    
    if(isLoading){
        <p className='center'> Fetching meals...</p>
    }
    if(error){
        return <Error title='failed to fetch data'
         message={error} />
    }
    
    return (
        <ul id="meals">
        {loadedMeals.map((meal)=> (
            <MealItem key={meal.id} meal = {meal}></MealItem>
        ))}
    </ul>)
}