const auth = {
  authStartScreen: "AuthStartScreen",
  loginForm: "LoginForm",
  email: "Email",
  password: "Password",
  // loginScreen: "LoginScreen",
  //registerScreen: "RegisterScreen",
};

const app = {
  tab: "Tab",
  followers: "Followers",
  followeds: "Followeds",
  // user: "User",
  user: "UserScreen",
  video: "Video",
  videosPublished: "VideosPublished",
  videosFavorites: "VideosFavorites",
};

const global = {
  userProfileScreen: "UserProfileScreen",
  cameraScreen: "CameraScreen",
  imageFullScreen: "ImageFullScreen",
  chatScreen: "ChatScreen",
  groupScreen: "GroupScreen",
  groupProfileScreen: "GroupProfileScreen",
  addUserGroupScreen: "AddUserGroupScreen",
  changeNameGroupScreen: "ChangeNameGroupScreen",
};

const chats = {
  root: "ChatsRoot",
  chatsScreen: "ChatsScreen",
  createChatScreen: "CreateChatScreen",
};

const groups = {
  root: "GroupsRoot",
  groupsScreen: "GroupsScreen",
  createGroupScreen: "CreateGroupScreen",
};

const account = {
  tab: "AccountTab",
  account: "Account",
  settings: "Settings",
  settingScreen: "SettingsScreen",
  changeName: "ChangeName",
  changeDescription: "ChangeDescription",
  changeWebsite: "ChangeWebsite",
  changeInstagram: "ChangeInstagram",
};

const settings = {
  root: "SettingsRoot",
  settingScreen: "SettingsScreen",
  changeFirstnameScreen: "ChangeFirstnameScreen",
  changeLastnameScreen: "ChangeLastnameScreen",
};

export const screens = {
  auth,
  app,
  global,
  tab: {
    root: "BottomTabRoot",
    chats,
    groups,
    settings,
    account,
  },
};
