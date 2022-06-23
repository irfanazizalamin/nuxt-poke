import Image from "next/image";

const PokemonCard = ({ name, image }) => {
  return (
    <div className="card m-2 text-center cursor-pointer border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
      <div className="container p-4">
        <Image
          src={image}
          alt="pokemon-logo"
          width={100}
          height={100}
        />
        <h2 className="text-lg mt-2 font-semibold">{ name }</h2>
      </div>
    </div>
  )
};

export default PokemonCard;
