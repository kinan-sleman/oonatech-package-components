import {v4 as uuidv4} from "uuid";
import Icons from "../../assets";

const initialState = {
    formElements: [
        {
            id: "1",
            langKey: "Headline",
            langValue: "Headline",
            type: "headline",
            color: "#00A7E1",
            icon: Icons.headLineIcon,
            colSpan: 3,
            rowSpan: 1,
            isRepeat: true,
            isMandatory: true,
            isUniqueConstraint: true,
            showTitle: true,
        },
        {
            id: "2",
            langKey: "Empty Space",
            langValue: "Empty Space",
            type: "empty",
            color: "#00A7E1",
            icon: Icons.EmptyIcon,
            colSpan: 3,
            rowSpan: 1,
            isRepeat: true,
            isMandatory: true,
            isUniqueConstraint: true,
            showTitle: true,
        },
        {
            id: "3",
            langKey: "Container",
            langValue: "Container",
            type: "container",
            color: "#00A7E1",
            icon: Icons.ContainerIcon,
            colSpan: 12,
            rowSpan: 1,
            isRepeat: true,
            showTitle: true,
            isMandatory: true,
            isUniqueConstraint: true,
            droppedItems: [],
        },
        {
            id: "5",
            langKey: "Date",
            langValue: "Date",
            type: "date",
            fieldTypeId: 1,
            icon: Icons.DateSelectionIcon,
            colSpan: 3,
            rowSpan: 1,
            isRepeat: true,
            isMandatory: true,
            isUniqueConstraint: true,
            validators: [],
            fieldValidators: [],
            properties: [],
            showTitle: true,
        },
    ],
    basicElements: [
        {
            id: "6",
            langKey: "Field",
            langValue: "Field",
            type: "field",
            fieldTypeId: 2,
            icon: Icons.FieldIcon,
            colSpan: 3,
            rowSpan: 1,
            isRepeat: true,
            isHidden: false,
            isNumber: false,
            isMandatory: true,
            isUniqueConstraint: true,
            fieldValidators: [],
            validators: [],
            properties: [],
            showTitle: true,
        },
        {
            id: "7",
            langKey: "Text Paragraph",
            langValue: "Text Paragraph",
            type: "paragraph",
            fieldTypeId: 3,
            icon: Icons.TextParagraphIcon,
            colSpan: 3,
            rowSpan: 1,
            isRepeat: true,
            isMandatory: true,
            isUniqueConstraint: true,
            fieldValidators: [],
            validators: [],
            properties: [],
            showTitle: true,
        },
        {
            id: "8",
            langKey: "Dropdown List",
            langValue: "Dropdown List",
            type: "dropdown",
            fieldTypeId: 4,
            icon: Icons.DropdownListIcon,
            colSpan: 3,
            rowSpan: 1,
            source: "JSON",
            resourceId: 0,
            isRepeat: true,
            isMandatory: true,
            option: "single",
            isUniqueConstraint: true,
            resourceData: [
                {id: 1, name: "option 1"},
                {id: 2, name: "option 2"},
                {id: 3, name: "option 3"},
            ],
            fieldValidators: [],
            validators: [],
            properties: [],
            showTitle: true,
        },
        {
            id: "9",
            langKey: "Single Selection",
            langValue: "Single Selection",
            type: "single selection",
            fieldTypeId: 5,
            icon: Icons.SingleSelectionIcon,
            colSpan: 3,
            rowSpan: 1,
            source: "JSON",
            resourceId: 0,
            isRepeat: true,
            isMandatory: true,
            isUniqueConstraint: true,
            fieldValidators: [],
            validators: [],
            properties: [],
            showTitle: true,
        },
        {
            id: "10",
            langKey: "Multiple Selection",
            langValue: "Multiple Selection",
            type: "multiple selection",
            fieldTypeId: 6,
            icon: Icons.MultipleSelectionIcon,
            colSpan: 3,
            rowSpan: 1,
            source: "JSON",
            resourceId: 0,
            isRepeat: true,
            isMandatory: true,
            isUniqueConstraint: true,
            fieldValidators: [],
            validators: [],
            properties: [],
            showTitle: true,
        },
        {
            id: "11",
            langKey: "Picture",
            langValue: "Picture",
            type: "picture",
            src: null,
            fit: "fill",
            width: "",
            height: "",
            icon: Icons.PictureIcon,
            colSpan: 3,
            rowSpan: 1,
            isRepeat: true,
            isMandatory: true,
            isUniqueConstraint: true,
            fieldValidators: [],
            validators: [],
            properties: [],
            showTitle: true,
        },
        {
            id: "12",
            langKey: "Uploader",
            langValue: "Uploader",
            type: "uploader",
            fieldTypeId: 7,
            option: "small",
            icon: Icons.UploaderIcon,
            colSpan: 3,
            rowSpan: 1,
            isRepeat: true,
            isMandatory: true,
            isUniqueConstraint: true,
            fieldValidators: [],
            validators: [],
            properties: [],
            showTitle: true,
        },
        {
            id: "13",
            langKey: "Time",
            langValue: "Time",
            type: "time",
            fieldTypeId: 8,
            icon: Icons.TimeIcon,
            colSpan: 3,
            rowSpan: 1,
            isRepeat: true,
            isMandatory: true,
            isUniqueConstraint: true,
            fieldValidators: [],
            validators: [],
            properties: [],
            showTitle: true,
        },
    ],
    droppedItems: [],
    columnNumber: 12,
    formName: "My Form",
    description: "Form Description",
    screenViewing: "Center of Screen",
    policy: "Form Policy",
    order: "0",
    color: "#3AE0AF",
    icon: "FormIcon1",
};

