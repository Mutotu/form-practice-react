import { useState } from "react";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasSubmited, setHasSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setHasSubmitted(true);
  };
  const userInfo = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  const [user, setUser] = useState(userInfo);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setUser({ ...user, [name]: e.target.value });
  //   console.log(9999);
  // };
  const changeState = (e) => {
    setHasSubmitted(false);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };
  const goForm = () => {
    setHasSubmitted(false);
  };
  return (
    <>
      <h1>Forms!!</h1>
      {hasSubmited ? (
        <>
          <h3>{firstName}</h3>
          <h3>{lastName}</h3>
          <h3>{email}</h3>
          <input type='button' value='reset' onClick={changeState} />
          <input type='button' value='go back' onClick={goForm} />
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='firstName'
            value={firstName}
            placeholder='First Name'
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <input
            type='text'
            name='lastname'
            value={lastName}
            placeholder='Last Name'
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <input
            type='email'
            name='email'
            value={email}
            placeholder='Email'
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type='password'
            name='password'
            value={password}
            placeholder='Password'
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input type='submit' value='submit' onClick={handleSubmit} />
        </form>
      )}
    </>
  );
};

export default Form;
