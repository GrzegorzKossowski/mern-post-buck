import React from 'react';

const HomePage = ({ ...restProps }) => {
    const [posts, setPosts] = React.useState([]);

    React.useEffect(() => {
        const fetchData = async function () {
            const response = await fetch('/api/v1/posts', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            });
            const data = await response.json();
            console.log(data);
            if (data) setPosts(data);
        };
        fetchData();
    }, []);

    return (
        <>
            <h1>Posts</h1>
            {posts.length > 0 &&
                posts.map(post => (
                    <div className='mb-2' key={post._id}>
                        {post.description}
                        <div>
                            - {post.userId.firstName} {post.userId.lastName}
                        </div>
                    </div>
                ))}
        </>
    );
};

export default HomePage;
