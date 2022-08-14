import React from "react";
import { Input, Select } from "../../../../../../_metronic/_partials/controls";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

// Validation schema
const CustomerEditSchema = Yup.object().shape({
  customerCode: Yup.string().required("customerCode is required"),
  nameEn: Yup.string().required("nameEn is required"),
  nameAr: Yup.string().required("nameAr is required"),
  productId: Yup.string().required("Product is required"),
  customerType: Yup.string().required("code is required"),
  policyAbbreviation: Yup.string().required("policyAbbreviation is required"),
  shortNameEn: Yup.string().required("shortNameEn is required"),
  shortNameAr: Yup.string().required("shortNameAr is required"),
  from: Yup.date().required("DateFrom is required"),
  to: Yup.date().required("DateTo is required"),
});
export function CustomerEditForm({ customer, btnRef, saveProduct }) {
  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={customer}
        validationSchema={CustomerEditSchema}
        onSubmit={(values) => {
          saveProduct(values);
        }}
      >
        {({ handleSubmit }) => (
          <>
            <Form className="form form-label-right">
              <div className="form-group row">
                <div className="col-lg-4">
                  <Field
                    name="customerCode"
                    placeholder="Customer Code"
                    label="Customer code"
                    component={Input}
                  />
                </div>
                <div className="col-lg-4">
                  <Field
                    nas="select" 
                    name="parentBroker"
                  />
                </div>
              </div>

              <div className="form-group row">
                <div className="col-lg-4">
                  <Field
                    name="nameEn"
                    component={Input}
                    placeholder="nameEn"
                    label="nameEn"
                    className="form-control"
                  />
                </div>
                <div className="col-lg-4">
                  <Field
                    name="nameAr"
                    component={Input}
                    placeholder="nameAr"
                    label="nameAr"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-lg-4">
                  <Field
                    name="customerType"
                    component={Input}
                    placeholder="customerType"
                    label="customerType"
                    className="form-control"
                  />
                </div>
                <div className="col-lg-4">
                  <Field
                    name="policyAbbreviation"
                    component={Input}
                    placeholder="policyAbbreviation"
                    label="policyAbbreviation"
                    className="form-control"
                  />
                </div>
              </div>
              <button
                type="submit"
                style={{ display: "none" }}
                ref={btnRef}
                onSubmit={() => handleSubmit()}
              ></button>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
}
