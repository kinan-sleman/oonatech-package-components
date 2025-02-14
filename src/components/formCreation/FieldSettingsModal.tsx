import React, { useEffect, useRef, useState, Dispatch, SetStateAction } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import {
    setContainerOptionsItem,
    setOptionsItem,
    updateContainerFieldProperties,
    updateContainerFieldResourceId,
    updateContainerFieldSettings,
    updateContainerImgOptions,
    updateContainerOption,
    updateFieldProperties,
    updateFieldResourceId,
    updateFieldSettings,
    updateImgOptions,
    updateOption,
} from "../../redux/reducers/formCreationReducer";
import { Collapse } from "@mui/material";
import { errorHelper, rejectingHelper } from "../../utils/functions";
import { CheckBox, MainInput, MainModal, MultiSelectDropdown } from "../../../index";
import { Element } from "../../redux/reducers/formCreationReducer";

import {
    CallResource,
    getResourceFilters,
    getResources,
} from "../../redux/reducers/resourcesReducer";
import {
    getField,
    getFieldsLookup,
    getFieldTypes,
} from "../../redux/reducers/fieldReducer";
import {
    getValidatorProperties,
    getValidatorsLookup,
} from "../../redux/reducers/validatorsReducer";

export default function FieldSettingsModal({
    container = null,
    setModal,
    modal,
    setFormState,
    id,
}: {
    container?: Element | null;
    setModal: Dispatch<SetStateAction<boolean | undefined>>;
    setFormState?: React.Dispatch<React.SetStateAction<any>>,
    modal: any;
    id: string;
}) {
    const { droppedItems } = useSelector(
        (state: RootState) => state.formCreation
    );
    const { resources, filters } = useSelector(
        (state: RootState) => state.resource
    );
    const { properties, lookup, loading } = useSelector(
        (state: RootState) => state.validator
    );
    const item = container
        ? container?.droppedItems?.find((el) => el.id === id)
        : droppedItems.find((el: any) => el.id === id);
    const dispatch = useDispatch<AppDispatch>();
    const [source, setSource] = useState(item?.source || "");
    const [resourceId, setResourceId] = useState<any>([]);
    const [fieldValidators, setFieldValidators] = useState([])
    const [validators, setValidators] = useState<string[] | never[]>([]);
    const [validatorIds, setValidatorIds] = useState<string[]>([]);
    const [listValue, setListValue] = useState(item?.resourceData ?? []);
    const [repeat, setRepeat] = useState(item?.isRepeat);
    const [columnSpan, setColumnSpan] = useState(item?.colSpan || 1);
    const [rowSpan, setRowSpan] = useState(item?.rowSpan || 1);

    const { lookup: fieldLookup } = useSelector(
        (state: RootState) => state.field
    );
    const itemFields = fieldLookup?.filter(
        (field: any) => field?.type?.toLowerCase() === item?.type?.toLowerCase()
    );
    const [isMandatory, setIsMandatory] = useState(item?.isMandatory || false);
    const [isNumber, setIsNumber] = useState(item?.isNumber || false);
    const [isHidden, setIsHidden] = useState(item?.isHidden || false);
    const [isUniqueConstraint, setIsUniqueConstraint] = useState(
        item?.isUniqueConstraint || false
    );
    const [fieldLanguageKey, setFieldLanguageKey] = useState(item?.langKey || "");
    const [imgWidth, setImgWidth] = useState(item?.width);
    const [imgHeight, setImgHeight] = useState(item?.height);
    const [fit, setFit] = useState(item?.fit);
    const [fieldLanguageValue, setFieldLanguageValue] = useState(
        item?.langValue || ""
    );
    const [option, setOption] = useState(item?.option || "");
    const [field, setField] = useState(item?.name || "");
    const [modifiedProperties, setModifiedProperties] = useState<any[]>([]);
    const handlePropertyChange = (
        propertyIndex: any,
        validatorIndex: any,
        propertyValue: any
    ) => {
        setModifiedProperties((prev) => {
            const newProperties: any = [...prev];
            if (newProperties[propertyIndex]?.validatorProperties) {
                const updatedValidatorProperties = [
                    ...newProperties[propertyIndex].validatorProperties,
                ];
                updatedValidatorProperties[validatorIndex] = {
                    ...updatedValidatorProperties[validatorIndex],
                    value: propertyValue,
                };

                newProperties[propertyIndex] = {
                    ...newProperties[propertyIndex],
                    validatorProperties: updatedValidatorProperties,
                };
            }

            return newProperties;
        });
    };

    useEffect(() => {
        if (properties?.length) {
            setModifiedProperties(
                properties?.map((prop: any) => ({
                    ...prop,
                    validatorProperties: prop?.validatorProperties?.map((vp: any) => ({
                        ...vp,
                        value: vp?.defaultValue,
                    })),
                }))
            );
        }
    }, [properties]);

    useEffect(() => {
        dispatch(getFieldsLookup());
        dispatch(getFieldTypes());
    }, [dispatch]);

    useEffect(() => {
        if (modal) {
            if (item?.fieldTypeId) {
                setValidators([]);
                setValidatorIds([]);
                setModifiedProperties([]);
                dispatch(getValidatorsLookup([item?.fieldTypeId])).then(async () => {
                    const validatorsIds = item?.validators.map(
                        (validator: any) => validator.id
                    );
                    if (validators?.length > 0) {
                        await dispatch(getValidatorProperties(validatorsIds));
                    }
                    if (item?.source && item?.source !== "JSON") {
                        await dispatch(CallResource(item?.source as string));
                    }
                    setValidatorIds(validatorsIds);
                    setValidators(
                        item?.validators.map((validator: any) => ({
                            ...validator,
                            validatorId: validator.id,
                            name: validator.name as string,
                            type: validator.type as string,
                            jsFile: validator.jsFile as string,
                            lastModified: validator.lastModified as string,
                        }))
                    );
                    setModifiedProperties(item?.properties || []);
                });
            }
        }
    }, [dispatch, modal]);

    useEffect(() => {
        setFieldLanguageKey(item?.langKey || "");
        setFieldLanguageValue(item?.langValue || "");
        setResourceId(item?.resourceId);
        setSource(item?.source || "");
        setColumnSpan(item?.colSpan || "");
        setRowSpan(item?.rowSpan || "");
        setImgWidth(item?.width);
        setImgHeight(item?.height);
        setFit(item?.fit);
        setListValue(item?.resourceData);
    }, [item]);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const updatedValidators = validators.map((validator: any) => {
            const updatedProperties = validator?.validatorProperties?.map(
                (property: any) => {
                    return {
                        ...property,
                        value: property?.value || property?.defaultValue,
                    };
                }
            );

            return {
                ...validator,
                validatorProperties: updatedProperties,
                validatorId: validator.id,
            };
        });
        if (
            item?.type === "single selection" ||
            item?.type === "multiple selection" ||
            item?.type === "dropdown"
        ) {
            const ids = listValue?.map((item: any) => item.id);
            const hasDuplicateIds = new Set(ids).size !== ids.length;
            if (hasDuplicateIds) {
                errorHelper("Duplicate 'id' values are not allowed.");
            } else {
                if (container) {
                    dispatch(
                        setContainerOptionsItem({
                            containerId: container?.id || "",
                            id: item?.id,
                            options: listValue,
                        })
                    );
                } else {
                    dispatch(
                        setOptionsItem({
                            id: item?.id,
                            options: listValue,
                        })
                    );
                }
            }
        }
        if (container) {
            dispatch(
                updateContainerFieldProperties({
                    containerId: container?.id || "",
                    id: item?.id,
                    langKey: fieldLanguageKey,
                    langValue: fieldLanguageValue,
                    type: item?.type,
                    isMandatory,
                    isNumber,
                    isHidden,
                    isUniqueConstraint,
                    source,
                    resourceId,
                    validators: updatedValidators,
                    properties: modifiedProperties,
                })
            );
        } else {
            dispatch(
                updateFieldProperties({
                    id: item?.id,
                    langKey: fieldLanguageKey,
                    langValue: fieldLanguageValue,
                    type: item?.type,
                    isMandatory,
                    isNumber,
                    isHidden,
                    isUniqueConstraint,
                    source,
                    resourceId,
                    fieldValidators,
                    validators: updatedValidators,
                    properties: modifiedProperties,
                })
            );
        }
        setValidators([]);
        setValidatorIds([]);
        dispatch(getValidatorsLookup(["0"]));
        setModal(false);
    };
    const handleSave = (e: any) => {
        e.preventDefault();
        if (container) {
            dispatch(
                updateContainerFieldSettings({
                    containerId: container?.id || "",
                    id: item?.id || "",
                    colSpan: columnSpan,
                    rowSpan: rowSpan,
                    isRepeat: repeat,
                })
            );
        } else {
            dispatch(
                updateFieldSettings({
                    id: item?.id || "",
                    colSpan: columnSpan,
                    rowSpan: rowSpan,
                    isRepeat: repeat,
                })
            );
        }
        setValidators([]);
        setValidatorIds([]);
        dispatch(getValidatorsLookup(["0"]));
        setModal(false);
    };
    useEffect(() => {
        if (modal) {
            if (
                item?.type === "single selection" ||
                item?.type === "multiple selection" ||
                item?.type === "dropdown"
            ) {
                dispatch(
                    getResources({
                        pageNumber: 1,
                        pageSize: 10,
                        searchQuery: "",
                        sortingDir: "asc",
                        sortingField: "id",
                    })
                );
            }
        }
    }, [item, modal]);

    const handleFieldChange = async (value: any) => {
        if (value && value !== "") {
            const res: any = await dispatch(getField((value)));
            if (res?.payload?.item?.validators && lookup) {
                setFieldValidators(res?.payload?.item?.validators);
                const validatorIds = res.payload.item.validators.map(
                    (validator: any) => validator.id
                );
                const filteredValidators = lookup.filter(({ id }: { id: any }) =>
                    validatorIds.includes(id)
                );
                setValidatorIds(validatorIds);
                const filteredValidatorsIds = filteredValidators.map(
                    (validator: any) => validator.id
                );
                setValidators(filteredValidatorsIds);
                // console.log(filteredValidatorsIds, 'filteredValidatorsIds');
                const props = await dispatch(
                    getValidatorProperties(filteredValidatorsIds)
                );
                setModifiedProperties([...props?.payload?.item]);
            }
            setField(res?.payload?.item?.name);
            setFieldLanguageKey(res?.payload?.item?.name);
            setFieldLanguageValue(res?.payload?.item?.name);
            setIsMandatory(res?.payload?.item?.isMandatory);
            setIsNumber(res?.payload?.item?.isNumber);
            setIsHidden(res?.payload?.item?.isHidden);
            setIsUniqueConstraint(res?.payload?.item?.isUniqueConstraint);
        } else {
            setField("");
            setFieldLanguageKey("");
            setFieldLanguageValue("");
            setIsMandatory(false);
            setIsNumber(false);
            setIsHidden(false);
            setIsUniqueConstraint(false);
        }
    };

    return (
        <section>
            <MainModal
                handleClose={() => {
                    setValidators([]);
                    setValidatorIds([]);
                    dispatch(getValidatorsLookup(["0"]));
                    setModal(false);
                }}
                cls={`!w-[550px] min-h-[450px]`}
                inActiveFormActions
                inActiveHeader
                title="Field Settings"
                check={modal}
            >
                <div className="w-full p-3 pt-6">
                    <div className="flex flex-col gap-2 !border-dashed !border-[3px] p-3">
                        <h3 className="font-bold">Field Settings</h3>
                        <MainInput
                            inputBorder
                            placeholder="Column Span"
                            label="Column Span"
                            value={columnSpan}
                            onChange={(value, e) => setColumnSpan(value as string)}
                        />
                        <MainInput
                            inputBorder
                            placeholder="Row Span"
                            label="Row Span"
                            value={rowSpan}
                            onChange={(value, e) => setRowSpan(value as string)}
                        />
                        <div className="flex justify-between items-center">
                            {item?.type !== "date" &&
                                item?.type !== "headline" &&
                                item?.type !== "empty" && (
                                    <CheckBox
                                        checked={repeat}
                                        onChange={() => setRepeat(!repeat)}
                                        label="Repeat"
                                        light
                                    />
                                )}
                            <div className="relative">
                                <button
                                    onClick={(e) => handleSave(e)}
                                    className="Submit bg-[#1b84ff] rounded-lg text-sm text-white font-normal w-[109px] h-[40px] opacity-100"
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 !border-dashed !border-[3px] my-4 p-3">
                        <div className="flex justify-between items-center">
                            <h3 className="font-bold">Creation field</h3>
                            {item?.type !== "headline" &&
                                item?.type !== "picture" &&
                                item?.type !== "empty" &&
                                itemFields?.length > 0 && (
                                    <div>
                                        <select
                                            onChange={(e) => handleFieldChange(e.target.value)}
                                            value={field?.langValue}
                                            className="w-full h-full rounded-lg px-2 py-1 cursor-pointer border-l bg-[#eee]"
                                        >
                                            <option value="">Choose Field</option>
                                            {itemFields?.map(({ id, name }: { id: any, name: any }) => {
                                                return (
                                                    <option key={id} value={id}>
                                                        {name}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                    </div>
                                )}
                        </div>
                        {item?.type !== "headline" &&
                            item?.type !== "picture" &&
                            item?.type !== "empty" && (
                                <>
                                    {/* Source Fields */}
                                    {(item?.type === "single selection" ||
                                        item?.type === "multiple selection" ||
                                        item?.type === "MultiSelect" ||
                                        item?.type === "Select" ||
                                        item?.type === "dropdown") && (
                                            <div>
                                                <div className={source ? "mb-3" : ""}>
                                                    <MainInput
                                                        inputBorder
                                                        required
                                                        value={source}
                                                        onChange={async (value) => {
                                                            if (value !== "0") {
                                                                const props = await dispatch(
                                                                    CallResource(value as string)
                                                                );
                                                                setResourceId(
                                                                    props?.payload?.id
                                                                );
                                                                if (container) {
                                                                    updateContainerFieldResourceId({
                                                                        containerId: container?.id || "",
                                                                        id: item?.id,
                                                                        resourceId: value as string,
                                                                    });
                                                                } else {
                                                                    updateFieldResourceId({
                                                                        id: item?.id,
                                                                        resourceId: value as string,
                                                                    });
                                                                }
                                                                setSource(value as string);
                                                                return;
                                                            } else {
                                                                if (container) {
                                                                    updateContainerFieldResourceId({
                                                                        containerId: container?.id || "",
                                                                        id: item?.id,
                                                                        resourceId: 0,
                                                                    });
                                                                } else {
                                                                    updateFieldResourceId({
                                                                        id: item?.id,
                                                                        resourceId: 0,
                                                                    });
                                                                }
                                                            }
                                                            setSource(value as string);
                                                        }}
                                                        label="Source"
                                                        type="searchableSelect"
                                                        options={[
                                                            { content: "JSON", value: "0" },
                                                            ...(resources
                                                                ? resources.items.map(({ id, name }: { id: any, name: any }) => ({
                                                                    content: name,
                                                                    value: `${id}`,
                                                                }))
                                                                : []),
                                                        ]}
                                                    />
                                                </div>

                                                <Collapse in={source === "0"}>
                                                    <div>
                                                        <MainInput
                                                            inputBorder
                                                            label="List values"
                                                            required
                                                            type="textarea"
                                                            row={7}
                                                            value={JSON.stringify(listValue, null, 2)}
                                                            onChange={(value: any) => {
                                                                try {
                                                                    const updatedList = JSON.parse(value);
                                                                    const isValidList = updatedList.every(
                                                                        (item: any) =>
                                                                            Object.keys(item).length === 2 &&
                                                                            "id" in item &&
                                                                            "name" in item
                                                                    );
                                                                    if (!isValidList) {
                                                                        errorHelper(
                                                                            "Invalid keys. Only 'id' and 'name' are allowed."
                                                                        );
                                                                        return;
                                                                    }
                                                                    setListValue(updatedList);
                                                                } catch (error) {
                                                                    errorHelper("Invalid JSON input");
                                                                }
                                                            }}
                                                        />
                                                    </div>
                                                </Collapse>
                                            </div>
                                        )}

                                    {/* Picture Settings */}
                                    {item?.type === "picture" && (
                                        <div className="flex gap-3">
                                            <MainInput
                                                inputBorder
                                                placeholder="Image Width"
                                                label="Image Width"
                                                value={imgWidth}
                                                onChange={(value) => {
                                                    setImgWidth(value as string);
                                                    if (container) {
                                                        dispatch(
                                                            updateContainerImgOptions({
                                                                containerId: container?.id || "",
                                                                id: item?.id,
                                                                width: value as string,
                                                            })
                                                        );
                                                    } else {
                                                        dispatch(
                                                            updateImgOptions({
                                                                id: item?.id,
                                                                width: value as string,
                                                            })
                                                        );
                                                    }
                                                }}
                                                required
                                            />
                                            <MainInput
                                                inputBorder
                                                placeholder="Image Height"
                                                label="Image Height"
                                                value={imgHeight}
                                                onChange={(value) => {
                                                    setImgHeight(value as string);
                                                    if (container) {
                                                        dispatch(
                                                            updateContainerImgOptions({
                                                                containerId: container?.id || "",
                                                                id: item?.id,
                                                                height: value as string,
                                                            })
                                                        );
                                                    } else {
                                                        dispatch(
                                                            updateImgOptions({
                                                                id: item?.id,
                                                                height: value as string,
                                                            })
                                                        );
                                                    }
                                                }}
                                                required
                                            />
                                            <MainInput
                                                inputBorder
                                                type="searchableSelect"
                                                label="Object Fit"
                                                required
                                                options={[
                                                    { value: "fill", content: "Fill" },
                                                    { value: "contain", content: "Contain" },
                                                    { value: "cover", content: "Cover" },
                                                    { value: "none", content: "None" },
                                                    { value: "scale-down", content: "Scale Down" },
                                                ]}
                                                value={fit}
                                                onChange={(value) => {
                                                    if (container) {
                                                        dispatch(
                                                            updateContainerImgOptions({
                                                                containerId: container?.id || "",
                                                                id: item?.id,
                                                                fit: value as string,
                                                            })
                                                        );
                                                    } else {
                                                        dispatch(
                                                            updateImgOptions({
                                                                id: item?.id,
                                                                fit: value as string,
                                                            })
                                                        );
                                                    }
                                                    setFit(value as string);
                                                }}
                                            />
                                        </div>
                                    )}
                                    {/* Dropdown Settings */}
                                    {item?.type === "dropdown" && (
                                        <div className="flex gap-3">
                                            <MainInput
                                                inputBorder
                                                type="searchableSelect"
                                                label="Dropdown Type"
                                                required
                                                options={[
                                                    { value: "single", content: "Single" },
                                                    { value: "multiple", content: "Multiple" },
                                                ]}
                                                value={option}
                                                onChange={(value) => {
                                                    if (container) {
                                                        dispatch(
                                                            updateContainerOption({
                                                                containerId: container?.id || "",
                                                                id: item?.id,
                                                                option: value as string,
                                                            })
                                                        );
                                                    } else {
                                                        dispatch(
                                                            updateOption({
                                                                id: item?.id,
                                                                option: value as string,
                                                            })
                                                        );
                                                    }
                                                    setOption(value as string);
                                                }}
                                            />
                                        </div>
                                    )}

                                    {/* Uploader Settings */}
                                    {item?.type === "uploader" && (
                                        <div className="flex gap-3">
                                            <MainInput
                                                inputBorder
                                                type="searchableSelect"
                                                label="Uploader Type"
                                                required
                                                options={[
                                                    { value: "small", content: "Small" },
                                                    { value: "large", content: "Large" },
                                                ]}
                                                value={option}
                                                onChange={(value) => {
                                                    if (container) {
                                                        dispatch(
                                                            updateContainerOption({
                                                                containerId: container?.id || "",
                                                                id: item?.id,
                                                                option: value as string,
                                                            })
                                                        );
                                                    } else {
                                                        dispatch(
                                                            updateOption({
                                                                id: item?.id,
                                                                option: value as string,
                                                            })
                                                        );
                                                    }
                                                    setOption(value as string);
                                                }}
                                            />
                                        </div>
                                    )}
                                </>
                            )}

                        {/* Field Language Key Input */}
                        <div className="flex gap-3">
                            <MainInput
                                inputBorder
                                placeholder="Field Language Key"
                                label="Field Language Key"
                                value={fieldLanguageKey}
                                onChange={(value) => setFieldLanguageKey(value as string)}
                                required
                            />

                            {/* Field Language Value Input */}
                            <MainInput
                                inputBorder
                                placeholder="Field Language Value"
                                label="Field Language Value"
                                value={fieldLanguageValue}
                                onChange={(value) => setFieldLanguageValue(value as string)}
                                required
                            />
                        </div>
                        {item?.type !== "headline" && item?.type !== "empty" && (
                            <>
                                <div className="flex gap-3">
                                    {/* Validator and Length Inputs */}
                                    <MultiSelectDropdown
                                        data={
                                            lookup.length > 0
                                                ? lookup?.map(({ id, name } : { id: any, name: any }) => ({
                                                    id,
                                                    title: name,
                                                }))
                                                : []
                                        }
                                        selected={validatorIds}
                                        loading={loading}
                                        onChange={async (value: any) => {
                                            setValidatorIds(value as string[]);
                                            const props = await dispatch(
                                                getValidatorProperties(value as string[])
                                            );
                                            setValidators(props?.payload?.item);
                                        }}
                                        height={44}
                                        px={16}
                                        placeholder={"Validators"}
                                    />
                                </div>
                                <div className="flex flex-col gap-3">
                                    {modifiedProperties.map((property, propertyIndex) => {
                                        return (
                                            <div key={propertyIndex}>
                                                <span className="text-[#A4A4A4] text-xs mb-[12px] block">
                                                    {property?.name} Validator:
                                                </span>
                                                <div className="grid grid-cols-2 gap-3">
                                                    {property?.validatorProperties?.map(
                                                        (prop: any, validatorIndex: any) => (
                                                            <MainInput
                                                                key={validatorIndex}
                                                                value={prop?.value || prop?.defaultValue}
                                                                label={prop?.name}
                                                                required={prop?.isMandatory}
                                                                onChange={(value) =>
                                                                    handlePropertyChange(
                                                                        propertyIndex,
                                                                        validatorIndex,
                                                                        value
                                                                    )
                                                                }
                                                                type={prop?.isNumber ? "number" : "text"}
                                                                inputBorder
                                                            />
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                                {/* Checkboxes */}
                                <div className="flex justify-between items-center">
                                    <CheckBox
                                        checked={isMandatory}
                                        onChange={() => setIsMandatory(!isMandatory)}
                                        label="Mandatory"
                                        light
                                    />
                                    {item?.type === "field" ? <>
                                        <CheckBox
                                            checked={isHidden}
                                            onChange={() => setIsHidden(!isHidden)}
                                            label="Hidden"
                                            light
                                        />
                                        <CheckBox
                                            checked={isNumber}
                                            onChange={() => setIsNumber(!isNumber)}
                                            label="Number"
                                            light
                                        />
                                    </> : ""}
                                    <CheckBox
                                        checked={isUniqueConstraint}
                                        onChange={() => setIsUniqueConstraint(!isUniqueConstraint)}
                                        label="Unique Constraint"
                                        light
                                    />
                                </div>
                            </>
                        )}

                        {/* Submit Button */}
                        <div className="box-submit border-t border-[#F4F4F4]">
                            <div className="relative">
                                <button
                                    type="submit"
                                    onClick={(e) => handleSubmit(e)}
                                    className="Submit text-sm text-white font-normal w-[109px] h-[40px] opacity-100"
                                >
                                    Save
                                </button>
                            </div>
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    setValidators([]);
                                    setValidatorIds([]);
                                    dispatch(getValidatorsLookup(["0"]));
                                    setModal(false);
                                }}
                                className="text-sm text-[#595959] font-normal w-[109px] h-[40px]"
                            >
                                Discard
                            </button>
                        </div>
                    </div>
                </div>
            </MainModal>
        </section>
    );
}
