import { useState } from 'react';
import { register } from '../api/Auth';
import { useNavigate } from 'react-router-dom';

const useRegister = () => {
  const navigate = useNavigate();
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
      const response = await register(formData.email, formData.password);
      setLoading(false);
      navigate('/login');
      return response.data;
    } catch (err) {
      setLoading(false);
      setError(err.response ? err.response.data : 'Error registering');
    }
  };

  return { handleChange, handleSubmit, formData, loading, error };
};

export default useRegister;
