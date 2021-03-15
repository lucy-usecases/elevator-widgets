import * as React from "react";
import { registerWidget, registerLink, registerUI, IContextProvider, } from './uxp';
import { DataList, WidgetWrapper, TitleBar, ItemListCard, FilterPanel, DataGrid, ItemCard, FormField, Label, Select, Input, DateRangePicker, DatePicker, Checkbox, ProfileImage, Popover, TrendChartComponent, ToggleFilter } from "uxp/components";
import './styles.scss';

interface IWidgetProps {
    uxpContext?: IContextProvider
}

const Lift_widgetWidget: React.FunctionComponent<IWidgetProps> = (props) => {

    let [selected, setSelected] = React.useState<string | null>("op-24");

    const GridData = [
        {
            icon: "https://static.iviva.com/images/lift_widget/lift-service.svg",
            title: <h3>90%</h3>,  
            subTitle: "% of lifts in service"
        },
        {
            icon: "https://static.iviva.com/images/lift_widget/waiting-time.svg",
            // name: "Udhaya Kumar",
            title: <h3>00:32</h3>,  
            subTitle: " Average waiting time"
        },
        {
            icon: "https://static.iviva.com/images/lift_widget/pop-floor.svg",
            title: <h3>Floor 12</h3>,
            subTitle: "Most popular floor"  
        },
        {
            icon: "https://static.iviva.com/images/lift_widget/run-hour.svg",
            title: <h3>104</h3>,
            subTitle: "Lift run hours"  
        }  
    ]  

    const renderGridItem = (item: any, key: number) => {
        return (<ItemCard
            item={item}
            imageField="icon"
            titleField="title"
            subTitleField="subTitle"
            nameField="name"
        />)
    }

    return (
        <WidgetWrapper className="lift_widget lift_widget-details"> 
         <TitleBar title="">   </TitleBar> 
 
         <div className="lift_widget_lft"> 
                    <div className="uti-sel-boxes">
                        <div className="uti-sel-box">
                            <FormField inline className="showcase-input">
                            <Select
                                    selected={selected}
                                    options={[
                                        { label: "01 hour",  value: "op-1" },
                                        { label: "02 hours", value: "op-2" },
                                        { label: "03 hours", value: "op-3" },
                                        { label: "04 hours", value: "op-4" },
                                        { label: "05 hours", value: "op-5" },
                                        { label: "06 hours", value: "op-6" },
                                        { label: "07 hours", value: "op-7" },
                                        { label: "08 hours", value: "op-8" },
                                        { label: "09 hours", value: "op-9" },
                                        { label: "10 hours", value: "op-10" },
                                        { label: "11 hours", value: "op-11" },
                                        { label: "12 hours", value: "op-12" },
                                        { label: "13 hours", value: "op-13" },
                                        { label: "14 hours", value: "op-14" },
                                        { label: "15 hours", value: "op-15" },
                                        { label: "16 hours", value: "op-16" },
                                        { label: "17 hours", value: "op-17" },
                                        { label: "18 hours", value: "op-18" },
                                        { label: "19 hours", value: "op-19" },
                                        { label: "20 hours", value: "op-20" },
                                        { label: "21 hours", value: "op-21" },
                                        { label: "22 hours", value: "op-22" },
                                        { label: "23 hours", value: "op-23" },
                                        { label: "24 hours", value: "op-24" }
                                    ]}
                                    onChange={(value) => { setSelected(value) }}
                                    placeholder=" -- select --"
                                />
                            </FormField>
                        </div> 
                    </div> 
                </div>


                <div className="lift_widget_rht">
                    <div className="block_building">
                        <Label>LEVEL - 2, BUILDING 1</Label> 
                    </div>
                </div>

                <div className="lift_details" >
                    <DataGrid
                        data={GridData}
                        renderItem={renderGridItem}
                        columns={2}
                    />
                </div>
                
            
        </WidgetWrapper>
    )
};

/**
 * Register as a Widget
 */
registerWidget({
    id: "lift_widget",
    name: "Lift_widget",
    widget: Lift_widgetWidget,
    configs: {
        layout: {
            // w: 12,
            // h: 12,
            // minH: 12,
            // minW: 12
        }
    }
});

/**
 * Register as a Sidebar Link
 */
/*
registerLink({
    id: "lift_widget",
    label: "Lift_widget",
    // click: () => alert("Hello"),
    component: Lift_widgetWidget
});
*/

/**
 * Register as a UI
 */

 /*
registerUI({
    id:"lift_widget",
    component: Lift_widgetWidget
});
*/