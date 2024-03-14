import Blogs from './Components/Blogs/blogs'
import Cart from './Components/Cart/cart'
import './App.css'

function App() {

  return (
    <>
      <div className='text-center mt-5'>
        <h1 className='text-4xl'>Course Registation</h1>
        <div className='grid grid-cols-12'> 
        <div className='col-span-9'>
        <Blogs></Blogs>
        </div>
        <div className='col-span-3'>
        <Cart></Cart>
        </div>
        </div>
      </div>

    </>
  )
}

export default App
