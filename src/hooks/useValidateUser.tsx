import { useEffect } from 'react';
import { apiValidate } from '@/core/api/apiAuth';
import { useNavigate } from 'react-router-dom';

export default function useValidateUser() {
  const navigate = useNavigate();

  useEffect(() => {
    async function checkAuth() {
      try {
        await apiValidate();
      } catch (error) {
        //  need to show toast or alert or anything to user
        await navigate('/login');
      }
    }

    checkAuth();
  }, []);
}
