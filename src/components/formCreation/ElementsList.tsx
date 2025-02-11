import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {v4 as uuidv4} from "uuid";
import {
    addItem,
    Element,
    updateItemsOrder,
} from "../../redux/reducers/formCreationReducer";
import Icons from "../../assets";
import {RootState} from "../../redux/store";
import Path from "../icons/Path";
// import { ReactSVG } from "react-svg";

export default function ElementsList() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [hoveredFormIndex, setHoveredFormIndex] = useState<number | null>(null);
    const [hoveredBasicIndex, setHoveredBasicIndex] = useState<number | null>(
        null
    );

    const {droppedItems} = useSelector(
        (state: RootState) => state.formCreation
    );

    const dispatch = useDispatch();
    const {formElements, basicElements} = useSelector(
        (state: RootState) => state.formCreation
    );

    const handleDragStart = (e: React.DragEvent, item: { id: string }) => {
        e.dataTransfer.setData("text/plain", item.id);
    };
    const handleDoubleClick = (item: Element) => {
        const newItem = {
            ...item,
            id: uuidv4(),
            colSpan: item.colSpan || 1,
            rowSpan: item.rowSpan || 1,
        };
        const dropIndex = droppedItems.findIndex(
            (droppedItem: any) => droppedItem.id === item.id
        );
        if (dropIndex !== -1) {
            const updatedItems = [
                ...droppedItems.slice(0, dropIndex + 1),
                newItem,
                ...droppedItems.slice(dropIndex + 1),
            ];
            dispatch(updateItemsOrder(updatedItems));
        } else {
            dispatch(addItem(newItem));
        }
    };
    return (
        <section
            className={`h-[100vh] relative transition-all duration-700 ease-in-out ${
                isCollapsed ? "left-[2.5%]" : "left-[2.5%] w-[220px]"
            }`}
        >
            <section
                className={`bg-[#F9F9F9] h-full text-left overflow-x-hidden transition-all duration-700 ease-in-out rounded-[24px] py-3 ${
                    isCollapsed ? "w-[60px]" : "w-[220px]"
                }`}
            >
                <div>
                    <h3
                        className={`px-6 text-[16px] font-bold whitespace-nowrap text-textColor pb-5 mt-4 mb-4 ${
                            isCollapsed ? "hidden" : "block"
                        }`}
                    >
                        Form Elements
                    </h3>
                    <div className="mt-3 flex flex-col gap-1">
                        <div className="flex px-4 flex-col items-center gap-2">
                            {formElements?.map((e: any, index: any) => (
                                <div
                                    key={e.id}
                                    draggable
                                    onDragStart={(event) => handleDragStart(event, e)}
                                    onDoubleClick={() => handleDoubleClick(e)}
                                    onMouseEnter={() => setHoveredFormIndex(index)}
                                    onMouseLeave={() => setHoveredFormIndex(null)}
                                    className={`cursor-pointer text-[14px] rounded-lg min-w-full pl-3 whitespace-nowrap pr-3 py-3 mx-1 text-left leading-[16px] h-[39px] font-normal text-textColor flex items-center gap-2 ${
                                        hoveredFormIndex === index ? "active_sidebar_item" : ""
                                    } transition-all duration-700 ease-in-out`}
                                >
                  <span className="w-[24px]">
                    {/* <ReactSVG src={e.icon} />  */}
                    {/* <img src={e.icon} alt={e.langValue}/> */}
                    {e.icon}
                  </span>
                                    <span
                                        className={`${isCollapsed ? "hidden" : "inline-block"}`}
                                    >
                    {e.langValue}
                  </span>
                                </div>
                            ))}
                        </div>
                        <div className="flex px-4 flex-col items-center gap-2">
                            {basicElements?.map((e: any, index: any) => (
                                <div
                                    key={e.id}
                                    draggable
                                    onDragStart={(event) => handleDragStart(event, e)}
                                    onMouseEnter={() => setHoveredBasicIndex(index)}
                                    onDoubleClick={() => handleDoubleClick(e)}
                                    onMouseLeave={() => setHoveredBasicIndex(null)}
                                    className={`cursor-pointer text-[14px] transition-all duration-700 ease-in-out rounded-lg min-w-full pl-3 whitespace-nowrap pr-3 py-3 mx-1 text-left leading-[16px] h-[39px] font-normal text-textColor flex items-center gap-2 ${
                                        hoveredBasicIndex === index ? "active_sidebar_item" : ""
                                    }`}
                                >
                  <span className="w-[24px]">
                    {/* <img src={e.icon} alt={e.langValue}/> */}
                    {/* <ReactSVG src={e.icon} />  */}
                    {e.icon}
                  </span>
                                    <span
                                        className={`${isCollapsed ? "hidden" : "inline-block"}`}
                                    >
                    {e.langValue}
                  </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    setIsCollapsed(!isCollapsed);
                }}
                className={`absolute ${
                    isCollapsed ? "top-[3px] right-[20px]" : "top-[25px] right-[12px]"
                } border w-[25px] h-[25px] border-[#E2E2E2] flex items-center justify-center rounded-full p-2 bg-white main-shadow transition-all duration-1000`}
            >
                {/* <ReactSVG src={Icons.path} />  */}
                {/* <img
                    src={Icons.path}
                    alt="path"
                    className="transition-all duration-700 ease-in-out"
                /> */}
                <Path />
            </button>
        </section>
    );
}
