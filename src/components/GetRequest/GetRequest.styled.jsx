import styled from 'styled-components';
export const GetRequestSection = styled.section`
  padding-top: 140px;
  background-color: #f8f8f8;
`;
export const GetRequestContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 904px;
  padding: 13px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const GetRequestTitle = styled.h1`
  font-size: 40px;
  line-height: 1;
  margin-bottom: 50px;
  text-align: center;

  color: rgba(0, 0, 0, 0.87);
`;
export const GetRequestList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(254px, auto);
  margin-bottom: 50px;
  justify-content: center;
  gap: 29px 29px;
`;
export const GetRequestListItem = styled.li`
  padding: 20px 0;
  width: 284px;

  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const GetRequestListItemImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-bottom: 20px;
`;
export const GetRequestListItemName = styled.p`
  max-width: 284px;

  margin-bottom: 20px;
  font-size: 16px;
  line-height: 1.62;
  white-space: nowrap;
  overflow: hidden;

  text-overflow: ellipsis;
  color: rgba(0, 0, 0, 0.87);
`;
export const GetRequestListItemText = styled.p`
  max-width: 284px;
  font-size: 16px;
  line-height: 1.62;
  white-space: nowrap;
  overflow: hidden;

  text-overflow: ellipsis;
  color: rgba(0, 0, 0, 0.87);
`;
export const GetRequestButton = styled.button`
  padding-top: 4px;
  padding-bottom: 4px;
  background: #f4e041;
  border-radius: 80px;
  width: 120px;
  font-size: 16px;
  line-height: 1.625;
  text-align: center;
  :hover {
    background: #ffe302;
  }
`;
