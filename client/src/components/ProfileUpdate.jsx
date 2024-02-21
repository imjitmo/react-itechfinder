import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserFailure, updateUserStart, updateUserSuccess } from '../redux/user/user.slice.js';

export default function ProfileUpdate() {
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.username === currentUser.username && formData.email === currentUser.email) return;
    try {
      dispatch(updateUserStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        console.log('error');
        dispatch(updateUserFailure(data));
        return;
      }
      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
      window.location.reload();
    } catch (err) {
      dispatch(updateUserFailure(err));
    }
  };

  // const handleDeleteAccount = async () => {
  //   try {
  //     dispatch(deleteUserStart());
  //     const res = await fetch(`/api/user/delete/${currentUser._id}`, {
  //       method: 'DELETE',
  //     });
  //     const data = await res.json();
  //     if (data.success === false) {
  //       dispatch(deleteUserFailure(data));
  //       return;
  //     }
  //     dispatch(deleteUserSuccess(data));
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  console.log(loading);
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="username"
          id="username"
          defaultValue={currentUser.username}
          className="bg-slate-100 rounded-lg p-3"
          placeholder="username"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          id="email"
          defaultValue={currentUser.email}
          className="bg-slate-100 rounded-lg p-3"
          placeholder="email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          className="bg-slate-100 rounded-lg p-3"
          placeholder="password"
          onChange={handleChange}
        />
        <button className="primary-btn uppercase" disabled={loading}>
          {loading ? <span className="loading loading-dots loading-xs"></span> : 'Update'}
        </button>
      </form>
      <div className="flex mt-5">
        <p className="text-red-500">{error && 'Something went wrong'}</p>
        <p className="text-green-500">{updateSuccess && 'Profile updated successfully!'}</p>
      </div>
    </div>
  );
}
