import { useContext } from 'react';
import { apiErrorStore } from '../store/apiError.store';

function useAPIError() {
  const { error, addError, removeError } = useContext(apiErrorStore);

  return { error, addError, removeError };
}

export default useAPIError;
