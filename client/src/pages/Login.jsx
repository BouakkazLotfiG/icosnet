import React from 'react';
import useLogin from '../hooks/useLogin';

const Login = () => {
  const { handleChange, handleSubmit, formData, loading, error } = useLogin();

  return (
    <div>
      <h1>Login</h1>
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
          value={loading ? 'Loging in...' : 'Login'}
          disabled={loading}
        />
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
