import React, { useState } from "react";
import DataPreviewTypes from "../components/DataPreviewTypes/DataDisplay";
import Export from "../components/icons/Export";
import Add from "../components/icons/Add";
export default function DataPreviewTypesComponent() {
	const data = {
		"totalItemsCount": 13,
		"pageSize": 50,
		"totalPagesCount": 1,
		"pageIndex": 1,
		"next": false,
		"previous": false,
		"sortingField": "name",
		"sortingDir": "desc",
		"items": [
			{
				"id": "2567127e-13bf-430f-b82c-358b41feb87c",
				"name": "Zip file Wed Feb 05 2025 18:30:06 GMT+0300 (GMT+03:00).zip",
				"description": null,
				"categoryId": null,
				"parentId": null,
				"folderType": 0,
				"type": 2,
				"creationTime": "2025-02-05T15:32:02.862844",
				"creatorName": "kinan kamal sleman",
				"lastModificationTime": null,
				"deletionTime": null,
				"modifierName": "kinan kamal sleman",
				"deletorName": null,
				"foldersCount": null,
				"filesCount": null,
				"color": "#32C1FF",
				"isRead": false,
				"extensionId": 5,
				"tenantId": "73d0fc1a-5869-41d1-b54b-0adfdef205f3",
				"folderSize": null,
				"storageUsed": null,
				"isPinned": null,
				"isPublic": null,
				"isFavourite": false,
				"isOutSharing": null,
				"isDownloadPrint": null,
				"notificationCount": 1,
				"rootType": null,
				"rootId": null,
				"contentType": "application/zip",
				"size": 0,
				"physicalPath": "Root/WorkDriveDocuments/638743663228577839.zip",
				"virtualPath": "Root/WorkDriveDocuments/638743663228577839.zipWorkDriveDocuments/638743663228577839.zip",
				"publicLinkId": null,
				"privateLinkId": null,
				"isPublicLinkEnabled": false,
				"isPrivateLinkEnabled": false,
				"linkPrivateEmails": [],
				"linkPublicEmails": [],
				"previousFile": "d58704f8-c64f-4034-9007-528c31774815",
				"nextFile": "98f6bdca-adef-456c-a884-15962ee859e5",
				"labels": [],
				"members": [],
				"path": [],
				"folders": null,
				"thumbnailUrl": null
			},
			{
				"id": "d58704f8-c64f-4034-9007-528c31774815",
				"name": "Zip file Wed Feb 05 2025 18:30:06 GMT+0300 (GMT+03:00).zip",
				"description": null,
				"categoryId": null,
				"parentId": null,
				"folderType": 0,
				"type": 2,
				"creationTime": "2025-02-05T15:31:32.0528",
				"creatorName": "kinan kamal sleman",
				"lastModificationTime": null,
				"deletionTime": null,
				"modifierName": "kinan kamal sleman",
				"deletorName": null,
				"foldersCount": null,
				"filesCount": null,
				"color": "#32C1FF",
				"isRead": false,
				"extensionId": 5,
				"tenantId": "73d0fc1a-5869-41d1-b54b-0adfdef205f3",
				"folderSize": null,
				"storageUsed": null,
				"isPinned": null,
				"isPublic": null,
				"isFavourite": false,
				"isOutSharing": null,
				"isDownloadPrint": null,
				"notificationCount": 1,
				"rootType": null,
				"rootId": null,
				"contentType": "application/zip",
				"size": 0,
				"physicalPath": "Root/WorkDriveDocuments/638743662920359850.zip",
				"virtualPath": "Root/WorkDriveDocuments/638743662920359850.zipWorkDriveDocuments/638743662920359850.zip",
				"publicLinkId": null,
				"privateLinkId": null,
				"isPublicLinkEnabled": false,
				"isPrivateLinkEnabled": false,
				"linkPrivateEmails": [],
				"linkPublicEmails": [],
				"previousFile": "d366a457-5262-4e46-8484-d184e477cb76",
				"nextFile": "2567127e-13bf-430f-b82c-358b41feb87c",
				"labels": [],
				"members": [],
				"path": [],
				"folders": null,
				"thumbnailUrl": null
			},
			{
				"id": "74541309-5496-4dbe-9936-ec2863a0e6b5",
				"name": "Zip file Wed Feb 05 2025 13:52:20 GMT+0300 (GMT+03:00).zip",
				"description": null,
				"categoryId": null,
				"parentId": null,
				"folderType": 0,
				"type": 2,
				"creationTime": "2025-02-05T10:52:25.704411",
				"creatorName": "kinan kamal sleman",
				"lastModificationTime": null,
				"deletionTime": null,
				"modifierName": "kinan kamal sleman",
				"deletorName": null,
				"foldersCount": null,
				"filesCount": null,
				"color": "#32C1FF",
				"isRead": false,
				"extensionId": 5,
				"tenantId": "73d0fc1a-5869-41d1-b54b-0adfdef205f3",
				"folderSize": null,
				"storageUsed": null,
				"isPinned": null,
				"isPublic": null,
				"isFavourite": false,
				"isOutSharing": null,
				"isDownloadPrint": null,
				"notificationCount": 1,
				"rootType": null,
				"rootId": null,
				"contentType": "application/zip",
				"size": 0,
				"physicalPath": "Root/WorkDriveDocuments/638743495456725627.zip",
				"virtualPath": "Root/WorkDriveDocuments/638743495456725627.zipWorkDriveDocuments/638743495456725627.zip",
				"publicLinkId": null,
				"privateLinkId": null,
				"isPublicLinkEnabled": false,
				"isPrivateLinkEnabled": false,
				"linkPrivateEmails": [],
				"linkPublicEmails": [],
				"previousFile": "cfcc19bb-4cba-4cab-9482-968f3526ffa8",
				"nextFile": "b1d2e536-a199-4ea6-8ba0-10b6ef04a423",
				"labels": [],
				"members": [],
				"path": [],
				"folders": null,
				"thumbnailUrl": null
			},
			{
				"id": "0d77eb96-9dcf-4eaf-9848-b0f288c89730",
				"name": "new ew 11111111111111111",
				"description": "",
				"categoryId": 1,
				"parentId": null,
				"folderType": 4,
				"type": 1,
				"creationTime": "2025-02-04T09:27:35.670254",
				"creatorName": "kinan kamal sleman",
				"lastModificationTime": "2025-02-08T15:54:43.045269",
				"deletionTime": null,
				"modifierName": "kinan kamal sleman",
				"deletorName": null,
				"foldersCount": 1,
				"filesCount": 0,
				"color": "#32CD32",
				"isRead": null,
				"extensionId": 0,
				"tenantId": "73d0fc1a-5869-41d1-b54b-0adfdef205f3",
				"folderSize": 0,
				"storageUsed": 0,
				"isPinned": false,
				"isPublic": false,
				"isFavourite": false,
				"isOutSharing": false,
				"isDownloadPrint": false,
				"notificationCount": 1,
				"rootType": 1,
				"rootId": "0d77eb96-9dcf-4eaf-9848-b0f288c89730",
				"contentType": null,
				"size": null,
				"physicalPath": null,
				"virtualPath": null,
				"publicLinkId": "0b613ca3-7b33-4159-a2d2-d9ff2a3d3971",
				"privateLinkId": "a5b750d9-f53c-442a-ace3-0965ba72a749",
				"isPublicLinkEnabled": false,
				"isPrivateLinkEnabled": false,
				"linkPrivateEmails": [],
				"linkPublicEmails": [],
				"previousFile": null,
				"nextFile": null,
				"labels": [],
				"members": [
					{
						"id": 732,
						"memberId": "cddd301b-a705-45d5-94ca-6b6f361648b5",
						"isOwner": true,
						"name": "kinan kamal sleman",
						"color": "#49DA61",
						"url": null,
						"assignedToType": 0
					},
					{
						"id": 775,
						"memberId": "760ce9c2-d02c-4ced-a87b-04307a9dd2fe",
						"isOwner": false,
						"name": "mohamed ali habib",
						"color": "#FF9E9E",
						"url": null,
						"assignedToType": 0
					}
				],
				"path": [],
				"folders": null,
				"thumbnailUrl": null
			},
			{
				"id": "dfc0cdb0-3ca3-450f-95c7-5320b36e0c64",
				"name": "new 111",
				"description": "",
				"categoryId": 1,
				"parentId": null,
				"folderType": 4,
				"type": 1,
				"creationTime": "2025-02-05T07:52:52.375854",
				"creatorName": "kinan kamal sleman",
				"lastModificationTime": "2025-02-08T15:54:34.79986",
				"deletionTime": null,
				"modifierName": "kinan kamal sleman",
				"deletorName": null,
				"foldersCount": 3,
				"filesCount": 0,
				"color": "#7FFF00",
				"isRead": null,
				"extensionId": 0,
				"tenantId": "73d0fc1a-5869-41d1-b54b-0adfdef205f3",
				"folderSize": 0,
				"storageUsed": 0,
				"isPinned": false,
				"isPublic": false,
				"isFavourite": false,
				"isOutSharing": false,
				"isDownloadPrint": false,
				"notificationCount": 1,
				"rootType": 1,
				"rootId": "dfc0cdb0-3ca3-450f-95c7-5320b36e0c64",
				"contentType": null,
				"size": null,
				"physicalPath": null,
				"virtualPath": null,
				"publicLinkId": "6be79e6f-86a7-4c93-acf0-69d670ecb1af",
				"privateLinkId": "20dd5280-db3a-48b1-9232-3386c6f1c2c2",
				"isPublicLinkEnabled": true,
				"isPrivateLinkEnabled": true,
				"linkPrivateEmails": [
					"joud@oonatech.com"
				],
				"linkPublicEmails": [],
				"previousFile": null,
				"nextFile": null,
				"labels": [],
				"members": [
					{
						"id": 778,
						"memberId": "cddd301b-a705-45d5-94ca-6b6f361648b5",
						"isOwner": true,
						"name": "kinan kamal sleman",
						"color": "#49DA61",
						"url": null,
						"assignedToType": 0
					},
					{
						"id": 788,
						"memberId": "0b08c720-92d8-4b84-accb-c5cf265d13b3",
						"isOwner": false,
						"name": "joud kadri habib",
						"color": "#07E7CF",
						"url": null,
						"assignedToType": 0
					},
					{
						"id": 789,
						"memberId": "760ce9c2-d02c-4ced-a87b-04307a9dd2fe",
						"isOwner": false,
						"name": "mohamed ali habib",
						"color": "#FF9E9E",
						"url": null,
						"assignedToType": 0
					}
				],
				"path": [],
				"folders": null,
				"thumbnailUrl": null
			},
			{
				"id": "a3cf5b3f-04ef-4656-827a-a9ec2777b5d3",
				"name": "kinan_20250204_084620.jpg 2025-02-04T08:46:20.5670150",
				"description": null,
				"categoryId": null,
				"parentId": null,
				"folderType": 0,
				"type": 2,
				"creationTime": "2025-02-04T08:49:27.796633",
				"creatorName": "kinan kamal sleman",
				"lastModificationTime": null,
				"deletionTime": null,
				"modifierName": "kinan kamal sleman",
				"deletorName": null,
				"foldersCount": null,
				"filesCount": null,
				"color": "#C6C6C6",
				"isRead": false,
				"extensionId": 2,
				"tenantId": "73d0fc1a-5869-41d1-b54b-0adfdef205f3",
				"folderSize": null,
				"storageUsed": null,
				"isPinned": null,
				"isPublic": null,
				"isFavourite": false,
				"isOutSharing": null,
				"isDownloadPrint": null,
				"notificationCount": 1,
				"rootType": null,
				"rootId": null,
				"contentType": "image/jpeg",
				"size": 170906,
				"physicalPath": "Root/WorkDriveDocuments/a03e3f61-3cb2-4de5-b9dd-8cfd3555526d.jpg",
				"virtualPath": "https://minioapi.oonatech.com/workdrive/97537c99-8fe4-4fe7-93d3-837fcb1b6f00kinan.jpg",
				"publicLinkId": null,
				"privateLinkId": null,
				"isPublicLinkEnabled": false,
				"isPrivateLinkEnabled": false,
				"linkPrivateEmails": [],
				"linkPublicEmails": [],
				"previousFile": "40298ef2-f05d-44c6-b7f6-0af3f64ae10a",
				"nextFile": "c1da7642-dc82-4888-82a3-c761c2a951e9",
				"labels": [],
				"members": [
					{
						"id": 248,
						"memberId": "cddd301b-a705-45d5-94ca-6b6f361648b5",
						"isOwner": true,
						"name": "kinan kamal sleman",
						"color": "#49DA61",
						"url": null,
						"assignedToType": 0
					}
				],
				"path": [],
				"folders": null,
				"thumbnailUrl": null
			},
			{
				"id": "f9e30354-3a73-4aa6-82bb-88dcde2f3bfe",
				"name": "kinan_20250204_084620.jpg 2025-02-04T08:46:20_20250204_084927.5670150 2025-02-04T08:49:27.7966330",
				"description": null,
				"categoryId": null,
				"parentId": null,
				"folderType": 0,
				"type": 2,
				"creationTime": "2025-02-04T09:28:00.927853",
				"creatorName": "kinan kamal sleman",
				"lastModificationTime": null,
				"deletionTime": null,
				"modifierName": "kinan kamal sleman",
				"deletorName": null,
				"foldersCount": null,
				"filesCount": null,
				"color": "#C6C6C6",
				"isRead": false,
				"extensionId": 2,
				"tenantId": "73d0fc1a-5869-41d1-b54b-0adfdef205f3",
				"folderSize": null,
				"storageUsed": null,
				"isPinned": null,
				"isPublic": null,
				"isFavourite": false,
				"isOutSharing": null,
				"isDownloadPrint": null,
				"notificationCount": 1,
				"rootType": null,
				"rootId": null,
				"contentType": "image/jpeg",
				"size": 170906,
				"physicalPath": "Root/WorkDriveDocuments/a03e3f61-3cb2-4de5-b9dd-8cfd3555526d.jpg",
				"virtualPath": "https://minioapi.oonatech.com/workdrive/97537c99-8fe4-4fe7-93d3-837fcb1b6f00kinan.jpg",
				"publicLinkId": null,
				"privateLinkId": null,
				"isPublicLinkEnabled": false,
				"isPrivateLinkEnabled": false,
				"linkPrivateEmails": [],
				"linkPublicEmails": [],
				"previousFile": "32c10a84-b9c7-4aad-aa26-7b87039bdce9",
				"nextFile": "43e0a15e-6bfd-4909-a0c5-f927c34c5bce",
				"labels": [],
				"members": [
					{
						"id": 255,
						"memberId": "cddd301b-a705-45d5-94ca-6b6f361648b5",
						"isOwner": true,
						"name": "kinan kamal sleman",
						"color": "#49DA61",
						"url": null,
						"assignedToType": 0
					}
				],
				"path": [],
				"folders": null,
				"thumbnailUrl": null
			},
			{
				"id": "c1da7642-dc82-4888-82a3-c761c2a951e9",
				"name": "flower 3_20250204_084624.jpg 2025-02-04T08:46:24.0637360",
				"description": null,
				"categoryId": null,
				"parentId": null,
				"folderType": 0,
				"type": 2,
				"creationTime": "2025-02-04T08:49:27.830486",
				"creatorName": "kinan kamal sleman",
				"lastModificationTime": null,
				"deletionTime": null,
				"modifierName": "kinan kamal sleman",
				"deletorName": null,
				"foldersCount": null,
				"filesCount": null,
				"color": "#C6C6C6",
				"isRead": false,
				"extensionId": 2,
				"tenantId": "73d0fc1a-5869-41d1-b54b-0adfdef205f3",
				"folderSize": null,
				"storageUsed": null,
				"isPinned": null,
				"isPublic": null,
				"isFavourite": false,
				"isOutSharing": null,
				"isDownloadPrint": null,
				"notificationCount": 1,
				"rootType": null,
				"rootId": null,
				"contentType": "image/jpeg",
				"size": 13446,
				"physicalPath": "Root/WorkDriveDocuments/1b9915a9-cc17-4e1e-990a-79fd3f312393.jpg",
				"virtualPath": "https://minioapi.oonatech.com/workdrive/e354324a-5423-4477-9ce6-673dbf05fe6eflower%203.jpg",
				"publicLinkId": null,
				"privateLinkId": null,
				"isPublicLinkEnabled": false,
				"isPrivateLinkEnabled": false,
				"linkPrivateEmails": [],
				"linkPublicEmails": [],
				"previousFile": "a3cf5b3f-04ef-4656-827a-a9ec2777b5d3",
				"nextFile": "4db7da47-69ae-4f4f-a3ff-00515e123e84",
				"labels": [],
				"members": [
					{
						"id": 249,
						"memberId": "cddd301b-a705-45d5-94ca-6b6f361648b5",
						"isOwner": true,
						"name": "kinan kamal sleman",
						"color": "#49DA61",
						"url": null,
						"assignedToType": 0
					}
				],
				"path": [],
				"folders": null,
				"thumbnailUrl": null
			},
			{
				"id": "32c10a84-b9c7-4aad-aa26-7b87039bdce9",
				"name": "flower 3_20250204_084624.jpg 2025-02-04T08:46:24_20250204_084927.0637360 2025-02-04T08:49:27.8304860",
				"description": null,
				"categoryId": null,
				"parentId": null,
				"folderType": 0,
				"type": 2,
				"creationTime": "2025-02-04T09:28:00.893314",
				"creatorName": "kinan kamal sleman",
				"lastModificationTime": null,
				"deletionTime": null,
				"modifierName": "kinan kamal sleman",
				"deletorName": null,
				"foldersCount": null,
				"filesCount": null,
				"color": "#C6C6C6",
				"isRead": false,
				"extensionId": 2,
				"tenantId": "73d0fc1a-5869-41d1-b54b-0adfdef205f3",
				"folderSize": null,
				"storageUsed": null,
				"isPinned": null,
				"isPublic": null,
				"isFavourite": false,
				"isOutSharing": null,
				"isDownloadPrint": null,
				"notificationCount": 1,
				"rootType": null,
				"rootId": null,
				"contentType": "image/jpeg",
				"size": 13446,
				"physicalPath": "Root/WorkDriveDocuments/1b9915a9-cc17-4e1e-990a-79fd3f312393.jpg",
				"virtualPath": "https://minioapi.oonatech.com/workdrive/e354324a-5423-4477-9ce6-673dbf05fe6eflower%203.jpg",
				"publicLinkId": null,
				"privateLinkId": null,
				"isPublicLinkEnabled": false,
				"isPrivateLinkEnabled": false,
				"linkPrivateEmails": [],
				"linkPublicEmails": [],
				"previousFile": "4db7da47-69ae-4f4f-a3ff-00515e123e84",
				"nextFile": "f9e30354-3a73-4aa6-82bb-88dcde2f3bfe",
				"labels": [],
				"members": [
					{
						"id": 254,
						"memberId": "cddd301b-a705-45d5-94ca-6b6f361648b5",
						"isOwner": true,
						"name": "kinan kamal sleman",
						"color": "#49DA61",
						"url": null,
						"assignedToType": 0
					}
				],
				"path": [],
				"folders": null,
				"thumbnailUrl": null
			},
			{
				"id": "4db7da47-69ae-4f4f-a3ff-00515e123e84",
				"name": "flower 1.jpg",
				"description": null,
				"categoryId": null,
				"parentId": null,
				"folderType": 0,
				"type": 2,
				"creationTime": "2025-02-04T08:49:27.850458",
				"creatorName": "kinan kamal sleman",
				"lastModificationTime": null,
				"deletionTime": null,
				"modifierName": "kinan kamal sleman",
				"deletorName": null,
				"foldersCount": null,
				"filesCount": null,
				"color": "#C6C6C6",
				"isRead": false,
				"extensionId": 2,
				"tenantId": "73d0fc1a-5869-41d1-b54b-0adfdef205f3",
				"folderSize": null,
				"storageUsed": null,
				"isPinned": null,
				"isPublic": null,
				"isFavourite": true,
				"isOutSharing": null,
				"isDownloadPrint": null,
				"notificationCount": 1,
				"rootType": null,
				"rootId": null,
				"contentType": "image/jpeg",
				"size": 14572,
				"physicalPath": "Root/WorkDriveDocuments/1a33c47f-e17b-4737-8274-9416dbd3913e.jpg",
				"virtualPath": "https://minioapi.oonatech.com/workdrive/ac626645-55dd-4f39-af3c-d1b34f0967b4flower%201.jpg",
				"publicLinkId": null,
				"privateLinkId": null,
				"isPublicLinkEnabled": false,
				"isPrivateLinkEnabled": false,
				"linkPrivateEmails": [],
				"linkPublicEmails": [],
				"previousFile": "c1da7642-dc82-4888-82a3-c761c2a951e9",
				"nextFile": "32c10a84-b9c7-4aad-aa26-7b87039bdce9",
				"labels": [],
				"members": [
					{
						"id": 250,
						"memberId": "cddd301b-a705-45d5-94ca-6b6f361648b5",
						"isOwner": true,
						"name": "kinan kamal sleman",
						"color": "#49DA61",
						"url": null,
						"assignedToType": 0
					}
				],
				"path": [],
				"folders": null,
				"thumbnailUrl": null
			},
			{
				"id": "43e0a15e-6bfd-4909-a0c5-f927c34c5bce",
				"name": "flower 1_20250204_084927.jpg 2025-02-04T08:49:27.8504580",
				"description": null,
				"categoryId": null,
				"parentId": null,
				"folderType": 0,
				"type": 2,
				"creationTime": "2025-02-04T09:28:00.953117",
				"creatorName": "kinan kamal sleman",
				"lastModificationTime": null,
				"deletionTime": null,
				"modifierName": "kinan kamal sleman",
				"deletorName": null,
				"foldersCount": null,
				"filesCount": null,
				"color": "#C6C6C6",
				"isRead": false,
				"extensionId": 2,
				"tenantId": "73d0fc1a-5869-41d1-b54b-0adfdef205f3",
				"folderSize": null,
				"storageUsed": null,
				"isPinned": null,
				"isPublic": null,
				"isFavourite": false,
				"isOutSharing": null,
				"isDownloadPrint": null,
				"notificationCount": 1,
				"rootType": null,
				"rootId": null,
				"contentType": "image/jpeg",
				"size": 14572,
				"physicalPath": "Root/WorkDriveDocuments/1a33c47f-e17b-4737-8274-9416dbd3913e.jpg",
				"virtualPath": "https://minioapi.oonatech.com/workdrive/ac626645-55dd-4f39-af3c-d1b34f0967b4flower%201.jpg",
				"publicLinkId": null,
				"privateLinkId": null,
				"isPublicLinkEnabled": false,
				"isPrivateLinkEnabled": false,
				"linkPrivateEmails": [],
				"linkPublicEmails": [],
				"previousFile": "f9e30354-3a73-4aa6-82bb-88dcde2f3bfe",
				"nextFile": "078899c7-0d69-4b36-a675-f417e2d40029",
				"labels": [],
				"members": [
					{
						"id": 256,
						"memberId": "cddd301b-a705-45d5-94ca-6b6f361648b5",
						"isOwner": true,
						"name": "kinan kamal sleman",
						"color": "#49DA61",
						"url": null,
						"assignedToType": 0
					}
				],
				"path": [],
				"folders": null,
				"thumbnailUrl": null
			},
			{
				"id": "32da8355-c827-48b6-9f51-5078013d042d",
				"name": "2 new 323",
				"description": "",
				"categoryId": 1,
				"parentId": null,
				"folderType": 1,
				"type": 1,
				"creationTime": "2025-02-04T08:46:20.866387",
				"creatorName": "kinan kamal sleman",
				"lastModificationTime": "2025-02-08T15:54:53.990908",
				"deletionTime": null,
				"modifierName": "kinan kamal sleman",
				"deletorName": null,
				"foldersCount": 2,
				"filesCount": 3,
				"color": "#FF6347",
				"isRead": null,
				"extensionId": 0,
				"tenantId": "73d0fc1a-5869-41d1-b54b-0adfdef205f3",
				"folderSize": 198924,
				"storageUsed": 198924,
				"isPinned": false,
				"isPublic": false,
				"isFavourite": false,
				"isOutSharing": false,
				"isDownloadPrint": false,
				"notificationCount": 1,
				"rootType": 1,
				"rootId": "32da8355-c827-48b6-9f51-5078013d042d",
				"contentType": null,
				"size": null,
				"physicalPath": null,
				"virtualPath": null,
				"publicLinkId": "ffe8cacd-3942-4dd2-bc05-c9ddc086d3f3",
				"privateLinkId": "58ee806c-1b24-4a77-91f8-be3a6b3b464e",
				"isPublicLinkEnabled": false,
				"isPrivateLinkEnabled": false,
				"linkPrivateEmails": [],
				"linkPublicEmails": [],
				"previousFile": null,
				"nextFile": null,
				"labels": [
					{
						"id": 36,
						"name": "React js",
						"color": "#000"
					}
				],
				"members": [
					{
						"id": 731,
						"memberId": "cddd301b-a705-45d5-94ca-6b6f361648b5",
						"isOwner": true,
						"name": "kinan kamal sleman",
						"color": "#49DA61",
						"url": null,
						"assignedToType": 0
					}
				],
				"path": [],
				"folders": null,
				"thumbnailUrl": null
			},
			{
				"id": "4c332897-8c70-450e-918a-645e14483b3d",
				"name": "1222",
				"description": "",
				"categoryId": 1,
				"parentId": null,
				"folderType": 1,
				"type": 1,
				"creationTime": "2025-02-05T06:34:45.447277",
				"creatorName": "kinan kamal sleman",
				"lastModificationTime": "2025-02-08T15:54:06.766003",
				"deletionTime": null,
				"modifierName": "kinan kamal sleman",
				"deletorName": null,
				"foldersCount": 0,
				"filesCount": 0,
				"color": "#DFFF00",
				"isRead": null,
				"extensionId": 0,
				"tenantId": "73d0fc1a-5869-41d1-b54b-0adfdef205f3",
				"folderSize": 0,
				"storageUsed": 0,
				"isPinned": false,
				"isPublic": false,
				"isFavourite": false,
				"isOutSharing": false,
				"isDownloadPrint": false,
				"notificationCount": 1,
				"rootType": 1,
				"rootId": "4c332897-8c70-450e-918a-645e14483b3d",
				"contentType": null,
				"size": null,
				"physicalPath": null,
				"virtualPath": null,
				"publicLinkId": "3184e42b-a713-4e7b-afba-3b28ca4e40dc",
				"privateLinkId": "6a72cdb0-9fb9-4b1d-b6e0-d93d064985d1",
				"isPublicLinkEnabled": false,
				"isPrivateLinkEnabled": false,
				"linkPrivateEmails": [],
				"linkPublicEmails": [],
				"previousFile": null,
				"nextFile": null,
				"labels": [],
				"members": [
					{
						"id": 777,
						"memberId": "cddd301b-a705-45d5-94ca-6b6f361648b5",
						"isOwner": true,
						"name": "kinan kamal sleman",
						"color": "#49DA61",
						"url": null,
						"assignedToType": 0
					}
				],
				"path": [],
				"folders": null,
				"thumbnailUrl": null
			}
		],
		"searchQueries": [
			{
				"columnName": "all",
				"searchQuery": ""
			}
		]
	}
	const loading = false;
	console.log(data);
	const [checkedIDs, setCheckedIDs] = useState([]);
	const handleDeleteSelected = async () => {
		console.log("handleDeleteSelected")
	};
	const handleSearchInput = (query: string) => {
		console.log('query: ', query);
		console.log("handleSearchInput")
	};
	const handleNextPage = (page?: number) => {
		console.log('page: ', page);
		console.log("handleNextPage")
	};
	const handlePrevPage = (page?: number) => {
		console.log('page: ', page);
		console.log("handlePrevPage")
	};
	const handleItemsNumber = (number: string) => {
		console.log('number: ', number);
		console.log("handleItemsNumber")
	};

	const handleSearchPage = (page?: number) => {
		console.log('page: ', page);
		console.log("handleSearchPage")
	};

	const handleEdit = async (data: any) => {
		console.log('data: ', data);
		console.log("handleEdit")
	};

	const columns: ColumnsTypes = [
		{
		  label: "Name",
		  id: "name",
		  noFilter: true,
		  noSort: true,
		  cell: (content, row) => (
			<div
			  className="flex items-center gap-[10px]"
			>
			  <p>{content}</p>
			</div>
		  ),
		},
		{
		  label: "Last Modified",
		  id: "date",
		  align: "center",
		  noFilter: true,
		  noSort: true,
		  cell: (content, row) => (
			<>
			  Modified on{" "} {row?.lastModificationTime}
			</>
		  ),
		},
	  ];

	const actions = [
		{
			type: "edit",
			onClick: (row: []) => {
				handleEdit(row);
			},
		},
		{
			type: "delete",
			onClick: () => {
				console.log('"delete": ', "delete");
			},
		},
	];

	const generatePdf = async () => {
		console.log('generatePdf: ', "generatePdf");
	};
	const generateExcel = async () => {
		console.log('generateExcel: ', "generateExcel");
	};

	const toolBarBtns = [
		{
			icon: <Add className="[&_path]:fill-white" />,
			text: "Add New",
			color: "dark",
			width: 115,
			onClick: () => {
				console.log('"Add New": ', "Add New");
			},
			status: true,
		},
		{
			type: "export",
			text: "Export",
			icon: <Export color="#1B84FF" width="20" height="20" />,
			exportPDF: () => generatePdf(),
			exportExcel: () => generateExcel(),
		},
	];

	const tableHeadActions: any = [
		{
			type: "sort",
			onClick: () => {
				console.log(' "sort": ', "sort");
			},
		},
		{
			type: "filter",
			onClick: () => {
				console.log("filter");
			},
		},
	];

	return (
		<DataPreviewTypes
			actions={actions}
			columns={columns}
			handleDeleteSelected={handleDeleteSelected}
			data={{
				...data,
				items: data?.items || [],
			}}
			toolBarBtns={toolBarBtns}
			tableHeadActions={tableHeadActions}
			pageSize={data?.pageSize || 5}
			handleSearchInput={handleSearchInput}
			handleSearchPage={handleSearchPage}
			handleItemsNumber={handleItemsNumber}
			handleNextPage={handleNextPage}
			handlePrevPage={handlePrevPage}
			checkedIDs={checkedIDs}
			setCheckedIDs={setCheckedIDs}
			loading={loading}
			hideCheckedOptions={true}
		/>
	);
}
