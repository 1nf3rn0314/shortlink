import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-orange-200">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 justify-center items-center p-10">
          <p className="text-3xl font-bold">The best URL Shortener out there</p>
          <p className="text-xl">Simple, Straightforward, No Bluff</p>
          <div className='try-now-btn in-page text-center py-2.5 w-[20%] bg-orange-100 shadow-lg hover:cursor-pointer rounded-2xl'><Link href='/shorten'>Try Now!</Link></div>
        </div>
        <div className="relative">
          <Image src="/people.jpg" fill={true} alt="Vector image of people sitting around a table" className="mix-blend-darken"/>
        </div>
      </section>
    </main>
  );
}
