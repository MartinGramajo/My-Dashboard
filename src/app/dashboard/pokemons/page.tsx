

// creamos el fetch para hacer la consulta a la api
const getPokemons = async ( limit = 20, offset = 0) => {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
  .then(res => res.json());
  return data;
}


export default async  function PokemonsPage() {

  // guardamos los datos de la promesa en la constante
  const pokemons = await getPokemons();
  
  return (
    <div>
      {JSON.stringify(pokemons)}

    </div>
  );
}