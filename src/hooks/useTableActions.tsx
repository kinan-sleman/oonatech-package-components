import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { debounce } from "lodash";

const useTableActions = (apiAction, appid = null, tenantid = null) => {
    const dispatch = useDispatch();

    const fetchInitialData = useCallback(
        (data, extraParams = {}) => {
            dispatch(
                apiAction({
                    ...extraParams,
                    pagedRequest: {
                        sortingField: "id",
                        sortingDir: "desc",
                        searchQueries: [
                            {
                                columnName: "",
                                searchQuery: "",
                            },
                        ],
                        pageNumber: 1,
                        pageSize: data?.pageSize || 5,
                    },
                    ...(appid ? { applicationId: appid } : {}),
                    ...(tenantid ? { tenantId: tenantid } : {}),
                })
            );
        },
        [dispatch, apiAction]
    );

    const handleSort = useCallback(
        (id, order, data, extraParams = {}) => {
            dispatch(
                apiAction({
                    ...extraParams,
                    pagedRequest: {
                        sortingField: id,
                        sortingDir: order.orientation?.toLowerCase(),
                        searchQueries: [
                            {
                                columnName: data?.searchQueries?.[0]?.columnName || "",
                                searchQuery: data?.searchQueries?.[0]?.searchQuery || "",
                            },
                        ],
                        pageNumber: data?.pageIndex || 1,
                        pageSize: data?.pageSize || 5,
                    },
                    ...(appid ? { applicationId: appid } : {}),
                    ...(tenantid ? { tenantId: tenantid } : {}),
                })
            );
        },
        [dispatch, apiAction]
    );

    const debouncedFilter = useCallback(
        debounce((id, query, data, extraParams = {}) => {
            dispatch(
                apiAction({
                    ...extraParams,
                    pagedRequest: {
                        sortingField: data?.sortingField || "id",
                        sortingDir: data?.sortingDir || "desc",
                        searchQueries: query?.length
                            ? [
                                {
                                    columnName: id || "all",
                                    searchQuery: query,
                                },
                            ]
                            : [],
                        pageNumber: data?.pageIndex || 1,
                        pageSize: data?.pageSize || 5,
                    },
                    ...(appid ? { applicationId: appid } : {}),
                    ...(tenantid ? { tenantId: tenantid } : {}),
                })
            );
        }, 200),
        [dispatch, apiAction]
    );

    const handleFilter = useCallback(
        (id, query, data, extraParams = {}) => {
            debouncedFilter(id, query, data, extraParams);
        },
        [debouncedFilter]
    );

    const handleSearchInput = useCallback(
        (_, query, data, extraParams = {}) => {
            debouncedFilter(_, query, data, extraParams);
        },
        [debouncedFilter]
    );

    const handleSearchPage = useCallback(
        (page, data, extraParams = {}) => {
            dispatch(
                apiAction({
                    ...extraParams,
                    pagedRequest: {
                        sortingField: data?.sortingField || "id",
                        sortingDir: data?.sortingDir || "desc",
                        searchQueries: data?.searchQueries || [],
                        pageNumber: page || 1,
                        pageSize: data?.pageSize || 5,
                    },
                    ...(appid ? { applicationId: appid } : {}),
                    ...(tenantid ? { tenantId: tenantid } : {}),
                })
            );
        },
        [dispatch, apiAction]
    );

    const handlePagination = useCallback(
        (page, data, extraParams = {}) => {
            dispatch(
                apiAction({
                    ...extraParams,
                    pagedRequest: {
                        sortingField: data?.sortingField || "id",
                        sortingDir: data?.sortingDir || "desc",
                        searchQueries: data?.searchQueries || [],
                        pageNumber: page || 1,
                        pageSize: data?.pageSize || 5,
                    },
                    ...(appid ? { applicationId: appid } : {}),
                    ...(tenantid ? { tenantId: tenantid } : {}),
                })
            );
        },
        [dispatch, apiAction]
    );

    const handleItemsNumber = useCallback(
        (number, data, extraParams = {}) => {
            if (number) {
                dispatch(
                    apiAction({
                        ...extraParams,
                        pagedRequest: {
                            sortingField: data?.sortingField || "id",
                            sortingDir: data?.sortingDir || "desc",
                            searchQueries: data?.searchQueries || [],
                            pageNumber: data?.pageIndex || 1,
                            pageSize: parseInt(number, 10),
                        },
                        ...(appid ? { applicationId: appid } : {}),
                        ...(tenantid ? { tenantId: tenantid } : {}),
                    })
                );
            }
        },
        [dispatch, apiAction]
    );

    return {
        handleSearchInput,
        handleSearchPage,
        handlePagination,
        handleItemsNumber,
        fetchInitialData,
        handleSort,
        handleFilter,
        debouncedFilter,
    };
};

export default useTableActions;
