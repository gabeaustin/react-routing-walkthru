import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const UserDetails = () => {
    const { userid } = useParams();
    const [user, setUser] = useState(null); 

    useEffect(() => {
        fetch(`http://jsonplaceholder.typicode.com/users/${userid}`)
        .then(res => res.json())
        .then(user => setUser(user));
    }, []);


    return (
        <main className="container">
            <section className="row mt-3">
                <div className="col-12">
                    <h4 className="text-center">Details for</h4>
                    <h1 className="text-center">{user?.name}</h1>
                    <Link to="/users" className="btn btn-secondary">Go Back</Link>
                </div>
            </section>
        </main>
    )
}

export default UserDetails;