import React, { useState } from "react";
import { useDispatch } from "react-redux";
import  authService  from '../../appwrite/auth'
import { logout } from '../../store/authSlice'
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

function LogoutBtn(props) {

    const dispatch = useDispatch();

    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout());
        })

        setTimeout(() => {
            window.location.reload();
        }, 2000)

    }

    const handleLogout = () => {
        
        Swal.fire({
            title: "Are you sure you want to logout?",
            showCancelButton: true,
            confirmButtonText: "Logout",
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              logoutHandler();
              if(!props.authStatus) {
              Swal.fire("Logged Out Successfully", "", "success");
              }
              else 
              Swal.fire({
                title: "Failed to Logout",
                text: "",
                icon: "error"});
            
            } 
          });
    }

    return <button className='inline-bock px-6 py-2 duration-200 hover:bg-[#212121] rounded-full'
        onClick={handleLogout}>
            Logout
        </button> 
}

export default LogoutBtn;