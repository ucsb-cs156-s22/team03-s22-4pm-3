import React from 'react';

import MenuItemTable from "main/components/MenuItem/MenuItemTable";
import { MenuItemFixtures } from 'fixtures/MenuItemFixtures';

export default {
    title: 'components/MenuItem/MenuItemTable',
    component: MenuItemTable
};

const Template = (args) => {
    return (
        <MenuItemTable {...args} />
    )
};

export const Empty = Template.bind({});

Empty.args = {
    MenuItems: []
};

export const ThreeMenuItems = Template.bind({});

ThreeMenuItems.args = {
    MenuItems: MenuItemFixtures.threeMenuItems
};