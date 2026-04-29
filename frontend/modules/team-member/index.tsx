import { Image } from "@/components/atoms/image";

import { GetTeamMembersResponse } from "./api/team-member.interface";

interface Props {
  data: GetTeamMembersResponse;
}

export const TeamMembers: React.FC<Props> = ({ data }) => {
  return (
    <div className="grid-cols-1 sm:grid-cols-2 grid gap-6 xl:gap-10 lg:grid-cols-3">
      {data.data.map((x) => (
        <div key={x.name}>
          <div className="relative aspect-4/3">
            <Image
              src={x.image}
              alt={x.name}
              className="object-cover shadow-lg rounded-lg"
            />
          </div>
          <br />
          <h3 className="pb-2 text-2xl font-bold dark:text-gray-200">
            {x.name}
          </h3>
          <p className="text-sm font-semibold text-primary">{x.position}</p>
          <div className="py-4 text-gray-500 dark:text-gray-300">
            <p className="text-sm leading-relaxed whitespace-pre-line">
              {x.bio}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
