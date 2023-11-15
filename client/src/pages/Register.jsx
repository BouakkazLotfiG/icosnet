import React from 'react';
import useRegister from '../hooks/useRegister';

const Register = () => {
  const { handleChange, handleSubmit, formData, loading, error } =
    useRegister();

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email'>Email: </label>
          <input
            type='email'
            name='email'
            id='email'
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='password'>Password: </label>
          <input
            type='password'
            name='password'
            id='password'
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <input
          type='submit'
          value={loading ? 'Registering...' : 'Register'}
          disabled={loading}
        />
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Register;
