import React from 'react'
import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function User() {

  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=15")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  console.log(posts);

  return (
    <>
      <div className=" container mx-auto">
        <h1 className=' text-3xl mb-5'>User Data</h1>

        <div className=' grid grid-cols-4 gap-5'>
          {posts.map((post) => {
            return (
              <div
                key={post.id}
                className=" border p-5 rounded-xl"
                onClick={() => navigate(`/detail/${post.id}`)}
              >
                <img src={post.url} className="mb-5 rounded-lg" alt="" />
                {post.id}. {post.title}{" "}
                <Link to={`/detail/${post.id}`} className=" text-green-500">
                  See more...
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default User