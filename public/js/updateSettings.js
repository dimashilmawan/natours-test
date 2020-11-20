/* eslint-disable */
import { showAlert } from './alert';
import axios from 'axios';

export const updateSettings = async (data, type) => {
  const url =
    type === 'Data'
      ? '/api/v1/users/updateMe'
      : '/api/v1/users/updateMyPassword';
  try {
    const res = await axios({
      method: 'PATCH',
      url: url,
      data
    });
    if (res.data.status === 'success') {
      showAlert('success', `${type} Updated Successfully`);
      return true;
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
    return false;
  }
};
