import React from "react";

import OrganizationsTable from "main/components/Organizations/OrganizationsTable";
import { organizationsFixtures } from "fixtures/organizationsFixtures";

export default {
  title: "components/Organizations/OrganizationsTable",
  component: OrganizationsTable,
};

const Template = (args) => {
  return <OrganizationsTable {...args} />;
};

export const Empty = Template.bind({});

Empty.args = {
  orgs: [],
};

export const ThreeOrgs = Template.bind({});

ThreeOrgs.args = {
  orgs: organizationsFixtures.threeOrgs,
};
