import { Form, Input, Button, Select } from "antd";

const { Option } = Select;
const { TextArea } = Input;

interface FormValues {
  companyName: string;
  typeOfCompany: string;
  companySize: string;
  industry: string;
  description: string;
  website: string;
  clientManager: string;
}

const CompaniesForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values: FormValues) => {
    console.log("Received values of form:", values);
  };

  const onReset = () => {
    form.resetFields();
  };
  return (
    <Form
      className="lg:w-[464px] sm:w-80 mt-8 "
      form={form}
      name="add_company_form"
      onFinish={onFinish}
      layout="vertical"
      requiredMark={false}
      initialValues={{
        companyName: "",
        typeOfCompany: undefined,
        companySize: undefined,
        industry: undefined,
        description: "",
        website: "",
        clientManager: undefined,
      }}
    >
      <Form.Item
        className="my-2"
        name="companyName"
        label="Company Name"
      >
        <Input  className="h-[52px]"/>
      </Form.Item>
      <Form.Item
        className="my-2"
        name="typeOfCompany"
        label="Type of Company"
      >
        <Select className="h-[52px]" placeholder="Select a company type">
          <Option value="private">Private</Option>
          <Option value="public">Public</Option>
        </Select>
      </Form.Item>
      <Form.Item
        className="my-2"
        name="companySize"
        label="Company Size"
      >
        <Select className="h-[52px]" placeholder="Select a company size">
          <Option value="small">Small</Option>
          <Option value="medium">Medium</Option>
          <Option value="large">Large</Option>
        </Select>
      </Form.Item>
      <Form.Item
        className="my-2"
        name="industry"
        label="Industry"
      >
        <Select className="h-[52px]" placeholder="Select an industry">
          <Option value="technology">Technology</Option>
          <Option value="finance">Finance</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="description"
        label="Description"
      >
        <TextArea rows={2} />
      </Form.Item>
      <Form.Item
        className="my-2"
        name="website"
        label="Website"
      >
        <Input  className="h-[52px]"/>
      </Form.Item>
      <Form.Item
        className="my-2"
        name="clientManager"
        label="Client Manager"
      >
        <Select className="h-[52px]" placeholder="Select a client manager">
          <Option value="manager1">Manager 1</Option>
          <Option value="manager2">Manager 2</Option>
        </Select>
      </Form.Item>
      <Form.Item className="w-full my-4">
        <Button
          className="bg-bluePrimary h-[52px]  md:w-[48%] mr-2"
          type="primary"
          htmlType="submit"
        >
          Save
        </Button>
        <Button
          className="md:w-[48%] h-[52px] bg-softBlue text-bluePrimary border-none "
          htmlType="button"
          onClick={onReset}
        >
          Cancel
        </Button>
      </Form.Item>
    </Form>
  );
};
export default CompaniesForm;
