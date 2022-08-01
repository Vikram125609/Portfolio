import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
const About = () => {
    const navigate = useNavigate();
    const callAboutPage = async () => {
        try {
            const res = await fetch('/about', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });
            const data = await res.json();
            console.log(data);
            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (error) {
            console.log("hello")
            navigate('/Login');
            console.log(error);
        }
    }
    useEffect(() => {
        callAboutPage();
    }, [])
    return (
        <>
            <h1>THIS IS ABOUT</h1>
        </>
    );
};
export default About;