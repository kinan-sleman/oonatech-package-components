import React from 'react'
import GeneralHeader from '../components/general-header/GeneralHeader';
function GeneralHeaderComponent() {
  const customLinks = [
    {
      id: 8,
      isList: false,
      isActive: true,
      isSystem: true,
      transMenuValue: "My Folders",
      url: "/workdrive/my-folders",
      isMyFolders: true,
    },
    {
      id: 9,
      transMenuValue: "Team Folders",
      url: "/workdrive/team-folders",
      isTeamFolder: true,
      isList: false,
      isActive: true,
      isSystem: true,
      folders: [],
    },
    {
      id: 5,
      isList: false,
      isActive: true,
      isSystem: true,
      transMenuValue: "Shared With Me",
      url: "/workdrive/shared-with-me",
    },
    {
      id: 6,
      isList: false,
      isActive: true,
      isSystem: true,
      transMenuValue: "Collect Files",
      url: "/workdrive/collect-files",
    },
    {
      id: 1,
      transMenuValue: "All Unread",
      url: "/workdrive/all-unread",
      isList: false,
      isActive: true,
      isSystem: true,
    },
    {
      id: 1,
      transMenuValue: "More",
      subMenus: [
        {
          id: 3,
          transMenuValue: "Favorite",
          isList: false,
          isActive: true,
          isSystem: true,
          url: "/workdrive/favorite",
        },
        {
          id: 4,
          transMenuValue: "Labels",
          isList: false,
          isActive: true,
          isSystem: true,
          url: "/workdrive/labels",
        },
        {
          id: 7,
          transMenuValue: "Trash",
          isList: false,
          isActive: true,
          isSystem: true,
          url: "/workdrive/trash",
        },
        // {
        //   id: 2,
        //   transMenuValue: "Recent Files",
        //   url: "/workdrive/recent-files",
        //   isList: false,
        //   isActive: true,
        //   isSystem: true,
        // },
      ],
      isList: true,
      isActive: true,
      isSystem: true,
    },
  ]

  const NotificationsData = [
    {
        "id": "6b50d082-1831-46dd-a805-8bc2046ef303",
        "title": "Creating Team Folder",
        "message": "created a public team folder aaa",
        "isRead": false,
        "creationTime": "10/02/2025",
        "redirectUrl": "https://dev-workdrive.oonatech.com/workdrive/team-folders/cc889d3a-be54-4f54-a87f-af52b26f3702"
    },
    {
        "id": "e1e4eacf-1ecd-4305-a8d6-8fcd96bb2f6d",
        "title": "Update Permission",
        "message": "Your role has been changed in a folder to be as Viewer",
        "isRead": false,
        "creationTime": "04/02/2025",
        "redirectUrl": "https://dev-workdrive.oonatech.com/workdrive/team-folders/98925df5-61d8-4f8d-ab01-f4929869d10b"
    },
    {
        "id": "384d96c6-d6ef-4f57-a794-22f8d33a1d0d",
        "title": "Sharing Folder",
        "message": "added you as Editor to a folder test private",
        "isRead": false,
        "creationTime": "04/02/2025",
        "redirectUrl": "https://dev-workdrive.oonatech.com/workdrive/team-folders/98925df5-61d8-4f8d-ab01-f4929869d10b"
    },
    {
        "id": "d2ca13ed-1418-4647-94ee-91d282579d88",
        "title": "Update Permission",
        "message": "Your role has been changed in a folder to be as Viewer",
        "isRead": false,
        "creationTime": "04/02/2025",
        "redirectUrl": "https://dev-workdrive.oonatech.com/workdrive/my-folders/06c89265-6aea-4649-8419-409879335815"
    },
    {
        "id": "d10f0569-dea8-4c0f-b737-0f567cd5e69a",
        "title": "Sharing Folder",
        "message": "added you as Viewer to a folder test3",
        "isRead": false,
        "creationTime": "04/02/2025",
        "redirectUrl": "https://dev-workdrive.oonatech.com/workdrive/my-folders/06c89265-6aea-4649-8419-409879335815"
    },
    {
        "id": "0698d4d2-90cd-4581-91f9-9e2e4382ab40",
        "title": "Creating Team Folder",
        "message": "created a public team folder test 123456789",
        "isRead": false,
        "creationTime": "04/02/2025",
        "redirectUrl": "https://dev-workdrive.oonatech.com/workdrive/team-folders/a4d0c86c-caa0-4202-bb1d-5bb838785b55"
    },
    {
        "id": "ba42baee-861c-44ad-91e0-25d365689b1d",
        "title": "Update Permission",
        "message": "Your role has been changed in a folder to be as Admin",
        "isRead": false,
        "creationTime": "04/02/2025",
        "redirectUrl": "https://dev-workdrive.oonatech.com/workdrive/team-folders/a04d438a-2ad7-4db0-8452-7625d1e40896"
    },
    {
        "id": "bc488374-4db3-44c6-981e-3b106f550f0c",
        "title": "Update Permission",
        "message": "Your role has been changed in a folder to be as Admin",
        "isRead": false,
        "creationTime": "04/02/2025",
        "redirectUrl": "https://dev-workdrive.oonatech.com/workdrive/team-folders/a04d438a-2ad7-4db0-8452-7625d1e40896"
    },
    {
        "id": "2d4ce861-2aef-4618-aaa5-1dabad61de86",
        "title": "Creating Team Folder",
        "message": "created a public team folder abcd",
        "isRead": false,
        "creationTime": "04/02/2025",
        "redirectUrl": "https://dev-workdrive.oonatech.com/workdrive/team-folders/a9c59aed-640e-4422-8234-8e0188007281"
    },
    {
        "id": "6aec669d-8016-4132-975e-6a3f8782cc32",
        "title": "Creating Team Folder",
        "message": "created a public team folder test notification",
        "isRead": false,
        "creationTime": "03/02/2025",
        "redirectUrl": "https://dev-workdrive.oonatech.com/workdrive/team-folders/a04d438a-2ad7-4db0-8452-7625d1e40896"
    },
    {
        "id": "c9e852be-1123-4b5b-9297-033ba6af8e96",
        "title": "Creating Team Folder",
        "message": "created a public team folder fhgfhfh",
        "isRead": false,
        "creationTime": "03/02/2025",
        "redirectUrl": null
    },
    {
        "id": "262bcb9b-5c2b-46bf-b226-41258ba8ce92",
        "title": "Creating Team Folder",
        "message": "created a public team folder hghghhg",
        "isRead": false,
        "creationTime": "03/02/2025",
        "redirectUrl": null
    },
    {
        "id": "52a0e288-bd97-4d8e-abbd-cbdb60f671d6",
        "title": "Creating Team Folder",
        "message": "created a public team folder vcvccbcvvc2",
        "isRead": false,
        "creationTime": "02/02/2025",
        "redirectUrl": null
    },
    {
        "id": "aae73f46-e5a3-4032-9015-0d6ee480d32a",
        "title": "Creating Team Folder",
        "message": "created a public team folder vcvccbcvvc",
        "isRead": false,
        "creationTime": "02/02/2025",
        "redirectUrl": null
    }
];
  const applicationData = [
    {
      "id": "56cef1a2-5286-431a-a22d-865f3c5cb7e8",
      "tenantId": "73d0fc1a-5869-41d1-b54b-0adfdef205f3",
      "name": "SDB ",
      "description": "Smart Dashboard",
      "url": "/",
      "icon": null,
      "isActive": false,
      "isSystem": true
    },
    {
      "id": "7bdab18f-9e02-482c-9944-78c234da3c40",
      "tenantId": "73d0fc1a-5869-41d1-b54b-0adfdef205f3",
      "name": "DMS",
      "description": " Document Management System",
      "url": "/dms",
      "icon": null,
      "isActive": false,
      "isSystem": true
    },
    {
      "id": "94065601-1a4f-4042-bb16-7ce5e465aeb9",
      "tenantId": "73d0fc1a-5869-41d1-b54b-0adfdef205f3",
      "name": "IAM",
      "description": "Identity and access management",
      "url": "/iam",
      "icon": null,
      "isActive": false,
      "isSystem": true
    },
    {
      "id": "aa0117d0-5e2f-4871-8693-922367098b35",
      "tenantId": "73d0fc1a-5869-41d1-b54b-0adfdef205f3",
      "name": "Workflow  ",
      "description": "Workflow",
      "url": "/workflow ",
      "icon": null,
      "isActive": false,
      "isSystem": true
    },
    {
      "id": "fecf90f5-748b-4e1b-3ba3-08dcfca6e50c",
      "tenantId": "73d0fc1a-5869-41d1-b54b-0adfdef205f3",
      "name": "Attendence  ",
      "description": "Attendence",
      "url": "/attendence",
      "icon": null,
      "isActive": false,
      "isSystem": true
    }
  ];
  const headerLinks = [];

  return (
    <GeneralHeader
      // logo={lookAndFeel?.logoFileUrl || lookAndFeel?.logoUrl}
      // handleLogout={async () => {
      //   logout();
      // }}
      modulesData={applicationData?.map((item) => ({
        id: item?.id,
        title: item?.transMenuValue,
        description: item?.description,
        link: item?.url,
        icon: item?.icon,
        isActive: item?.isActive,
      }))}
      // settingsData={
      //   settingsLinks?.length
      //     ? settingsLinks?.map((item) => ({
      //       ...item,
      //       transMenuValue: item?.name,
      //     }))
      //     : []
      // }
      // settingsData={[]}
      settingsImg=""
      notificationData  ={NotificationsData?.map(({id, title, message, isRead, redirectUrl, creationTime}) => ({
        id, title, message, isRead, redirectUrl, creationTime
      }))}
      username={"kinan sleman"}
      userEmail={"kenan@oonatech.com"}
      userRole="Admin"
      profileLink="/"
      userImg={""}
      headerLinks={customLinks}
      handleChangeLanguage={() => { }}
      activeLanguage=""
      mainBgColor="white"
      fontColor="black"
      // mainBgColor={lookAndFeel?.backgroundColor}

      // highlightColor={lookAndFeel?.hightLightColor}
    />
  )
}

export default GeneralHeaderComponent
