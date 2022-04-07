import styled from 'styled-components';

export const PostRequestSection = styled.section`
  padding-top: 140px;
`;
export const PostRequestTitle = styled.h2`
  font-size: 40px;
  line-height: 1;

  text-align: center;

  color: rgba(0, 0, 0, 0.87);
  margin-bottom: 50px;
`;
export const PostRequestContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 904px;
  padding: 13px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const PostRequestForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
`;

export const PostRequestWrapperFile = styled.div`
  display: flex;
`;
export const PostRequestFileInput = styled.input``;
export const PostRequestFileLabel = styled.label`
  width: 380px;
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`;
export const PostRequestFileDiv = styled.div`
  padding: 14px 15px;
  font-size: 16px;
  line-height: 1.62;
  border: 1px solid rgba(0, 0, 0, 0.87);
  border-radius: 4px 0px 0px 4px;
  color: rgba(0, 0, 0, 0.87);
`;
export const PostRequestFileDivDecorate = styled.div`
  padding-left: 16px;
  padding-top: 14px;
  padding-bottom: 14px;
  width: 197px;
  font-size: 16px;
  line-height: 1.62;
  border: 1px solid #d0cfcf;
  color: #7e7e7e;
`;
export const PostRequestButton = styled.button`
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 4px;
  padding-bottom: 4px;
  background: #f4e041;
  border-radius: 80px;
  width: 100px;
  font-size: 16px;
  line-height: 1.625;
  color: rgba(255, 255, 255, 0.87);
`;
export const PostRequestButtonDisabled = styled.button`
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 4px;
  padding-bottom: 4px;
  background: #b4b4b4;
  border-radius: 80px;
  width: 100px;
  font-size: 16px;
  line-height: 1.625;
  color: rgba(255, 255, 255, 0.87);
`;
