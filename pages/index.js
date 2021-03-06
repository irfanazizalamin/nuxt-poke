import Head from "next/head";
import { GET_ALL_POKEMON } from "../graphql/query";
import PokemonCard from "../components/PokemonCard";
import { setPokemon } from "../store/pokeSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

// import { useQuery, useLazyQuery } from "@apollo/client";
import client from "../apollo-client";

import InfiniteScroll from "react-infinite-scroll-component";

export default function Home() {
  const listPokemon = useSelector((state) => state.poke.listPokemon);
  const dispatch = useDispatch();
  console.log("pokemons", listPokemon);

  const fetchMoreData = async () => {
    const { data } = await client.query({
      query: GET_ALL_POKEMON,
      variables: {
        limit: 20,
        offset: listPokemon.length,
      },
    });

    setTimeout(() => {
      dispatch(setPokemon([...listPokemon, ...data?.pokemons?.results]));
    }, 1000);
  };

  useEffect(() => {
    fetchMoreData();
  }, []);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="bg-red-300">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <InfiniteScroll
          dataLength={listPokemon.length}
          hasMore={true}
          next={fetchMoreData}
          className="text-center"
          loader={<h5>loading...</h5>}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {listPokemon?.map((poke, index) => (
              <PokemonCard key={index} name={poke.name} image={poke.image} />
            ))}
          </div>
        </InfiniteScroll>
      </main>
    </div>
  );
}
