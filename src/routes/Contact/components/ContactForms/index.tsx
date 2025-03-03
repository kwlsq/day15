import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ButtonCapsule from "../../../../components/ButtonCapsule";

const ContactForms = () => {
  return (
    <div className="w-[50%]">
      <h2 className="text-[60px] text-medium">
        Let’s build something cool together
      </h2>
      <Formik
        initialValues={{
          name: "",
          email: "",
          subject: "",
          message: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Name is required"),
          email: Yup.string()
            .email("Invalid email")
            .required("Email is required"),
          subject: Yup.string().required("Subject is required"),
          message: Yup.string().required("Message is required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log("Form Submitted:", values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="w-full">
            <label className="block mb-4 mt-8 text-[18px] text-[#0B0C0E]">
              Name
            </label>
            <Field
              type="text"
              name="name"
              placeholder="James Robert"
              className="w-full p-2 border-b border-b-red-[#0B0C0E] focus:outline-none text-[27px]"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500 text-[12px]"
            />

            <label className="block mb-4 mt-8 text-[18px] text-[#0B0C0E]">
              Email
            </label>
            <Field
              type="email"
              name="email"
              placeholder="ayush.barnwal@brightscout.com"
              className="w-full p-2 border-b border-b-red-[#0B0C0E] focus:outline-none text-[27px]"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-[12px]"
            />

            <label className="block mb-4 mt-8 text-[18px] text-[#0B0C0E]">
              Subject
            </label>
            <Field
              type="text"
              name="subject"
              placeholder="For web design work Enquire"
              className="w-full p-2 border-b border-b-red-[#0B0C0E] focus:outline-none text-[27px]"
            />
            <ErrorMessage
              name="subject"
              component="div"
              className="text-red-500 text-[12px]"
            />

            <label className="block mb-4 mt-8 text-[18px] text-[#0B0C0E]">
              Message
            </label>
            <Field
              as="textarea"
              name="message"
              rows={4}
              placeholder="Type your Message"
              className="w-full p-2 border-b border-b-red-[#0B0C0E] focus:outline-none resize-none text-[27px]"
            />
            <ErrorMessage
              name="message"
              component="div"
              className="text-red-500 text-[12px]"
            />
            <ButtonCapsule
              text="Submit"
              bgColor="#0B0C0E"
              type="submit"
              fontColor="#F4F7FA"
              disabled={isSubmitting}
              marginTop="2em"
            ></ButtonCapsule>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForms;
