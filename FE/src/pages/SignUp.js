import React from "react";
import { ReactstrapInput } from "reactstrap-formik";
import { Formik, FastField, Form } from "formik";
import * as Yup from "yup";
import UserApi from "./../api/UserApi";
import { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

const SignUp = (props) => {
  const [isOpenModal, setOpenModals] = useState(false);

  const [email, setEmail] = useState("");

  const [isDisableResendButton, setDisableResendButton] = useState(false);

  const resendEmailToActiveAccount = async () => {
    setDisableResendButton(true);
    await UserApi.resendEmailToActiveAccount(email);
    setDisableResendButton(false);
  };

  const redirectToLogin = () => {
    props.history.push("/sign-in");
  };

  return (
    <React.Fragment>
      <div className="text-center mt-4">
        <h1 className="h2">Get started</h1>
        <p className="lead">
          Start creating account to experience in Thanh Tung Tour Sale Management.
        </p>
      </div>
      <Formik
        initialValues={{
          fullName: "",
          CMND: "",
          address: "",
          email: "",
          phoneNumber:"",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={Yup.object({
          fullName: Yup.string()
            .max(50, "Must be less than 50 characters")
            .required("Required"),
          CMND: Yup.number()
            .typeError('you must specify a number')
            .required("Required"),
          address: Yup.string()
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required")
            .test(
              "checkExistsEmail",
              "This email is already registered.",
              async (email) => {
                // call api
                const isExists = await UserApi.existsByEmail(email);
                return !isExists;
              }
            ),
          phoneNumber: Yup.number()
            .typeError('you must specify a number')
            .max(10,"Your phone number has 10 number")
            .required("Required"),
          password: Yup.string()
            .min(6, "Must be between 6 and 50 characters.")
            .max(50, "Must be between 6 and 50 characters.")
            .required("Required"),
          confirmPassword: Yup.string()
          .when("password", {
            is: (val) => (val && val.length > 0 ? true : false),
            then: Yup.string().oneOf(
              [Yup.ref("password")],
              "Both password need to be the same"
              )
          .required("Required"),
            }),
        })}
        onSubmit={async (values) => {
          try {
            // call api
            await UserApi.create(
              values.fullName,
              values.CMND,
              values.address,
              values.email,
              values.password,
              values.phoneNumber,
            );
            // message
            setEmail(values.email);
            setOpenModals(true);
          } catch (error) {
            props.history.push("/auth/500");
          }
        }}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ isSubmitting }) => (
          <Card>
            <CardBody>
              <div className="m-sm-4">
                <Form>
                  <FormGroup>
                    <FastField
                      label="First Name"
                      type="text"
                      bsSize="lg"
                      name="fullName"
                      placeholder="Enter your full name"
                      component={ReactstrapInput}
                    />
                  </FormGroup>

                  <FormGroup>
                    <FastField
                      label="Identification "
                      type="number"
                      bsSize="lg"
                      name="CMND"
                      placeholder="Enter your Identification "
                      component={ReactstrapInput}
                    />
                  </FormGroup>

                  <FormGroup>
                    <FastField
                      label="Phone Number"
                      type="number"
                      bsSize="lg"
                      name="phoneNumber"
                      placeholder="Enter your phone number"
                      component={ReactstrapInput}
                    />
                  </FormGroup>

                  <FormGroup>
                    <FastField
                      label="Address"
                      type="text"
                      bsSize="lg"
                      name="address"
                      placeholder="Enter your address"
                      component={ReactstrapInput}
                    />
                  </FormGroup>

                  <FormGroup>
                    <FastField
                      label="Email"
                      type="email"
                      bsSize="lg"
                      name="email"
                      id="email"
                      placeholder="Enter your email"
                      component={ReactstrapInput}
                    />
                  </FormGroup>

                  <FormGroup>
                    <FastField
                      label="Password"
                      type="password"
                      bsSize="lg"
                      name="password"
                      placeholder="Enter password"
                      component={ReactstrapInput}
                    />
                  </FormGroup>

                  <FormGroup>
                    <FastField
                      label="Confirm Password"
                      type="password"
                      bsSize="lg"
                      name="confirmPassword"
                      placeholder="Enter confirm password"
                      component={ReactstrapInput}
                    />
                  </FormGroup>
                  <div className="text-center mt-3">
                    <Button
                      type="submit"
                      color="primary"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      Sign up
                    </Button>
                  </div>
                </Form>
              </div>
            </CardBody>
          </Card>
        )}
      </Formik>

      <Modal isOpen={isOpenModal}>
        <ModalHeader>You need to confirm your account</ModalHeader>

        <ModalBody className="m-3">
          <p className="mb-0">
            We have sent an email to <b>{email}</b>.
          </p>
          <p className="mb-0">Please check your email to active account.</p>
        </ModalBody>

        <ModalFooter>
          <Button
            color="primary"
            onClick={resendEmailToActiveAccount}
            disabled={isDisableResendButton}
          >
            Resend
          </Button>{" "}
          <Button color="primary" onClick={redirectToLogin}>
            Login
          </Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

export default SignUp;