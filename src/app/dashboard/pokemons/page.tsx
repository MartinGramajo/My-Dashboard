// creamos el fetch para hacer la consulta a la api

import { PokemonsResponse, SimplePokemon } from "@/app/pokemons";
import Image from "next/image";

// tipamos  la consulta con nuestra interfaces.
const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name
  }));

  return pokemons;
};

export default async function PokemonsPage() {
  // guardamos los datos de la promesa en la constante
  const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap gap-10 items-center justify-center">
        {pokemons.map((pokemon) => (
          <div key={pokemon.id} className="w-100  p-2 rounded-xl">
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
              alt={pokemon.name}
              width={100}
              height={100}
            />
            <p className="text-center mt-4">{pokemon.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
