import styled from 'styled-components';
export const Nav = styled.nav`
  background-color: white;
`;
export const NavigationContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 904px;
  padding: 13px 60px;
  display: flex;
  align-items: center;
`;
export const ListAutorization = styled.ul`
  margin-left: auto;
  display: flex;
  align-items: center;
`;
export const ListAutorizationItem = styled.li`
  &:first-child {
    margin-right: 10px;
  }
`;
export const ListAutorizationButton = styled.button`
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
  :hover {
    background: #ffe302;
  }
`;
