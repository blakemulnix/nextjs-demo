import Link from "next/link";
import { gql } from "graphql-tag";
import GithubGraphQLClient from "../auth/GithubGraphQLClient";

const GET_REPOSITORIES = gql`
  query {
    viewer {
      repositories(first: 15, orderBy: { field: UPDATED_AT, direction: DESC }) {
        nodes {
          name
          description
          url
          languages(first: 15) {
            nodes {
              name
            }
          }
        }
      }
    }
  }
`;

const tableCellClasses = "px-2 py-1 text-left min-w-[10rem]";

const RepositoryTableCell = ({
  content,
  isLink = false,
}: {
  content: string;
  isLink?: boolean;
}) => {
  const cellContent = isLink ? (
    <div className="flex w-full items-center justify-center">
      <button className=" bg-black hover:bg-gray-800 text-white font-bold py-1 px-2 rounded border border-white transition-all duration-300">
        <Link href={content}>Repo</Link>
      </button>
    </div>
  ) : (
    content
  );

  return <td className={tableCellClasses}>{cellContent}</td>;
};

const RepositoryTable: React.FC = async () => {
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  await delay(3000);

  const { data } = await GithubGraphQLClient.query({
    query: GET_REPOSITORIES,
  });

  return (
    <table className="min-w-full">
      <thead>
        <tr>
          <th className={tableCellClasses}>Name</th>
          <th className={tableCellClasses}>Description</th>
          <th className={`text-center ${tableCellClasses}`}>Repository URL</th>
          <th className={tableCellClasses}>Languages</th>
        </tr>
      </thead>
      <tbody>
        {data.viewer.repositories.nodes.map((repository: any) => (
          <tr key={repository.name}>
            <RepositoryTableCell content={repository.name} />
            <RepositoryTableCell content={repository.description} />
            <RepositoryTableCell content={repository.url} isLink />
            <RepositoryTableCell
              content={repository.languages.nodes
                .map((language: any) => language.name)
                .join(", ")}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RepositoryTable;
