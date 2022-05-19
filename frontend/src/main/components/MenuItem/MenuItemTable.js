import OurTable, { ButtonColumn } from "main/components/OurTable";
import { useBackendMutation } from "main/utils/useBackend";
import { onDeleteSuccess } from "main/utils/UCSBDateUtils";
// import { useNavigate } from "react-router-dom";
import { hasRole } from "main/utils/currentUser";

export function cellToAxiosParamsDelete(cell) {
  return {
    url: "/api/UCSBDiningCommonsMenuItem",
    method: "DELETE",
    params: {
      id: cell.row.values.id,
    },
  };
}

export default function MenuItemTable({ MenuItems, currentUser }) {
  // const navigate = useNavigate();

  // const editCallback = (cell) => {
  //     navigate(/ucsbdates/edit/${cell.row.values.id})
  // }

  // Stryker disable all : hard to test for query caching
  const deleteMutation = useBackendMutation(
    cellToAxiosParamsDelete,
    { onSuccess: onDeleteSuccess },
    ["/api/UCSBDiningCommonsMenuItem/all"]
  );
  // Stryker enable all

  // Stryker disable next-line all : TODO try to make a good test for this
  const deleteCallback = async (cell) => {
    deleteMutation.mutate(cell);
  };

  const columns = [
    {
      Header: "id",
      accessor: "id", // accessor is the "key" in the data
    },
    {
      Header: "Dining Commons Code",
      accessor: "diningCommonsCode",
    },
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Station",
      accessor: "station",
    },
  ];

  const columnsIfAdmin = [
    ...columns,
    //     ButtonColumn("Edit", "primary", editCallback, "UCSBDatesTable"),
    ButtonColumn("Delete", "danger", deleteCallback, "MenuItemTable"),
  ];

  const columnsToDisplay = hasRole(currentUser, "ROLE_ADMIN")
    ? columnsIfAdmin
    : columns;

  return (
    <OurTable
      data={MenuItems}
      columns={columnsToDisplay}
      testid={"MenuItemTable"}
    />
  );
}