const actionTypes = {
    ADD_ITEM: "ADD_ITEM",
    ADD_CONTAINER_ITEM: "ADD_CONTAINER_ITEM",
    REMOVE_ITEM: "REMOVE_ITEM",
    REMOVE_CONTAINER_ITEM: "REMOVE_CONTAINER_ITEM",
    UPDATE_ITEMS_ORDER: "UPDATE_ITEMS_ORDER",
    UPDATE_CONTAINER_ITEMS_ORDER: "UPDATE_CONTAINER_ITEMS_ORDER",
    CLONE_CONTAINER_ITEM: "CLONE_CONTAINER_ITEM",
    CLONE_ITEM: "CLONE_ITEM",
    CLONE_ITEM_WITH_PROPERTIES: "CLONE_ITEM_WITH_PROPERTIES",
    CLEAR_FORM: "CLEAR_FORM",
    UPDATE_CONTAINER_FIELD_SETTINGS: "UPDATE_CONTAINER_FIELD_SETTINGS",
    UPDATE_FIELD_SETTINGS: "UPDATE_FIELD_SETTINGS",
    SET_CONTAINER_OPTIONS_ITEM: "SET_CONTAINER_OPTIONS_ITEM",
    SET_OPTIONS_ITEM: "SET_OPTIONS_ITEM",
    UPDATE_ITEM_SPAN: "UPDATE_ITEM_SPAN",
    UPDATE_ROW_SPAN: "UPDATE_ROW_SPAN",
    UPDATE_CONTAINER_ROW_SPAN: "UPDATE_CONTAINER_ROW_SPAN",
    UPDATE_COL_SPAN: "UPDATE_COL_SPAN",
    UPDATE_CONTAINER_COL_SPAN: "UPDATE_CONTAINER_COL_SPAN",
    UPDATE_CONTAINER_FIELD_PROPERTIES: "UPDATE_CONTAINER_FIELD_PROPERTIES",
    UPDATE_FIELD_PROPERTIES: "UPDATE_FIELD_PROPERTIES",
    UPDATE_FIELD_RESOURCE_ID: "UPDATE_FIELD_RESOURCE_ID",
    UPDATE_CONTAINER_FIELD_RESOURCE_ID: "UPDATE_CONTAINER_FIELD_RESOURCE_ID",
    UPDATE_FIELD_TITLE: "UPDATE_FIELD_TITLE",
    UPDATE_CONTAINER_FIELD_TITLE: "UPDATE_CONTAINER_FIELD_TITLE",
    UPDATE_FIELD_COLOR: "UPDATE_FIELD_COLOR",
    UPDATE_CONTAINER_FIELD_COLOR: "UPDATE_CONTAINER_FIELD_COLOR",
    UPDATE_OPTION: "UPDATE_OPTION",
    UPDATE_CONTAINER_OPTION: "UPDATE_CONTAINER_OPTION",
    UPDATE_IMG_SRC: "UPDATE_IMG_SRC",
    UPDATE_CONTAINER_IMG_SRC: "UPDATE_CONTAINER_IMG_SRC",
    UPDATE_IMG_OPTIONS: "UPDATE_IMG_OPTIONS",
    UPDATE_CONTAINER_IMG_OPTIONS: "UPDATE_CONTAINER_IMG_OPTIONS",
    UPDATE_FORM_SETTINGS: "UPDATE_FORM_SETTINGS",
    UPDATE_FORM_NAME: 'UPDATE_FORM_NAME',
    SET_FORM_DETAILS: 'SET_FORM_DETAILS',
};

