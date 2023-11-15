import React from 'react';

const Register = () => {
  return (
    <div>
      <h1>Register</h1>
      <form>
        <div>
          <label htmlFor='username'>Username: </label>
          <input type='text' name='username' id='username' />
        </div>
        <div>
          <label htmlFor='email'>Email: </label>
          <input type='email' name='email' id='email' />
        </div>
        <div>
          <label htmlFor='password'>Password: </label>
          <input type='password' name='password' id='password' />
        </div>
        <div>
          <label htmlFor='password2'>Confirm Password: </label>
          <input type='password' name='password2' id='password2' />
        </div>
        <input type='submit' value='Register' />
      </form>
    </div>
  );
};

export default Register;
