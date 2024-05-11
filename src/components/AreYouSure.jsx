import React from 'react'
import authService from '../appwrite/auth';
import { logout } from '../store/authSlice';
import Button from './Button';
import { useDispatch } from 'react-redux';

function AreYouSure(props) {

    const dispatch = useDispatch();

    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout());
        })

        props.setter(false);
    }

    return (
        <div className='text-[25px] font-bold flex justify-center items-center flex-col'>
            <p className='m-3'>Are you sure, You want to logout?</p>
            <div className='flex gap-4'>
                <Button bgColor='bg-green-400' onClick={logoutHandler}>Ok</Button>
                <Button bgColor='bg-red-400' onClick={() => props.setter(false)}>Cancel</Button>
            </div>
        </div>
    );

}

export default AreYouSure;