import React from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
    const { userid } = useParams();

    return (
        <main className="container">
            <section className="row mt-3">
                <div className="col-12">
                    <h1 className="text-center">UserDetails Page for {userid}</h1>
                </div>
            </section>
        </main>
    )
}

export default UserDetails;