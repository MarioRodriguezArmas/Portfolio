import React, { useContext } from "react";
import { useForm } from "../../helpers/useForm";
import Spinner from "./loader";
import { LangContext } from "../../context/LangContext";
import { BiNavigation } from "react-icons/bi";
import Info from "./Info";
import Message from "./Message";
import "./contact.css";

const initialForm = {
  name: "",
  email: "",
  number: "",
  comments: "",
};
const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,250}$/;
  let regexNumber = /^[0-9]+$/

  if (!form.name.trim()) {
    errors.name = "Name is required - Nombre es requerido";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "Only letters and empty spaces are allowed - Solo letras y espacios en blanco permitidos";
  }
  if (!form.email.trim()) {
    errors.email = "Email is required - Email requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "Email not valid - Email invalido";
  }
  if (!form.number.trim()) {
    errors.number = "Phone number is required - Numero telefonico es requerido";
  } else if (!regexNumber.test(form.number.trim())){
    errors.number = "Only numbers are allowed - Solo numeros son permitidos"
  }
  if (!form.comments.trim()) {
    errors.comments = "Comments are required - Comentarios requeridos";
  } else if (!regexComments.test(form.comments.trim())) {
    errors.comments = "Maximum 250 characters - Maximo 250 caracteres";
  }

  return errors;
};

let styles = {
  fontWeight: "bold",
  color: "red",
};

const Contact = () => {
  const { language } = useContext(LangContext);

  const {
    form,
    loading,
    response,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useForm(initialForm, validationsForm);
  return (
    <div className="contact_container" id="contact">
      <div className="off"></div>
<div className="contact_container-items">
<div className="contact_form-info">
        <Info />
      </div>
      <div className="contact_container-form">
        {language.map((item, index) => (
      <div className="contact_container-form-items" key={index}>
          <h1>{item.contactme}</h1>
          <form
            key={index}
            action="fefa76edcdda05cbb7e4191a729eab92"
            className="form"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder={item.name}
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.name}
              required
            />
            {errors.name && <p style={styles}>{errors.name}</p>}
            <input
              type="email"
              name="email"
              placeholder={item.email}
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.email}
              required
            />
            {errors.email && <p style={styles}>{errors.email}</p>}
            <input
              type="text"
              name="number"
              placeholder={item.phone}
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.number}
              required
            />
            {errors.number && <p style={styles}>{errors.number}</p>}
            <textarea
              name="comments"
              cols="50"
              rows="5"
              placeholder={item.comments}
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.comments}
              required
            ></textarea>
            {errors.comments && <p style={styles}>{errors.comments}</p>}
            <button type="onSubmit" className="submit-btn" >{item.send}<BiNavigation size={20} color="#ffcc00"/></button>
          </form>
      </div>
        ))}
        {response && <Message/>}
        {loading && <Spinner />}
      </div>
</div>
    </div>
  );
};

export default Contact;
