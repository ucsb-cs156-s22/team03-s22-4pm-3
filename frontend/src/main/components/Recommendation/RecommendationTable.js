import OurTable, {ButtonColumn} from "main/components/OurTable";
import { useBackendMutation } from "main/utils/useBackend";
import { onDeleteSuccess } from "main/utils/UCSBDateUtils"
// import { useNavigate } from "react-router-dom";
import { hasRole } from "main/utils/currentUser";

export function cellToAxiosParamsDelete(cell) {
    return {
        url: "/api/Recommendation",
        method: "DELETE",
        params: {
            id: cell.row.values.id
        }
    }
}


export default function RecommendationTable({ recommendation, currentUser }) {

    // const navigate = useNavigate();

    // const editCallback = (cell) => {
    //     navigate(`/ucsbdates/edit/${cell.row.values.id}`)
    // }



    // Stryker disable all : hard to test for query caching
    const deleteMutation = useBackendMutation(
        cellToAxiosParamsDelete,
        { onSuccess: onDeleteSuccess },
        ["/api/Recommendation/all"]
    );
    // Stryker enable all 

    // Stryker disable next-line all : TODO try to make a good test for this
    const deleteCallback = async (cell) => { deleteMutation.mutate(cell); }

    // "dateNeeded": "2022-05-18T09:21:58",
    // "dateRequested": "2022-05-18T09:21:58.686Z",
    // "done": true,
    // "explanation": "string",
    // "id": 0,
    // "professorEmail": "string",
    // "requesterEmail": "string"

    const columns = [
        {
            Header: 'ID:',
            accessor: 'id', // accessor is the "key" in the data
        },
        {
            Header: 'Date Needed?',
            accessor: 'dateNeeded', // accessor is the "key" in the data
        },
        {
            Header: 'Date Requested?',
            accessor: 'dateRequested',
        },
        {
            Header: 'Done?',
            accessor: 'done',
            accessor: (row, _rowIndex) => String(row.done) // hack needed for boolean values to show up
        },
        {
            Header: 'Explanation?',
            accessor: 'explanation',
        },
        {
            Header: 'Professor Email?',
            accessor: 'professorEmail',
        },
        {
            Header: 'Requester Email?',
            accessor: 'requesterEmail',
        }
    ];

    const columnsIfAdmin = [
        ...columns,
        // ButtonColumn("Edit", "primary", editCallback, "RecommendationTable"),
        ButtonColumn("Delete", "danger", deleteCallback, "RecommendationTable")
    ];

    const columnsToDisplay = hasRole(currentUser, "ROLE_ADMIN") ? columnsIfAdmin : columns;
    // const columnsToDisplay = columns;

    return <OurTable
        data={recommendation}
        columns={columnsToDisplay}
        testid={"RecommendationTable"}
    />;
};