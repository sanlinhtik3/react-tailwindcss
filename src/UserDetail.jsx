import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const UserDetail = () => {

    const {id} = useParams()

    const [post, setPost] = useState([]);

    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then((response) => response.json())
        .then((data) => setPost(data));
    }, []);

    console.log(post);

    return (
      <>
        <div className="container mx-auto">
          <Link to="/"> Back </Link>
          <div className=" border p-5 rounded-xl shadow-xl mt-10">
            <img src={post.url} className="mb-5 rounded-lg" alt="" />
            <h1>User : {id} </h1>
            <h2>{post.title}</h2>
          </div>
        </div>
      </>
    );
}

export default UserDetail;