function formTypeElementsReducer(state: any, action: any) {
    switch (action.type) {
        case actionTypes.ADD_ITEM:
            return {
                ...state,
                droppedItems: [...state.droppedItems, action.payload],
            };
        case actionTypes.ADD_CONTAINER_ITEM: {
            const {containerId, newItem} = action.payload;
            return {
                ...state,
                droppedItems: state.droppedItems.map((item: any) =>
                    item.id === containerId
                        ? {
                            ...item,
                            droppedItems: [...(item.droppedItems || []), newItem],
                        }
                        : item
                ),
            };
        }
        case actionTypes.REMOVE_ITEM:
            return {
                ...state,
                droppedItems: state.droppedItems.filter(
                    (item: any) => item.id !== action.payload
                ),
            };
        case actionTypes.REMOVE_CONTAINER_ITEM: {
            const {containerId, id} = action.payload;
            return {
                ...state,
                droppedItems: state.droppedItems.map((item: any) =>
                    item.id === containerId
                        ? {
                            ...item,
                            droppedItems: item.droppedItems?.filter(
                                (subItem: any) => subItem.id !== id
                            ),
                        }
                        : item
                ),
            };
        }
        case actionTypes.UPDATE_ITEMS_ORDER:
            return {
                ...state,
                droppedItems: action.payload,
            };
        case actionTypes.UPDATE_CONTAINER_ITEMS_ORDER: {
            const {containerId, updatedItems} = action.payload;
            return {
                ...state,
                droppedItems: state.droppedItems.map((item: any) =>
                    item.id === containerId
                        ? {...item, droppedItems: updatedItems}
                        : item
                ),
            };
        }
        case actionTypes.CLONE_CONTAINER_ITEM: {
            const {containerId, id} = action.payload;
            return {
                ...state,
                droppedItems: state.droppedItems.map((item: any) => {
                    if (item.id === containerId) {
                        const itemIndex = item.droppedItems?.findIndex(
                            (subItem: any) => subItem.id === id
                        );
                        if (itemIndex !== -1) {
                            const itemToClone = item.droppedItems[itemIndex];
                            const newItem = {...itemToClone, id: uuidv4()};
                            const updatedDroppedItems = [
                                ...item.droppedItems.slice(0, itemIndex + 1),
                                newItem,
                                ...item.droppedItems.slice(itemIndex + 1),
                            ];
                            return {...item, droppedItems: updatedDroppedItems};
                        }
                    }
                    return item;
                }),
            };
        }
        case actionTypes.CLONE_ITEM: {
            const {id} = action.payload;
            const itemIndex = state.droppedItems.findIndex(
                (item: any) => item.id === id
            );
            if (itemIndex !== -1) {
                const itemToClone = state.droppedItems[itemIndex];
                const newItem = {...itemToClone, id: uuidv4()};
                const updatedDroppedItems = [
                    ...state.droppedItems.slice(0, itemIndex + 1),
                    newItem,
                    ...state.droppedItems.slice(itemIndex + 1),
                ];
                return {
                    ...state,
                    droppedItems: updatedDroppedItems,
                };
            }
            return state;
        }
        case actionTypes.CLONE_ITEM_WITH_PROPERTIES: {
            const {
                id,
                langKey,
                langValue,
                type,
                source,
                resourceId,
                isMandatory,
                isUniqueConstraint,
            } = action.payload;

            const itemIndex = state.droppedItems.findIndex((item: any) => item.id === id);
            if (itemIndex !== -1) {
                const itemToClone = state.droppedItems[itemIndex];
                const newItem = {
                    ...itemToClone,
                    id: uuidv4(),
                    langKey,
                    langValue,
                    type,
                    source,
                    resourceId,
                    isMandatory,
                    isUniqueConstraint,
                };
                const updatedDroppedItems = [
                    ...state.droppedItems.slice(0, itemIndex + 1),
                    newItem,
                    ...state.droppedItems.slice(itemIndex + 1),
                ];
                return {
                    ...state,
                    droppedItems: updatedDroppedItems,
                };
            }
            return state;
        }
        case actionTypes.CLEAR_FORM:
            return {
                ...state,
                droppedItems: [],
            };
        case actionTypes.UPDATE_CONTAINER_FIELD_SETTINGS: {
            const {containerId, id, colSpan, rowSpan, showTitle, isRepeat} = action.payload;
            return {
                ...state,
                droppedItems: state.droppedItems.map((container: any) => {
                    if (container.id === containerId) {
                        return {
                            ...container,
                            droppedItems: container.droppedItems.map((item: any) =>
                                item.id === id
                                    ? {...item, colSpan, rowSpan, showTitle, isRepeat}
                                    : item
                            ),
                        };
                    }
                    return container;
                }),
            };
        }
        case actionTypes.UPDATE_FIELD_SETTINGS: {
            const {id, colSpan, rowSpan, isRepeat, showTitle} = action.payload;
            return {
                ...state,
                droppedItems: state.droppedItems.map((item: any) =>
                    item.id === id
                        ? {...item, colSpan, rowSpan, isRepeat, showTitle}
                        : item
                ),
            };
        }
        case actionTypes.SET_CONTAINER_OPTIONS_ITEM: {
            const {containerId, id, options} = action.payload;
            return {
                ...state,
                droppedItems: state.droppedItems.map((container: any) =>
                    container.id === containerId
                        ? {
                            ...container,
                            droppedItems: container.droppedItems.map((item: any) =>
                                item.id === id
                                    ? {...item, resourceData: options}
                                    : item
                            ),
                        }
                        : container
                ),
            };
        }
        case actionTypes.SET_OPTIONS_ITEM: {
            const {id, options} = action.payload;
            return {
                ...state,
                droppedItems: state.droppedItems.map((item: any) =>
                    item.id === id ? {...item, resourceData: options} : item
                ),
            };
        }
        case actionTypes.UPDATE_ITEM_SPAN: {
            const {id, colSpan, rowSpan} = action.payload;
            return {
                ...state,
                droppedItems: state.droppedItems.map((item: any) =>
                    item.id === id ? {...item, colSpan, rowSpan} : item
                ),
            };
        }
        case actionTypes.UPDATE_ROW_SPAN: {
            const {id, rowSpan} = action.payload;
            return {
                ...state,
                droppedItems: state.droppedItems.map((item: any) =>
                    item.id === id ? {...item, rowSpan} : item
                ),
            };
        }
        case actionTypes.UPDATE_CONTAINER_ROW_SPAN: {
            const {containerId, id, rowSpan} = action.payload;
            return {
                ...state,
                droppedItems: state.droppedItems.map((container: any) =>
                    container.id === containerId
                        ? {
                            ...container,
                            droppedItems: container.droppedItems.map((item: any) =>
                                item.id === id ? {...item, rowSpan} : item
                            ),
                        }
                        : container
                ),
            };
        }
        case actionTypes.UPDATE_COL_SPAN: {
            const {id, colSpan} = action.payload;
            return {
                ...state,
                droppedItems: state.droppedItems.map((item: any) =>
                    item.id === id ? {...item, colSpan} : item
                ),
            };
        }
        case actionTypes.UPDATE_CONTAINER_COL_SPAN: {
            const {containerId, id, colSpan} = action.payload;
            return {
                ...state,
                droppedItems: state.droppedItems.map((container: any) =>
                    container.id === containerId
                        ? {
                            ...container,
                            droppedItems: container.droppedItems.map((item: any) =>
                                item.id === id ? {...item, colSpan} : item
                            ),
                        }
                        : container
                ),
            };
        }
        case actionTypes.UPDATE_CONTAINER_FIELD_PROPERTIES: {
            const {
                containerId,
                id,
                langKey,
                langValue,
                type,
                isMandatory,
                isNumber,
                isHidden,
                isUniqueConstraint,
                source,
                resourceId,
                validators,
                properties,
            } = action.payload;
            return {
                ...state,
                droppedItems: state.droppedItems.map((container: any) =>
                    container.id === containerId
                        ? {
                            ...container,
                            droppedItems: container.droppedItems.map((item: any) =>
                                item.id === id
                                    ? {
                                        ...item,
                                        langKey,
                                        langValue,
                                        type,
                                        isMandatory,
                                        isNumber,
                                        isHidden,
                                        isUniqueConstraint,
                                        source,
                                        resourceId,
                                        validators,
                                        properties,
                                    }
                                    : item
                            ),
                        }
                        : container
                ),
            };
        }
        case actionTypes.UPDATE_FIELD_PROPERTIES: {
            const {
                id,
                langKey,
                langValue,
                type,
                isMandatory,
                isNumber,
                isHidden,
                source,
                resourceId,
                validators,
                fieldValidators,
                properties,
                isUniqueConstraint,
            } = action.payload;

            return {
                ...state,
                droppedItems: state.droppedItems.map((item: any) =>
                    item.id === id
                        ? {
                            ...item,
                            langKey,
                            langValue,
                            type,
                            isMandatory,
                            isNumber,
                            isHidden,
                            source,
                            resourceId,
                            validators,
                            fieldValidators,
                            properties,
                            isUniqueConstraint,
                        }
                        : item
                ),
            };
        }
        case actionTypes.UPDATE_FIELD_RESOURCE_ID: {
            const {id, resourceId} = action.payload;
            return {
                ...state,
                droppedItems: state.droppedItems.map((item: any) =>
                    item.id === id ? {...item, resourceId} : item
                ),
            };
        }
        case actionTypes.UPDATE_CONTAINER_FIELD_RESOURCE_ID: {
            const {containerId, id, resourceId} = action.payload;
            return {
                ...state,
                droppedItems: state.droppedItems.map((container: any) =>
                    container.id === containerId
                        ? {
                            ...container,
                            droppedItems: container.droppedItems.map((item: any) =>
                                item.id === id
                                    ? {...item, resourceId}
                                    : item
                            ),
                        }
                        : container
                ),
            };
        }
        case actionTypes.UPDATE_FIELD_TITLE: {
            const {id, langValue} = action.payload;
            return {
                ...state,
                droppedItems: state.droppedItems.map((item: any) =>
                    item.id === id ? {...item, langValue} : item
                ),
            };
        }
        case actionTypes.UPDATE_CONTAINER_FIELD_TITLE: {
            const {containerId, id, langValue} = action.payload;
            return {
                ...state,
                droppedItems: state.droppedItems.map((container: any) =>
                    container.id === containerId
                        ? {
                            ...container,
                            droppedItems: container.droppedItems.map((item: any) =>
                                item.id === id ? {...item, langValue} : item
                            ),
                        }
                        : container
                ),
            };
        }
        case actionTypes.UPDATE_FIELD_COLOR: {
            const {id, color} = action.payload;
            return {
                ...state,
                droppedItems: state.droppedItems.map((item: any) =>
                    item.id === id ? {...item, color} : item
                ),
            };
        }
        case actionTypes.UPDATE_CONTAINER_FIELD_COLOR: {
            const {containerId, id, color} = action.payload;
            return {
                ...state,
                droppedItems: state.droppedItems.map((container: any) =>
                    container.id === containerId
                        ? {
                            ...container,
                            droppedItems: container.droppedItems.map((item: any) =>
                                item.id === id ? {...item, color} : item
                            ),
                        }
                        : container
                ),
            };
        }
        case actionTypes.UPDATE_OPTION: {
            const {id, option} = action.payload;
            return {
                ...state,
                droppedItems: state.droppedItems.map((item: any) =>
                    item.id === id ? {...item, option} : item
                ),
            };
        }
        case actionTypes.UPDATE_CONTAINER_OPTION: {
            const {containerId, id, option} = action.payload;
            return {
                ...state,
                droppedItems: state.droppedItems.map((container: any) =>
                    container.id === containerId
                        ? {
                            ...container,
                            droppedItems: container.droppedItems.map((item: any) =>
                                item.id === id ? {...item, option} : item
                            ),
                        }
                        : container
                ),
            };
        }
        case actionTypes.UPDATE_IMG_SRC: {
            const {id, src} = action.payload;
            return {
                ...state,
                droppedItems: state.droppedItems.map((item: any) =>
                    item.id === id ? {...item, src} : item
                ),
            };
        }
        case actionTypes.UPDATE_CONTAINER_IMG_SRC: {
            const {containerId, id, src} = action.payload;
            return {
                ...state,
                droppedItems: state.droppedItems.map((container: any) =>
                    container.id === containerId
                        ? {
                            ...container,
                            droppedItems: container.droppedItems.map((item: any) =>
                                item.id === id ? {...item, src} : item
                            ),
                        }
                        : container
                ),
            };
        }
        case actionTypes.UPDATE_CONTAINER_IMG_OPTIONS: {
            const container = state.droppedItems.find(
                (item: any) => item.id === action.payload.id
            );
            const item = container?.droppedItems?.find(
                (item: any) => item.id === action.payload.id
            );
            if (item) {
                if (action.payload.fit) {
                    item.fit = action.payload.fit;
                }
                if (action.payload.width) {
                    item.width = action.payload.width;
                }
                if (action.payload.height) {
                    item.height = action.payload.height;
                }
            }
            return {...state};
        }
        case actionTypes.UPDATE_IMG_OPTIONS: {
            const item = state.droppedItems.find(
                (item: any) => item.id === action.payload.id
            );
            if (item) {
                if (action.payload.fit) {
                    item.fit = action.payload.fit;
                }
                if (action.payload.width) {
                    item.width = action.payload.width;
                }
                if (action.payload.height) {
                    item.height = action.payload.height;
                }
            }
            return {...state};
        }
        case actionTypes.UPDATE_FORM_SETTINGS: {
            return {
                ...state,
                screenViewing: action.payload.screenViewing,
                columnNumber: action.payload.columnNumber,
                policy: action.payload.policy,
                order: action.payload.order,
                icon: action.payload.icon,
                formName: action.payload.formName,
                description: action.payload.description,
                color: action.payload.color,
            };
        }
        case actionTypes.UPDATE_FORM_NAME: {
            return {
                ...state,
                formName: action.payload,
            };
        }
        case actionTypes.SET_FORM_DETAILS: {
            return {
                ...state,
                description: action.payload.description || state.description,
                screenViewing: action.payload.screenViewing || state.screenViewing,
                policy: action.payload.policy || state.policy,
                order: action.payload.order || state.order,
                color: action.payload.color || state.color,
                icon: action.payload.icon || state.icon,
                formName: action.payload.name || state.formName,
                columnNumber: action.payload.columnNumber || state.columnNumber,
                droppedItems: action.payload.droppedItems || state.droppedItems,
            };
        }
        default:
            return state;
    }
}

export {initialState, actionTypes, formTypeElementsReducer};
