import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

// let { id } = useParams();

//const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

const SinglePockemom = ({}) =>{

    const [ singlepockemon, setSinglePockemon ] = useState([]);
    const [pokemonImg, setPokemonImg]= useState([]);
    const [pokemonMoves, setPokemonMoves]= useState([]);
    const [pokemonAbilitiesFirst, setPokemonAbilitiesFirst]= useState([]);
    const [pokemonAbilitiesSecond, setPokemonAbilitiesSecond]= useState([]);
    const [pokemonName, setPokemonName]= useState([]);



    let { id } = useParams();
    console.log("Id is : ",id);
    // const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    const getUsers = async () =>{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const poks = await response.json();
        console.log("I am from -- ", poks);
        // const x = poks.results;
        // console.log(x);
        setSinglePockemon (poks);
        setPokemonImg(poks.sprites);
        setPokemonMoves(poks.moves);
        setPokemonAbilitiesFirst(poks.abilities[0].ability.name);
        setPokemonAbilitiesSecond(poks.abilities[1].ability.name);
        setPokemonName(poks.species.name);
    };

    console.log("Imges", pokemonImg);
    console.log("Moves", pokemonMoves);

    useEffect(()=>{
        getUsers();
    }, []);

    // const ability = pokemonAbilities.map((items)=>{
    //     return <span>{items}</span>
    // })

    // const abilities = singlepockemon.abilities.map((item)=>{
    //         return item.name;
    //     });

    // console.log("Abilities " ,abilities.item);

    return(
        <>
            {/* <img src={singlepockemon.sprites.front_default} />
            <h1>{singlepockemon.abilities[0].ability.name}</h1>
            <h1>{singlepockemon.abilities[1].ability.name}</h1>
            <h1>{singlepockemon.height}</h1>
            <h1>{singlepockemon.weight}</h1> */}

            <div className='containerPok'>
                <div className='singlePok'>
                    {/* <div className='imgPart'>
                        <img className='imgPok' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" alt="img" />
                    </div> */}
                    <div className="detailsPok">
                        {/* <div className="namePok"> PockeMon Name</div> */}
                        <div className="namePok"> 
                            {/* <img className='img-pok' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"/> */}
                            <img className='img-pok' src={pokemonImg.front_default}/>

                            <div className="name">{pokemonName}</div>
                        </div>
                        
                        <div className="abilityPok">
                            {/* <div className="title">Abilities <span>{singlepockemon.abilities[0].ability.name} , {singlepockemon.abilities[1].ability.name}</span></div> */}
                            {/* <div className="title">Abilities <span> One , two</span></div> */}
                            <div className="title">Abilities <span>{pokemonAbilitiesFirst} , {pokemonAbilitiesSecond} </span></div>

                        </div>

                        <div className="heightPok">
                            <div className="title" >Height  <span>{singlepockemon.height}</span> </div>
                        </div>
                        <div className="weightPok">
                            <div className="title" >Weight <span>{singlepockemon.weight}</span> </div>
                        </div>
                        <div className="movesPok">
                            <div className="title">Moves  <span>{pokemonMoves.moves}</span> </div>
                            {/* <p className="text">A</p> */}
                        </div>
                       

                        
                    </div>
                    
                </div>
            </div>

        </>
    );

};

export default SinglePockemom;


