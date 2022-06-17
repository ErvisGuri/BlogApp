import { Button, Modal, Input, Select } from "antd";
import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { DatePicker } from "antd";
import "./Modal.css";
import BlogContext from "../../BlogContext";

const { Option } = Select;
const { TextArea } = Input;

const ModalAdd = ({ nameTextHandler }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const {
    nameValue,
    allpostBlogsValue,
    categoryValue,
    dateValue,
    textAreaValue,
    postBlogValue,
  } = React.useContext(BlogContext);

  const [name, setName] = nameValue;
  const [categorys, setCategorys] = categoryValue;
  const [date, setDate] = dateValue;
  const [textArea, setTextArea] = textAreaValue;
  const [postBlog, setPostBlog] = postBlogValue;
  const [allpostBlogs, setAllPostBlogs] = allpostBlogsValue;

  const onSubmitChange = (e) => {
    setIsModalVisible(false);
    e.preventDefault();

    /// postBlog ==> undefinding

    const postBlogObj = {
      name: name,
      category: categorys,
      date: date,
      textArea: textArea,
      id: Math.random() * 1000,
    };

    allpostBlogs.push(postBlogObj);
    setAllPostBlogs(allpostBlogs);

    handleCancel();
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setName("");
    setCategorys("");
    setDate("");
    setTextArea("");
  };

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const dateChangeHandler = (e) => {
    const dateFormat = "MM/DD/YYYY";
    setDate(e.format(dateFormat));
  };

  const categoryChangeHandler = (event) => {
    setCategorys(event);
  };

  const textAreaChangeHandler = (e) => {
    setTextArea(e.target.value);
  };

  return (
    <>
      <Button
        style={{
          color: "rgb(128, 126, 126)",
          borderRadius: "15px",
          marginRight: "200px",
          marginTop: "200px",
          position: "sticky",
          top: "270px",
        }}
        onClick={showModal}
      >
        Add Post
        <PlusOutlined />
      </Button>
      <Modal
        mask={true}
        maskStyle={{ backgroundColor: "rgb(223, 202, 202)" }}
        onChange={nameTextHandler}
        wrapclassName="addPostModal"
        title="Add a Post"
        visible={isModalVisible}
        onOk={onSubmitChange}
        onCancel={handleCancel}
        bodyStyle={{ height: "400px" }}
        footer={false}
      >
        <div className="body">
          <div className="modalName">
            Name Surname:
            <Input
              onChange={nameChangeHandler}
              value={name}
              style={{ width: "200px", marginLeft: "23px" }}
              placeholder="name"
            />
          </div>
          <div className="modalCategory">
            Category:
            <Select
              onSelect={categoryChangeHandler}
              value={categorys}
              className="select"
              placeholder="Select a category"
              style={{ width: "200px", margin: "2px 60px 2px 63px" }}
            >
              <Option value="Lifestyle">Lifestyle</Option>
              <Option value="Cooking">Cooking</Option>
              <Option value="Technology">Technology</Option>
              <Option value="Sport">Sport</Option>
            </Select>
          </div>
          <div className="date">
            Date:
            <DatePicker
              defaultValue={date}
              onChange={dateChangeHandler}
              style={{ width: "200px", marginLeft: "89.5px" }}
            />
          </div>
          <div style={{ marginTop: "20px" }}>
            Write Your Experience:
            <TextArea
              value={textArea}
              onChange={textAreaChangeHandler}
              rows={8}
            />
          </div>
        </div>
        <Button
          onClick={onSubmitChange}
          type="Submit"
          className="modalSubmitBtn"
        >
          POST
        </Button>
      </Modal>
    </>
  );
};

export default ModalAdd;
