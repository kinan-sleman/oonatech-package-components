import React, { useState } from "react";
import DataPreviewTypes from "../components/DataPreviewTypes/DataDisplay";
import Export from "../components/icons/Export";
import Add from "../components/icons/Add";
import { Link } from "react-router-dom";
import AvatarGruop from "../components/elements/AvatarGruop";
import { ColumnsTypes } from "../components/DataPreviewTypes/sub-component/types/tableTypes";
export default function DataPreviewTypesComponent() {
	const lookup = [
		{
			"id": "46cf7c96-fa45-47e2-bcd8-5e4193f91640",
			"name": "OonaOne",
			"logoUrl": null
		},
		{
			"id": "7a953791-48ff-4d89-bd46-88196fd43fa7",
			"name": "test2",
			"logoUrl": null
		},
		{
			"id": "27640cc2-06a7-4c5b-8431-cf1ed89e2ad2",
			"name": "test5",
			"logoUrl": null
		}
	];

	const data = {
		"totalItemsCount": 93,
		"pageSize": 8,
		"totalPagesCount": 12,
		"pageIndex": 1,
		"next": true,
		"previous": false,
		"sortingField": "id",
		"sortingDir": "desc",
		"items": [
			{
				"id": "ff3431dd-10a8-470d-9b7d-12c4b06a7243",
				"name": "test12",
				"color": "#9F6EFE",
				"lastUpdateDate": "2025-02-23T17:41:20.556028",
				"createDate": "2025-02-23T17:41:20.556028",
				"users": [
					{
						"email": "testt23@gmail.com",
						"position": null,
						"url": null,
						"color": "#FF9E9E",
						"lastUpdateDate": "2025-02-23T16:43:03.78582",
						"createDate": null,
						"userId": "0bad0d9b-0859-4a57-8c4d-a57cfcd7e498",
						"id": "b2cc7c8a-796e-4d0a-bf5a-154cfcf05fba",
						"name": "testt23  testt23"
					},
					{
						"email": "testt1@gmail.com",
						"position": null,
						"url": null,
						"color": "#FF5E5E",
						"lastUpdateDate": "2025-02-23T16:41:23.108736",
						"createDate": null,
						"userId": "011fb975-9db6-43a9-a6e3-d130762bd96d",
						"id": "b5f2d318-823e-40be-8b9a-25307e609f09",
						"name": "testt1  testt1"
					}
				]
			},
			{
				"id": "fdc1842c-9ec3-4bec-862d-7869bc72d6ac",
				"name": "nnnaaa6",
				"color": "#32C1FF",
				"lastUpdateDate": "2025-02-23T18:15:55.566567",
				"createDate": "2025-02-23T18:15:55.566567",
				"users": []
			},
			{
				"id": "fb0d6e68-fc19-4182-bbb9-8856da06030d",
				"name": "test3",
				"color": "#FFDC5E",
				"lastUpdateDate": "2025-02-23T17:18:45.672907",
				"createDate": "2025-02-23T17:18:45.672907",
				"users": [
					{
						"email": "adam@oonatech.com",
						"position": "software",
						"url": null,
						"color": "#FF5E5E",
						"lastUpdateDate": "2025-01-21T16:38:50.048871",
						"createDate": null,
						"userId": "728f633a-3304-49ba-a355-def49844c855",
						"id": "00fd6ffb-eea4-4c44-b061-0f42f159159a",
						"name": "Adam Abdulhamid Tork"
					},
					{
						"email": "karam2@gmail.com",
						"position": null,
						"url": null,
						"color": "#9F6EFE",
						"lastUpdateDate": "2025-02-22T21:36:02.328833",
						"createDate": null,
						"userId": "57a1f686-79ab-4ac8-87af-a717a2f60484",
						"id": "0c0bfb86-60d7-47bf-8da8-5418bf68df1f",
						"name": "karam2  karam2"
					},
					{
						"email": "jjj8@gmail.com",
						"position": null,
						"url": null,
						"color": "#FCA743",
						"lastUpdateDate": "2025-02-22T22:33:09.063123",
						"createDate": null,
						"userId": "972212fe-aa7a-424e-a1bb-ccfbe87ef3b7",
						"id": "22047e2d-2ab5-4eb0-894d-03d9fecd2b17",
						"name": "jjj8  jjj8"
					},
					{
						"email": "joud@oonatech.com",
						"position": "software",
						"url": null,
						"color": "#07E7CF",
						"lastUpdateDate": "2025-02-23T13:52:25.567799",
						"createDate": null,
						"userId": "0b08c720-92d8-4b84-accb-c5cf265d13b3",
						"id": "2cdcb31c-7de7-4fc4-ae28-745a80086041",
						"name": "joud kadri habib"
					},
					{
						"email": "kenan@oonatech.com",
						"position": "Developer",
						"url": "https://minioapi.oonatech.com/iam/4165fa4c-2df1-40e7-8e48-d453a50a8339kinan.jpg",
						"color": "#49DA61",
						"lastUpdateDate": "2025-02-23T14:50:25.912086",
						"createDate": null,
						"userId": "cddd301b-a705-45d5-94ca-6b6f361648b5",
						"id": "334f480d-7513-451d-b3a6-aff4d527da97",
						"name": "kinan kamal sleman"
					},
					{
						"email": "testt233@gmail.com",
						"position": null,
						"url": null,
						"color": "#07E7CF",
						"lastUpdateDate": "2025-02-23T16:43:27.132513",
						"createDate": null,
						"userId": "9b202177-df15-4631-b40e-1d309bde52ce",
						"id": "47bac0e2-3acb-48ca-95d8-48e496b480fd",
						"name": "testt233  testt233"
					},
					{
						"email": "karam3@gmail.com",
						"position": null,
						"url": null,
						"color": "#07E7CF",
						"lastUpdateDate": "2025-02-23T12:50:23.763215",
						"createDate": null,
						"userId": "14baf6e1-4d2e-4f26-afc9-9daab033e074",
						"id": "55ba3ecc-d3b0-496b-a5ac-abe6f3903ccc",
						"name": "karam3  karam3"
					},
					{
						"email": "testt1@gmail.com",
						"position": null,
						"url": null,
						"color": "#FF5E5E",
						"lastUpdateDate": "2025-02-23T16:41:23.108736",
						"createDate": null,
						"userId": "011fb975-9db6-43a9-a6e3-d130762bd96d",
						"id": "77b4bff2-e23a-4611-b6bf-5ab78fa3190f",
						"name": "testt1  testt1"
					},
					{
						"email": "abd@oonatech.com",
						"position": "CEO",
						"url": null,
						"color": "#FFDC5E",
						"lastUpdateDate": "2025-02-18T07:19:12.939329",
						"createDate": null,
						"userId": "d3619ded-a369-45f8-a46f-f84c4556f31f",
						"id": "79fb9a07-4383-482d-a904-a2e366ae9293",
						"name": "Abd Mahmoud Tork"
					},
					{
						"email": "amira@oonatech.com",
						"position": ".net devloper",
						"url": null,
						"color": "#07E7CF",
						"lastUpdateDate": "2025-01-25T10:33:25.414557",
						"createDate": null,
						"userId": "db3b8e56-5e79-4afa-9271-2e9a67440f28",
						"id": "d4cd61ca-6f10-4ae4-a7b6-6db686fe5178",
						"name": "amira ezat mokhtar"
					},
					{
						"email": "ShadenJo@gmail.com",
						"position": "Manager",
						"url": null,
						"color": "#49DA61",
						"lastUpdateDate": "2025-02-21T16:48:56.44017",
						"createDate": null,
						"userId": "d73dfc59-4d67-467f-a107-ceb7df7c1d30",
						"id": "f7a33490-4fc4-4ac3-b05e-1f828f80344d",
						"name": "Shaed Nemmer Joudeh"
					},
					{
						"email": "testt23@gmail.com",
						"position": null,
						"url": null,
						"color": "#FF9E9E",
						"lastUpdateDate": "2025-02-23T16:43:03.78582",
						"createDate": null,
						"userId": "0bad0d9b-0859-4a57-8c4d-a57cfcd7e498",
						"id": "ffd19c10-8610-40bd-91c0-b5fd9499799b",
						"name": "testt23  testt23"
					}
				]
			},
			{
				"id": "fa672dc5-4fac-4f58-81e1-80d031995d6b",
				"name": "broadcast5",
				"color": "#FCA743",
				"lastUpdateDate": "2025-02-23T20:32:25.485247",
				"createDate": "2025-02-23T20:32:25.485247",
				"users": []
			},
			{
				"id": "f8a672fd-7772-4259-b1dd-ffb10658563d",
				"name": "broadcast16",
				"color": "#07E7CF",
				"lastUpdateDate": "2025-02-23T21:09:13.034176",
				"createDate": "2025-02-23T21:09:13.034176",
				"users": []
			},
			{
				"id": "f86999e8-4c48-4d14-a5fd-83aa34d8ebfa",
				"name": "mmm123qqq",
				"color": "#FF5E5E",
				"lastUpdateDate": "2025-02-23T17:51:09.780461",
				"createDate": "2025-02-23T17:51:09.780461",
				"users": []
			},
			{
				"id": "f16c4ded-3102-4225-8868-4c43bfe91b2b",
				"name": "nnnaaa701",
				"color": "#9F6EFE",
				"lastUpdateDate": "2025-02-23T18:26:34.521528",
				"createDate": "2025-02-23T18:26:34.521528",
				"users": []
			},
			{
				"id": "edda8cec-3953-44f3-b2a1-5feac47ba9ff",
				"name": "test5",
				"color": "#07E7CF",
				"lastUpdateDate": "2025-02-23T17:22:08.62414",
				"createDate": "2025-02-23T17:22:08.62414",
				"users": []
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
			isMainTitle: true,
			isMainForCards: true,
		},
		{
			label: "Users",
			id: "users.name",
			type: "avatar_group",
			align: "center",
			cell: (content, row, id) => {
				console.log(row?.users,'row?.users')
				return (
					<Link to={`/iam/groups/${row.id}`}>
						<AvatarGruop data={row?.users?.map(({ url, name, color }) => ({
							src: url,
							name,
							backgroundColor: color,
						}))} />
					</Link>
				)
			},
			// link: (row) => ``,
		},
		{
			label: "Last Update",
			id: "lastUpdateDate",
			type: "date",
			align: "center",
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
		{
			type: "clone",
			onClick: () => {
				console.log('"clone": ', "clone");
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
		{
			icon: "",
			text: "",
			type: "selectBox",
			value: "0",
			onClick: (e) => {
				// @ts-ignore
				dispatch(getRoles({
					pagedRequest: {
						sortingField: roles?.sortingField || "id",
						sortingDir: roles?.sortingDir || "desc",
						searchQueries: [
							{
								columnName: roles?.searchQueries[0]?.columnName || "",
								searchQuery:
									roles?.searchQueries[0]?.searchQuery || "",
							},
						],
						pageNumber: roles?.pageIndex || 1,
						pageSize: roles?.pageSize || 5,
					},
					applicationId: e.target.value == 0 ? null : e.target.value,
				}));
			},
			options: lookup && [
				{
					id: 0,
					value: 0,
					option: "All",
				},
				...lookup.map(({ id, name }) => ({ id, value: id, option: name })),
			],
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
			data={
				data
					? {
						...data,
						items: data?.items?.map(
							({  users, ...group }) => ({
								...group,
								"users.name": users,
								 users,
							})
						),
					}
					: {}
			}
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
			hideCheckedOptions={false}
			disableSearch={true}
			// Card Section
			views={["table", "cards"]}
			cardType="group"
		/>
	);
}
