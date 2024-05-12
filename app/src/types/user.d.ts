export default interface User {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  emailAddress: string;
  dateJoined: string;
  lastLoggedIn: string;
  isSuperuser: boolean;
  likedLocations: {
    id: string;
  };
}
