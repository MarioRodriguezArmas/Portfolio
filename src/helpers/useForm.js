import { useState } from "react";
import { helpHttp } from "./useHTTP";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    e.preventDefault()
    handleChange(e);
    setErrors(validateForm(form));
  }

    const handleSubmit = (e) => {
      e.preventDefault()
      setErrors(validateForm(form))

      if (Object.keys(errors.length === 0)){
        setLoading(true)
        helpHttp()
        .post("https://formsubmit.co/ajax/mariorodriguezjstech@gmail.com",{
          body:form,
          headers:{
            "Content-Type":"application/json",
            Accept:"applicattion/json",
          }
        })
        .then((res)=>{
          setLoading(false)
          setResponse(true)
          setTimeout(()=>{
            setResponse(false)
            setForm(initialForm)
          },3000)
        })
      }
    };

    return {
      form,
      errors,
      loading,
      response,
      handleChange,
      handleBlur,
      handleSubmit,
    };
  };

