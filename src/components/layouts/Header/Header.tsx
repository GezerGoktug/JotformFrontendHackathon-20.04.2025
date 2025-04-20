import HeaderLeft from './HeaderLeft'
import HeaderRight from './HeaderRight'

const Header = () => {
  return (
    <div className='fixed left-0 top-0 right-0 py-6 border-b shadow-sm'>
      <div className='container flex-between'>
        <HeaderLeft/>
        <HeaderRight/>
      </div>
    </div>
  )
}

export default Header