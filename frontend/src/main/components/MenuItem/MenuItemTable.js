import OurTable, { ButtonColumn } from "main/components/OurTable";
import { useBackendMutation } from "main/utils/useBackend";
import { onDeleteSuccess } from "main/utils/UCSBDateUtils";
// import { useNavigate } from "react-router-dom";
import { hasRole } from "main/utils/currentUser";

export function cellToAxiosParamsDelete(cell) {
  return {
    url: "/api/ucsbdiningcommonsmenuitem",
    method: "DELETE",
    params: {
      id: cell.row.values.id,
    },
  };
}

export default function MenuItemTable({ menuitem, currentUser }) {
  // const navigate = useNavigate();

  // const editCallback = (cell) => {
  //     navigate(`/reviews/edit/${cell.row.values.id}`)
  // }

  // Stryker disable all : hard to test for query caching
  const deleteMutation = useBackendMutation(
    cellToAxiosParamsDelete,
    { onSuccess: onDeleteSuccess },
    ["/api/ucsbdiningcommonsmenuitem/all"]
  );
  // Stryker enable all

  // Stryker disable next-line all : TODO try to make a good test for this
  const deleteCallback = async (cell) => {
    deleteMutation.mutate(cell);
  };

  const columns = [
    {
        Header: 'ID',
        accessor: 'id', 
    },
    {
        Header: 'Dining Commons Code',
        accessor: 'diningCommonsCode',
    },
    {
        Header: 'Name',
        accessor: 'name',
    },
    {
        Header: 'Station',
        accessor: 'station',
    }
    ];

  // const testid = "ArticlesTable"
  const columnsIfAdmin = [
    ...columns,
    // ButtonColumn("Edit", "primary", editCallback, "ReviewsTable"),
    ButtonColumn("Delete", "danger", deleteCallback, "MenuItemTable"),
  ];

  const columnsToDisplay = hasRole(currentUser, "ROLE_ADMIN")
    ? columnsIfAdmin
    : columns;

return <OurTable
    data={menuitem}
    columns={columnsToDisplay}
    testid={MenuItemTable}
    />;
};
