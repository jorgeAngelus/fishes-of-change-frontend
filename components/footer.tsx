import Link from "next/link";

export default function Footer(){
    return (
        <div className="w-full bg-gray-800 py-3 flex justify-center">
            <Link href="/">
                <a className="text-white font-bold hover:text-yellow-300 hover:underline">FISHES OF CHANGE</a>
            </Link>
        </div>
    );
}