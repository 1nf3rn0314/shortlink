import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className='bg-orange-300 flex items-center justify-around py-3'>
      <div className='branding flex items-center justify-center gap-3.75'>
        <Image src="logo.svg" width={48} height={48} alt="Logo Icon"/>
        <div className="text-white font-bold text-3xl">ShortLink</div>
      </div>
      <ul className='flex list-none gap-8 items-center'>
        {/* <li className='py-2.5 px-3 hover:bg-orange-200 hover:cursor-pointer rounded-2xl'><Link href='/'>Home</Link></li> */}
        <Link href='/'><li className='py-2.5 px-3 hover:bg-orange-200 hover:cursor-pointer rounded-2xl'>Home</li></Link>
        <Link href='/contact'><li className='py-2.5 px-3 hover:bg-orange-200 hover:cursor-pointer rounded-2xl'>Contact</li></Link>
        <Link href='/shorten'><li className='try-now-btn py-2.5 px-3 bg-orange-200 shadow-lg hover:cursor-pointer rounded-2xl'>Try Now!</li></Link>
        <li className='p-1 bg-orange-200 hover:cursor-pointer rounded-full'><Link href='https://github.com/1nf3rn0314/shortlink' target='_blank'><Image src="github.svg" width={32} height={32} alt="GitHub Icon"/></Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
