import { gql } from "@apollo/client";

export const REGISTER = gql`
  mutation register($input: UserInput) {
    register(input: $input) {
      id
      name
      username
      email
    }
  }
`;

export const LOGIN = gql`
  mutation LoginMutation($input: LoginInput) {
    loginMutation(input: $input) {
      user {
        id
        name
        username
        email
        description
        siteWeb
        avatar
        activated
        createdAt
        updatedAt
      }
      token
    }
  }
`;

export const GET_USER_ALL = gql`
  query GetUserAll($input: LoginInput) {
    getUserAll(input: $input) {
      id
      name
      username
      email
      description
      siteWeb
      avatar
      activated
      createdAt
      updatedAt
    }
  }
`;

export const GET_USERNAME = gql`
  query GetUsername($username: String) {
    getUsername(username: $username) {
      id
      name
      username
      email
      siteWeb
      description
      avatar
      activated
      createdAt
      updatedAt
    }
  }
`;

export const GET_USER = gql`
  query GetUser($id: ID, $username: String, $email: String) {
    getUser(id: $id, username: $username, email: $email) {
      id
      name
      username
      email
      siteWeb
      description
      avatar
      activated
      createdAt
      updatedAt
    }
  }
`;

export const GET_USER_TOKEN = gql`
  query GetUserToken($token: String!) {
    getUserToken(token: $token) {
      id
      username
      email
      name
      description
      siteWeb
      avatar
      activated
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_AVATAR = gql`
  mutation updateAvatar($file: Upload!) {
    updateAvatar(file: $file) {
      status
      urlAvatar
    }
  }

  # mutation updateAvatar($file: Upload) {
  #   updateAvatar(file: $file) {
  #     status
  #     urlAvatar
  #   }
  # }
`;

// export const DELETE_AVATAR = gql`
//   mutation deleteAvatar {
//     deleteAvatar
//   }
// `;

// export const UPDATE_USER = gql`
//   mutation updateUser($input: UserUpdateInput) {
//     updateUser(input: $input)
//   }
// `;

export const SEARCH = gql`
  query search($search: String) {
    search(search: $search) {
      id
      name
      username
      email
      avatar
    }
  }
`;
