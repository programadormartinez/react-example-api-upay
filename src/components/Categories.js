import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { LoadingSpinner } from '../utils/LoadingSpinner';

export const Categories = () => {
    const [categories, setCategories] = useState([]);

    async function getData(){
        await fetch('https://pg-delsur.herokuapp.com/categories')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setCategories(data)
        })
        .catch(err => {
            console.log(err);
        })
    }


    useEffect(()=> {
        getData();
    }, [])
    return (
            <ul className="navbar-nav mb-2 mb-lg-0">
                <h1>Hola</h1>
                {
                    categories?.length > 0 ? (categories?.map((category) => {
                        return (<li key={category.id}>
                            <Link  className="nav-link" to={`/categories/${category.id}`}>
                            <span>{category.name}</span>
                            </Link>
                        </li>)
                    })): (
                        <LoadingSpinner/> )
                }
            </ul>
    )
}
