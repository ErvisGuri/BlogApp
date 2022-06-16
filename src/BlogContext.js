import React, { createContext, useState } from "react";

const BlogContext = createContext();


export function BlogProvider({ children }) {

    const [input, setInput] = useState('');
    const [name, setName] = useState('');
    const [categorys, setCategorys] = useState('');
    const [date, setDate] = useState('');
    const [textArea, setTextArea] = useState('');
    const [postBlog, setPostBlog] = useState([]);


    return (
        <BlogContext.Provider
            value={{
                inputValue: [input, setInput],
                nameValue: [name, setName],
                categoryValue: [categorys, setCategorys],
                dateValue: [date, setDate],
                textAreaValue: [textArea, setTextArea],
                postBlogValue: [postBlog, setPostBlog]
            }}
        >
            {children}
        </BlogContext.Provider>
    );
}

export default BlogContext;