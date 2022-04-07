import axios from 'axios';
import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useEffect, useState } from 'react';
import Navigation from './AppBar/Navigation';
import GetRequest from './GetRequest/GetRequest';
import Main from './MainPage/Main';
import PostRequest from './PostRequest/PostRequest';
axios.defaults.baseURL =
  'https://frontend-test-assignment-api.abz.agency/api/v1';
export const App = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [activeButton, setActiveButton] = useState(false);
  const [position, setPosition] = useState([]);
  const [token, setToken] = useState(null);

  function showMore() {
    setPage(prev => prev + 1);
  }
  const addContact = contact => {
    try {
      const formData = new FormData();
      formData.append('name', contact.name);
      formData.append('email', contact.email);
      formData.append('phone', contact.phone);

      formData.append('position_id', contact.position_id);
      formData.append('photo', contact.photo);
      axios
        .post('/users', formData, {
          headers: {
            Token: token,
          },
        })
        .then(data => {
          setUsers(prevUser => [contact, ...prevUser]);

          toast.success('🦄 Аккаунт Добавлен)', {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          axios.get(`/token`).then(({ data }) => {
            setToken(data.token);
          });
        })
        .catch(err => {
          console.log(err.message);
          toast.error(`🦄 ${err}`, {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    axios
      .get(`/users?page=${page}&count=6`)
      .then(({ data }) => setUsers(prevUser => [...prevUser, ...data.users]))
      .catch(() => {
        setActiveButton(true);
        toast.warn('🦄 Странички закончились(', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  }, [page]);
  useEffect(() => {
    axios.get(`/positions`).then(({ data }) => setPosition(data.positions));
    axios.get(`/token`).then(({ data }) => {
      setToken(data.token);
    });
  }, []);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Navigation></Navigation>
      <Main></Main>
      <GetRequest
        activeButton={activeButton}
        users={users}
        showMore={showMore}
      ></GetRequest>
      <PostRequest addContact={addContact} positionArr={position}></PostRequest>
    </>
  );
};
