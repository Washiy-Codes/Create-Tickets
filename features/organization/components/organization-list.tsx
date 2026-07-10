import { format } from "date-fns";
import { getOrganizationsForUser } from "../querries/get-user-organizations";

const OrganizationList = async () => {
  const organizations = await getOrganizationsForUser();

  return (
    <div className="animate-fade-from-top">
      {organizations.map((organization) => (
        <div key={organization.id} className="flex flex-col gap-y-2 p-4 border rounded-md" >
          <div>Name: {organization[1][0].name}</div>
          <div>
            &quot;Joined At:{" "}
            {format(
              organization.membershipByUser.joinedAt,
              "yyyy-MM-dd, HH:mm"
            )}
          </div>
           <div className="mt-4">{`Members: ${organization[1][0]._count?.memberships ?? 0}`}</div>
        </div>
      ))}
    </div>
  );
};

export { OrganizationList };
