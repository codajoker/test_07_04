import {
  GetRequestButton,
  GetRequestContainer,
  GetRequestList,
  GetRequestListItem,
  GetRequestListItemImage,
  GetRequestListItemName,
  GetRequestListItemText,
  GetRequestSection,
  GetRequestTitle,
} from './GetRequest.styled';

const GetRequest = ({ users, showMore, activeButton }) => {
  return (
    <GetRequestSection id="get">
      <GetRequestContainer>
        <GetRequestTitle>Working with GET request</GetRequestTitle>
        <GetRequestList>
          {users?.map(user => {
            return (
              <GetRequestListItem key={user.id ? user.id : Math.random()}>
                <GetRequestListItemImage
                  src={user.photo}
                ></GetRequestListItemImage>
                <GetRequestListItemName>{user.name}</GetRequestListItemName>
                <GetRequestListItemText>{user.position}</GetRequestListItemText>
                <GetRequestListItemText>{user.email}</GetRequestListItemText>
                <GetRequestListItemText>{user.phone}</GetRequestListItemText>
              </GetRequestListItem>
            );
          })}
        </GetRequestList>
        <GetRequestButton
          disabled={activeButton}
          type="button"
          onClick={() => showMore()}
        >
          Show more
        </GetRequestButton>
      </GetRequestContainer>
    </GetRequestSection>
  );
};

export default GetRequest;
