import { toast } from 'react-toastify';
import { FETCH_ERROR_TEXT } from './constants';

const errorToast = () =>
  toast.error(FETCH_ERROR_TEXT, {
    position: toast.POSITION.TOP_RIGHT,
  });

export default errorToast;
