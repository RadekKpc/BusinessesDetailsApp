import axios from 'axios';
import { BusinessDetailsEntry } from '../views/BusinessDetails/commonTypes';

export const getBusinessDetails = async (
  id: string, 
  setIsFetching: (d: boolean) => void,
  setResult: (res: BusinessDetailsEntry) => void,
  setError: (msg: { message: string }) => void,
) => {
  try {
    setIsFetching(true);
    const res = await axios.get(`http://localhost:8080/api/businesses/${id}`);
    setIsFetching(false);
    if (res.status >= 400) {
      setError(res.data?.message);
      return;
    }
    setResult(res.data);
  } catch (e :any) {
    console.log(e);
    setError(e);
  }
};