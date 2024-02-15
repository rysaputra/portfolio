import Link from 'next/link';

const Navbar = () => {
  const newLocal = "body-text !font-normal mb-3 hover:text-teal-400 transition duration-700 ease-in-out";
  return (
    <nav className="flex-center fixed top-0 z-50 w-full border-b-2 border-black-200 bg-black-100 py-7 text-white">
      <div className="flex-between mx-auto w-full max-w-screen-2xl px-16 max-md:flex-row">
        <Link href="/" className='x-paddings'>
          <h1 className='sm:heading3 max-lg:heading3'>Ryo Saputra</h1>
        </Link>

        <ul className="flex-center gap-x-3 max-md:hidden md:gap-x-10">
          <li className="body-text text-teal-400 hover:text-white mb-3 !font-bold transition duration-700 ease-in-out">
            <Link
              href="#about"
            >
              Tentang saya
            </Link>
          </li>
          <li className={newLocal}>
            <Link
              href="#portfolio"
            >
              Portofolio
            </Link>
          </li>
          <li className="body-text !font-normal mb-3 hover:text-teal-400 transition duration-700 ease-in-out">
            <Link
              href="#hubungikami"
            >
              Hubungi saya
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
