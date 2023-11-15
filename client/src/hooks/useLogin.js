import { useState } from 'react';
import { login } from '../api/Auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/slices/userSlice';

const useLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await login(formData.email, formData.password);
      setLoading(false);
      console.log(response);
      dispatch(setUser(response));
      navigate('/');
      return response;
    } catch (err) {
      setLoading(false);
      setError(err.response ? err.response.data : 'Error logging in');
    }
  };

  return { handleChange, handleSubmit, formData, loading, error };
};

export default useLogin;
