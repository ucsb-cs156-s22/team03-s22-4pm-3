import OurTable, { ButtonColumn } from "main/components/OurTable";
import { useBackendMutation } from "main/utils/useBackend";
import { onDeleteSuccess } from "main/utils/UCSBDateUtils";
// import { useNavigate } from "react-router-dom";
import { hasRole } from "main/utils/currentUser";

export function cellToAxiosParamsDelete(cell) {
    return {
      url: "/api/ucsborganization",
      method: "DELETE",
      params: {
        orgCode: cell.row.values.orgCode,
      },
    };
  }


export default function OrganizationsTable({ orgs, currentUser }) {
  //const navigate = useNavigate();

  // const editCallback = (cell) => {
  //     navigate(`/ucsborganizations/edit/${cell.row.values.id}`)
  // }

  // Stryker disable all : hard to test for query caching
  const deleteMutation = useBackendMutation(
    cellToAxiosParamsDelete,
    { onSuccess: onDeleteSuccess },
    ["/api/ucsborganization/all"]
  );
  // Stryker enable all

  // Stryker disable next-line all : TODO try to make a good test for this
  const deleteCallback = async (cell) => {
    deleteMutation.mutate(cell);
  };

  const columns = [
    {
      Header: "Code",
      accessor: "orgCode", // accessor is the "key" in the data
    },
    {
      Header: "Short Translation of Organization",
      accessor: "orgTranslationShort",
    },
    {
      Header: "Full Translation",
      accessor: "orgTranslation",
    },
    {
      Header: "Inactive?",
      id: "inactive",
      accessor: (row, _rowIndex) => String(row.inactive), // hack needed for boolean values to show up
    },
  ];

  const columnsIfAdmin = [
    ...columns,
    // ButtonColumn("Edit", "primary", editCallback, "UCSBDatesTable"),
    ButtonColumn("Delete", "danger", deleteCallback, "OrganizationsTable"),
  ];

    //const navigate = useNavigate();

    // const editCallback = (cell) => {
    //     navigate(`/ucsborganizations/edit/${cell.row.values.id}`)
    // }

    // Stryker disable all : hard to test for query caching
    const deleteMutation = useBackendMutation(
        cellToAxiosParamsDelete,
        { onSuccess: onDeleteSuccess },
        ["/api/ucsborganization/all"]
    );
    // Stryker enable all 

    // Stryker disable next-line all : TODO try to make a good test for this
    const deleteCallback = async (cell) => { deleteMutation.mutate(cell); }

    const columns = [
        {
            Header: 'Code',
            accessor: 'orgCode', // accessor is the "key" in the data
        },
        {
            Header: 'Short Translation of Organization',
            accessor: 'orgTranslationShort',
        },
        {
            Header: 'Full Translation',
            accessor: 'orgTranslation',
        },
        {
            Header: 'Inactive?',
            id: 'inactive',
            accessor: (row, _rowIndex) => String(row.inactive) // hack needed for boolean values to show up

        }
    ];

    const columnsIfAdmin = [
        ...columns,
        // ButtonColumn("Edit", "primary", editCallback, "UCSBDatesTable"),
        ButtonColumn("Delete", "danger", deleteCallback, "OrganizationsTable")
    ];

    const columnsToDisplay = hasRole(currentUser, "ROLE_ADMIN") ? columnsIfAdmin : columns;
    return <OurTable
        data={orgs}
        columns={columnsToDisplay}
        testid={"OrganizationsTable"}
    />;
};