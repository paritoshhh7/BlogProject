import React from 'react'
import {LogoutBtn, Container} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
// import Logo from '../../assets/publication.png'
import Logo from '../../assets/icons8-blog-50.png'
// import Logo from '../../assets/blog.png'

function Header() {
  
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]

  const handleButtonClick = (item) => {
    navigate(item.slug);
  };

  return (
    <header className='py-3 shadow bg-[#1B1B1B] text-white'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <img src={Logo} alt="" className='w-[35px] ml-2 filter invert'/>
              </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) =>
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => { 
                  handleButtonClick(item);
                }
              }
                className={`inline-bock px-6 py-2 duration-200 hover:bg-[#212121] rounded-full`}
                >{item.name}</button>
              </li>
            ) : null
            )}

            {authStatus && (
              <li>
                <LogoutBtn auth={authStatus}/>
              </li>
            )}
          </ul>
        </nav>
        </Container>
    </header>
  )
}

export default Header












// import React from "react";
// import { useDispatch, useSelector } from 'react-redux'
// import {Logo, LogoutBtn} from '../index'
// import {Container} from '../container/Container'
// import { Link, useNavigate } from "react-router-dom";



// function Header() {

//     const authStatus = useSelector(state => state.auth.status);

//     const navigate = useNavigate()

//     const navItems = [
//         {
//             name: 'Home',
//             slug: '/',
//             active: true
//         },
//         {
//             name: "Login",
//             slug: "/login",
//             active: !authStatus,
//         },
//         {
//             name: "Signup",
//             slug: "/signup",
//             active: !authStatus,
//         },
//         {
//             name: "All Posts",
//             slug: "/all-posts",
//             active: authStatus,
//         },
//         {
//             name: "Add Post",
//             slug: "/add-post",
//             active: authStatus,
//         },
//     ]

//     return( <header className="py-3 shadow bg-gray-500">
//         <Container>
//             <nav className="flex">
//                 <div className="mr-4">
//                     <Link to='/'>
//                         <Logo width='70px'/>
//                     </Link>
//                 </div>

//                 <ul className="flex ml-auto">
                    
//                     {navItems.map((item) => item.active ? (<li key={item.name}>
//                     <button className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
//                     onClick={() => navigate(item.slug)}>
//                     {item.name}
//                     </button>
//                     </li>
//                 ) : null )}

//                 { authStatus && (<li><LogoutBtn /></li>) }
                    
//                 </ul>

                
//             </nav>
//         </Container>
//     </header>
//     );
// }

// export default Header;

// import React from "react";

// function Footer() {
//     return (
//         <div>
//             Footer
//         </div>
//     );
// }

// export default Footer;