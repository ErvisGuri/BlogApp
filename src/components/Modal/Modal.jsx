import { Button, Modal } from "antd";
import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Input, Select } from "antd";
import type { DatePickerProps } from "antd";
import { DatePicker } from "antd";
import "./Modal.css";

const { Option } = Select;

const ModalAdd = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button className="addBtn" onClick={showModal}>
        <PlusOutlined />
      </Button>
      <Modal
        wrapclassName="addPostModal"
        title="Add a Post"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        bodyStyle={{ height: "400px" }}
      >
        <div className="body">
          <div className="modalName">
            Name Surname: <Input placeholder="name" />
          </div>
          <div className="modalCategory">
            Category:
            <Select className="select">
              <Option value="jack">Livestyle</Option>
              <Option value="lucy">Cooking</Option>
              <Option value="lucy">Technology</Option>
              <Option value="lucy">Sport</Option>
            </Select>
          </div>
          <div className="date">
            Date:
            <DatePicker onChange={onChange} />
          </div>
          <div>
            <p>
              Im dedicating this space to anything and everything about
              learning. Having been involved with a wonderful organization
              called Outward Bound throughout my life gave me the inclination
              towards learning and development. I am delving into this area more
              and morex and the more I learn about it, the more interesting it
              becomes. The defining moment for me was year 2010 when I was going
              through a personal turmoil, during which I had to push myself
              beyond my limits to be strong.
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalAdd;
