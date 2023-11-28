import { createHttpLink } from '@apollo/client';
import { gql } from 'graphql-tag';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const client = new ApolloClient({
  ssrMode: true,
  link: createHttpLink({
    uri: 'https://api.github.com/graphql',
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
    },
  }),
  cache: new InMemoryCache(),
});

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

const tableCellClasses = 'px-2 py-1 text-left min-w-[10rem]';

const RepositoryTableCell = ({ content, isLink = false }: { content: string; isLink?: boolean }) => {
  const cellContent = isLink ? (
    <div className='flex w-full items-center justify-center'>
      <button className=" bg-black hover:bg-gray-800 text-white font-bold py-1 px-2 rounded border border-white transition-all duration-300">
        <Link href={content}>
          Repo
        </Link>
      </button>
    </div>

  ) : (
    content
  );

  return <td className={tableCellClasses}>{cellContent}</td>;
};

export default async function Home() {
  const { data } = await client.query({
    query: GET_REPOSITORIES,
  });

  const currentTime = new Date().toLocaleTimeString();

  return (
    <main className="flex min-h-screen flex-col p-8 items-center">
      <div className="text-3xl font-bold mb-8">Server-side Rendered Page</div>
      <div className="text-2xl font-bold mb-4">This is rendered on the server for each request</div>
      <div className="text-xl font-bold mb-4">Time when rendered</div>
      <div className="text-xl mb-8">{currentTime}</div>
      <div className="text-2xl font-bold mb-4">Blake's Most Recent GitHub Repositories:</div>
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
                content={repository.languages.nodes.map((language: any) => language.name).join(', ')}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
