import { Button, Modal, Input, Select } from "antd";
import React, { useEffect, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { DatePicker } from "antd";
import "./Modal.css";
import BlogContext from "../../BlogContext";

const { Option } = Select;
const { TextArea } = Input;

const ModalAdd = ({ addNewPost, nameTextHandler }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { nameValue, categoryValue, dateValue, textAreaValue, postBlogValue } =
    React.useContext(BlogContext);

  const [name, setName] = nameValue;
  const [categorys, setCategorys] = categoryValue;
  const [date, setDate] = dateValue;
  const [textArea, setTextArea] = textAreaValue;
  const [postBlog, setPostBlog] = postBlogValue;

  const onSubmitChange = (e) => {
    setIsModalVisible(false);
    e.preventDefault();
    setPostBlog([
      ...postBlog,
      {
        text: name,
        category: categorys,
        date: date,
        textArea: textArea,
        id: Math.random() * 1000,
      },
    ]);
    setName("");
    setCategorys("");
    setDate("");
    setTextArea("");
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const dateChangeHandler = (e) => {
    const dateFormat = "DD-MM-YYYY";
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
      <Button className="addBtn" onClick={showModal}>
        <PlusOutlined />
      </Button>
      <Modal
        onChange={nameTextHandler}
        wrapclassName="addPostModal"
        title="Add a Post"
        visible={isModalVisible}
        onOk={addNewPost}
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
              style={{ width: "200px", marginLeft: "90px" }}
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
