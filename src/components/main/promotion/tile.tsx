import Image from "next/image";

export interface TileProps {
    name: string;
    image: string;
    price: number;
  }
  
  const Tile: React.FC<TileProps> = ({ name, image, price }) => {
    return (
      <div className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg shadow-md">
        <Image src={image} alt={name} width={250} height={350} className="w-48 h-48 object-cover mb-4 rounded-full" />
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600">${price}</p>
      </div>
    );
  };
  
  export default Tile;
  