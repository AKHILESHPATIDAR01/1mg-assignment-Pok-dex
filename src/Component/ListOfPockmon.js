import React, { useEffect, useState } from 'react';
import ReactPagination from 'react-paginate';
import { BrowserRouter as Router , Link}  from 'react-router-dom'

const url = "https://pokeapi.co/api/v2/pokemon?offset=$%7Boffset%7D&limit=$%7Blimit%7D";

const ListOfPockemom = () =>{

    const [ pockemon, setPockemon ] = useState([]);
    const [pageNo, setPageNo] = useState(0);

    const getUsers = async () =>{
        const response = await fetch(url);
        const poks = await response.json();
        console.log("I am from -- ", poks);
        const x = poks.results;
        console.log(x);
        setPockemon(x);
    };

    useEffect(()=>{
        getUsers();
    }, []);

    const itemsPerPage = 12;
    const visitedPages = pageNo*itemsPerPage;

    const displayItems = pockemon.slice(visitedPages, visitedPages+itemsPerPage).map((items,index)=>{
        const {name,url} = items;
        return(
            <Router>
                <Link to={`details/${index}`}>
                    <li key={index}>
                        {/* <p>{index+1}</p> */}
                        <h4>{name}</h4>
                        {/* <a href={url}>Details</a> */}
                    </li>
                </Link>
            </Router>
            );
    });

    

    const pageCount = Math.ceil(pockemon.length/itemsPerPage);

    const changePage = ({selected})=>{
        setPageNo(selected);
    }


    // console.log(pockemon);
    return(
        <>
        <ul className='card'>
            {displayItems}
        </ul>
        <ReactPagination 
            previousLabel={"Prev"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBtns"}
            activeClassName={"paginationActive"}
        />

        </>
    );

};

export default ListOfPockemom;


