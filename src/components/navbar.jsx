import { navLinks } from '../constants/index';

const Navbar = () => {
  return (
    <header>
      <nav>
        <img src="/logo.svg" alt="Logo" />

        <ul>
          {navLinks.map(({ label }) => (
            <li key={label}>
              <a href={label}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className='flex-center gap-3'>
          <button>
            <img src="/search.svg" alt="Search" width={18} height={18} />
          </button>
          <button>
            <img src="/cart.svg" alt="Cart" width={18} height={18} />
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar