import Image from "next/image";
import Link from "next/link";

export interface TileProps {
  name: string;
  image: string;
  price: number;
  _id: string;
}

const Tile: React.FC<TileProps> = ({ name, image, price, _id }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg shadow-md my-10">
      <Link href={'/' +_id} className="flex flex-col items-center justify-center">
        <Image src={image} alt={name} width={250} height={350} className="w-80 h-80 object-cover mb-10 rounded-full" />
        <h3 className="text-2xl font-light mb-2">{name}</h3>
        <p className="text-gray-600">${price}.00</p>
      </Link>
    </div>
  );
};

export default Tile;
