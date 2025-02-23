import React, { useState } from "react";
import DataPreviewTypes from "../components/DataPreviewTypes/DataDisplay";
import Export from "../components/icons/Export";
import Add from "../components/icons/Add";
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
				"id": "db3b8e56-5e79-4afa-9271-2e9a67440f28",
				"name": "amira ezat mokhtar",
				"userName": "amira",
				"url": null,
				"position": ".net devloper",
				"email": "amira@oonatech.com",
				"color": "#07E7CF",
				"managerId": null,
				"managerName": null,
				"managerUrl": null,
				"designations": []
			},
			{
				"id": "d73dfc59-4d67-467f-a107-ceb7df7c1d30",
				"name": "Shaed Nemmer Joudeh",
				"userName": "Shaden",
				"url": null,
				"position": "Manager",
				"email": "ShadenJo@gmail.com",
				"color": "#49DA61",
				"managerId": "d3619ded-a369-45f8-a46f-f84c4556f31f",
				"managerName": "Abd Mahmoud Tork",
				"managerUrl": null,
				"designations": []
			},
			{
				"id": "d3619ded-a369-45f8-a46f-f84c4556f31f",
				"name": "Abd Mahmoud Tork",
				"userName": "abd",
				"url": null,
				"position": "CEO",
				"email": "abd@oonatech.com",
				"color": "#FFDC5E",
				"managerId": null,
				"managerName": null,
				"managerUrl": null,
				"designations": []
			},
			{
				"id": "cddd301b-a705-45d5-94ca-6b6f361648b5",
				"name": "kinan kamal sleman",
				"userName": "kinan_sleman50",
				"url": "https://minioapi.oonatech.com/iam/4165fa4c-2df1-40e7-8e48-d453a50a8339kinan.jpg",
				"position": "Developer",
				"email": "kenan@oonatech.com",
				"color": "#49DA61",
				"managerId": null,
				"managerName": null,
				"managerUrl": null,
				"designations": []
			},
			{
				"id": "728f633a-3304-49ba-a355-def49844c855",
				"name": "Adam Abdulhamid Tork",
				"userName": "adam",
				"url": null,
				"position": "software",
				"email": "adam@oonatech.com",
				"color": "#FF5E5E",
				"managerId": null,
				"managerName": null,
				"managerUrl": null,
				"designations": [
					{
						"color": "#9F6EFE",
						"id": "6638054f-d822-4b2b-9c47-331c29281998",
						"name": "afsd"
					},
					{
						"color": "#FCA743",
						"id": "bd726338-901c-4fbe-a729-7435bcfb2e27",
						"name": "assasaas"
					}
				]
			},
			{
				"id": "0b08c720-92d8-4b84-accb-c5cf265d13b3",
				"name": "joud kadri habib",
				"userName": "joud",
				"url": null,
				"position": "software",
				"email": "joud@oonatech.com",
				"color": "#07E7CF",
				"managerId": null,
				"managerName": null,
				"managerUrl": null,
				"designations": [
					{
						"color": "#9F6EFE",
						"id": "6638054f-d822-4b2b-9c47-331c29281998",
						"name": "afsd"
					},
					{
						"color": "#FCA743",
						"id": "bd726338-901c-4fbe-a729-7435bcfb2e27",
						"name": "assasaas"
					},
					{
						"color": "#C6C6C6",
						"id": "b7409013-6812-4f04-90e0-3eb9bddeb107",
						"name": "bb2"
					}
				]
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
			label: "Employee name",
			id: "name",
			type: "user",
			color: "color",
			isMainForCards: true,
			isMainTitle: true,
			link: (row) => `/iam/employees/profile/${row?.id}`
		},
		{
			label: "ID number",
			id: "id",
			align: "center",
			cell: (content) => <>#{content}</>,
		},
		{
			label: "Employee Manager",
			id: "managerName",
			type: "user",
		},
		{
			label: "Designations",
			id: "designations.name",
			cell: (content, row) =>
				row?.designations?.length ? (
					<div className={'grid grid-cols-2 gap-3'}>
						{row?.designations?.map(({ name, color }) => {
							return <p
								className="px-[10px] py-[5px] flex gap-[3px] items-center rounded-[5px] text-xs text-white"
								style={{
									backgroundColor: color ? color : "#000",
								}}>{name}</p>;
						})}
					</div>
				) : (
					<>-</>
				),
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
							({ managerName, url, email, managerUrl, color, name, position, ...group }) => ({
								...group,
								name: {
									username: name,
									url: url,
									backgroundColor: color,
									email: email,
								},
								managerName: {
									username: managerName,
									backgroundColor: color,
									url: managerUrl ?? "",
								},
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
			cardType="user"
		/>
	);
}
