// import { Button, Form } from 'react-bootstrap';
// import { useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';

// function OrganizationsForm({ org, submitAction, buttonLabel="Create" }) {

//     // Stryker disable all
//     const {
//         register,
//         formState: { errors },
//         handleSubmit,
//     } = useForm(
//         { defaultValues: org || {}, }
//     );
//     // Stryker enable all

//     const navigate = useNavigate();

//     // For explanation, see: https://stackoverflow.com/questions/3143070/javascript-regex-iso-datetime
//     // Note that even this complex regex may still need some tweaks

//     // Stryker disable next-line Regex
//     const isodate_regex = /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+)|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d)|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d)/i;

//     // Stryker disable next-line all
//     // const yyyyq_regex = /((19)|(20))\d{2}[1-4]/i; // Accepts from 1900-2099 followed by 1-4.  Close enough.

//     return (

//         <Form onSubmit={handleSubmit(submitAction)}>

//             {org && (
//                 <Form.Group className="mb-3" >
//                     <Form.Label htmlFor="orgCode">Orgnanization Code</Form.Label>
//                     <Form.Control
//                         data-testid="OrganizationForm-orgCode"
//                         id="orgCode"
//                         type="text"
//                         {...register("id")}
//                         value={org.id}
//                         disabled
//                     />
//                 </Form.Group>
//             )}

//             <Form.Group className="mb-3" >
//                 <Form.Label htmlFor="orgTranslationShort">Short Translation of Organization</Form.Label>
//                 <Form.Control
//                     data-testid="OrganizationsForm-orgTranslationShort"
//                     id="orgTranslationShort"
//                     type="text"
//                     isInvalid={Boolean(errors.orgTranslationShort)}
//                     {...register("orgTranslationShort", { required: true })}
//                 />
//                 <Form.Control.Feedback type="invalid">
//                     {errors.orgTranslationShort && 'Short Translation of Organization is required. '}
//                 </Form.Control.Feedback>
//             </Form.Group>

//             <Form.Group className="mb-3" >
//                 <Form.Label htmlFor="orgTranslation">Full Translation</Form.Label>
//                 <Form.Control
//                     data-testid="OrganizationForm-orgTranslation"
//                     id="orgTranslation"
//                     type="text"
//                     isInvalid={Boolean(errors.orgTranslation)}
//                     {...register("orgTranslation", {
//                         required: "Full Translation is required."
//                     })}
//                 />
//             </Form.Group>

//             <Form.Group className="mb-3" >
//                 <Form.Label htmlFor="localDateTime">Date (iso format)</Form.Label>
//                 <Form.Control
//                     data-testid="UCSBDateForm-localDateTime"
//                     id="localDateTime"
//                     type="text"
//                     isInvalid={Boolean(errors.localDateTime)}
//                     {...register("localDateTime", { required: true, pattern: isodate_regex })}
//                 />
//                 <Form.Control.Feedback type="invalid">
//                     {errors.localDateTime && 'LocalDateTime is required. '}
//                     {errors.localDateTime?.type === 'pattern' && 'localDateTime must be in ISO format, e.g. 2022-01-02T15:30'}
//                 </Form.Control.Feedback>
//             </Form.Group>

//             <Button
//                 type="submit"
//                 data-testid="UCSBDateForm-submit"
//             >
//                 {buttonLabel}
//             </Button>
//             <Button
//                 variant="Secondary"
//                 onClick={() => navigate(-1)}
//                 data-testid="UCSBDateForm-cancel"
//             >
//                 Cancel
//             </Button>

//         </Form>

//     )
// }

// export default UCSBDateForm;
