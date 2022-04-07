import {
  PostRequestForm,
  PostRequestContainer,
  PostRequestSection,
  PostRequestTitle,
  PostRequestButton,
  PostRequestFileInput,
  PostRequestWrapperFile,
  PostRequestFileLabel,
  PostRequestFileDiv,
  PostRequestFileDivDecorate,
  PostRequestButtonDisabled,
} from './PostRequest.styled';
import TextField from '@mui/material/TextField';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { useState } from 'react';
// import Button from '@mui/material/Button';

const PostRequest = ({ positionArr, addContact }) => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [position, setPosition] = useState(1);
  const [file, setFile] = useState(null);

  return (
    <PostRequestSection id="add">
      <PostRequestContainer>
        <PostRequestTitle>Working with POST request</PostRequestTitle>
        <PostRequestForm
          onSubmit={e => {
            e.preventDefault();
            console.log(e);
            addContact({
              name: name,
              email: email,
              phone: phone,
              position_id: position,
              photo: file,
            });
          }}
        >
          <TextField
            style={{ marginBottom: '50px', width: '380px' }}
            id="demo-helper-text-misaligned-no-helper"
            label="Name"
            name="Name"
            required
            minLength="2"
            maxLength="60"
            onChange={e => setName(e.target.value)}
          />
          <TextField
            style={{ marginBottom: '50px', width: '380px' }}
            id="demo-helper-text-misaligned-no-helper"
            label="Email"
            type="email"
            name="Email"
            required
            pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"
            minLength="2"
            maxLength="100"
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            helperText="+38 (XXX) XXX - XX - XX"
            id="demo-helper-text-misaligned"
            label="Phone"
            name="Phone"
            type="tel"
            style={{ width: '380px', marginBottom: '25px' }}
            required
            pattern="^[\+]{0,1}380([0-9]{9})$)"
            onChange={e => setPhone(e.target.value)}
            defaultValue="+380"
          />
          <FormControl>
            <FormLabel
              style={{
                fontFamily: 'Nunito',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '16px',
                lineHeight: '26px',
              }}
              id="demo-radio-buttons-group-label"
            >
              Select your position
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Frontend developer"
              name="radio-buttons-group"
              required
              onChange={e => setPosition(e.target.value)}
            >
              {positionArr.map(pos => (
                <FormControlLabel
                  key={pos.id}
                  value={pos.id}
                  control={
                    <Radio
                      sx={{
                        color: 'default',
                        '&.Mui-checked': {
                          color: '#00BDD3',
                        },
                      }}
                    />
                  }
                  label={pos.name}
                />
              ))}
            </RadioGroup>
          </FormControl>
          <PostRequestWrapperFile>
            <PostRequestFileLabel htmlFor="actual-btn">
              <PostRequestFileInput
                type="file"
                id="actual-btn"
                hidden
                onChange={e => {
                  setFile(e.target.files[0]);
                }}
                required
              />
              <PostRequestFileDiv> Upload</PostRequestFileDiv>
              <PostRequestFileDivDecorate>
                {' '}
                Upload your photo
              </PostRequestFileDivDecorate>
            </PostRequestFileLabel>
          </PostRequestWrapperFile>

          {name && phone && file && email && position ? (
            <PostRequestButton type="submit">Sign Up</PostRequestButton>
          ) : (
            <PostRequestButtonDisabled disabled type="submit">
              Sign Up
            </PostRequestButtonDisabled>
          )}
        </PostRequestForm>
      </PostRequestContainer>
    </PostRequestSection>
  );
};

export default PostRequest;

// var formData = new FormData();
//  var fileField = document.querySelector('input[type="file"]'); formData.append('position_id', 2); formData.append('name', 'Jhon'); formData.append('email', 'Jhon@gmail.com'); formData.append('phone', '+380955388485'); formData.append('photo', fileField.files[0]);

// fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', { method: 'POST', body: formData, headers: { 'Token': token, // get token with GET api/v1/token method }, }) .then(function(response) { return response.json(); }) .then(function(data) { console.log(data); if(data.success) { // process success response } else { // proccess server errors } }) .catch(function(error) { // proccess network errors });
