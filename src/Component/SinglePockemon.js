import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';


const SinglePockemom = ({}) =>{

    const [ singlepockemon, setSinglePockemon ] = useState([]);
    const [pokemonImg, setPokemonImg]= useState([]);
    const [pokemonAbilitiesFirst, setPokemonAbilitiesFirst]= useState([]);
    const [pokemonAbilitiesSecond, setPokemonAbilitiesSecond]= useState([]);
    const [pokemonName, setPokemonName]= useState([]);
    const [pokemonMovesOne, setPokemonMovesOne]= useState([]);
    const [pokemonMovesTwo, setPokemonMovesTwo]= useState([]);
    const [pokemonMovesThree, setPokemonMovesThree]= useState([]);
    const [pokemonMovesFour, setPokemonMovesFour]= useState([]);
    const [pokemonMovesFive, setPokemonMovesFive]= useState([]);



    let { id } = useParams();
    id = id+1;
    const getUsers = async () =>{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const poks = await response.json();
        setSinglePockemon (poks);
        setPokemonImg(poks.sprites);
        setPokemonMovesOne(poks.moves[0].move.name);
        setPokemonMovesTwo(poks.moves[1].move.name);
        setPokemonMovesThree(poks.moves[2].move.name);
        setPokemonMovesFour(poks.moves[3].move.name);
        setPokemonMovesFive(poks.moves[4].move.name);
        setPokemonAbilitiesFirst(poks.abilities[0].ability.name);
        setPokemonAbilitiesSecond(poks.abilities[1].ability.name);
        setPokemonName(poks.species.name);
    };

    useEffect(()=>{
        getUsers();
    }, []);

    return(
        <>

            <div className='containerPok'>
                <div className='singlePok'>
                    <div className="detailsPok">
                       
                        <div className="namePok"> 
                            <img className='img-pok' src={pokemonImg.front_default}/>
                            <div className="name">{pokemonName}</div>
                        </div>
                        
                        <div className="abilityPok">
                            <div className="title">Abilities <span>{pokemonAbilitiesFirst} , {pokemonAbilitiesSecond} </span></div>
                        </div>


                        <div className="heightPok">
                            <div className="title" >Height  <span>{singlepockemon.height}</span> </div>
                        </div>
                        <div className="weightPok">
                            <div className="title" >Weight <span>{singlepockemon.weight}</span> </div>
                        </div>
                        <div className="movesPok">
                            <div className="title">Moves  <span>{pokemonMovesOne} , {pokemonMovesTwo} , {pokemonMovesThree} , {pokemonMovesFour} , {pokemonMovesFive} </span> </div>
                        </div>
                       
                    </div>
                    
                </div>
            </div>

        </>
    );

};

export default SinglePockemom;


