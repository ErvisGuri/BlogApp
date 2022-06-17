import React, { createContext, useState, useEffect } from "react";

const BlogContext = createContext();


export function BlogProvider({ children }) {

    const [input, setInput] = useState('');
    const [name, setName] = useState('');
    const [categorys, setCategorys] = useState('');
    const [date, setDate] = useState('');
    const [textArea, setTextArea] = useState('');
    const [postBlog, setPostBlog] = useState({});
    const [allpostBlogs, setAllPostBlogs] = useState([]);


    // () => JSON.parse(localStorage.getItem('postBlog')) ||

    // useEffect(() => {
    //     const postBlog = JSON.parse(localStorage.getItem('postBlog'));
    //     if (postBlog) {
    //         setPostBlog(!postBlog);
    //     }
    // }, [])

    // //Saving data to local storage 
    // useEffect(() => {
    //     localStorage.setItem('postBlog', JSON.stringify(postBlog));
    // }, [postBlog]);





    return (
        <BlogContext.Provider
            value={{
                inputValue: [input, setInput],
                nameValue: [name, setName],
                categoryValue: [categorys, setCategorys],
                dateValue: [date, setDate],
                textAreaValue: [textArea, setTextArea],
                postBlogValue: [postBlog, setPostBlog],
                allpostBlogsValue: [allpostBlogs, setAllPostBlogs]
            }}
        >
            {children}
        </BlogContext.Provider>
    );
}

export default BlogContext;