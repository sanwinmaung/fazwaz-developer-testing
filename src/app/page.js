"use client";

import { gql, useQuery, ApolloProvider } from "@apollo/client";
import client from "../../lib/apolloClient";

const PROPERTIES_QUERY = gql`
  query GetProperties {
    properties {
      id
      name
      short_title
      images {
        id
        url
      }
    }
  }
`;

function HomePage() {
  const { loading, error, data } = useQuery(PROPERTIES_QUERY, { client });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Properties New Layout</h1>
      <ul>
        {data.properties.map((property) => (
          <li key={property.id}>
            <p
              style={{
                textAlign: "center",
                fontSize: "20px",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              {property.name} - {property.short_title}
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              {property.images.map((image) => (
                <div key={image.id} style={{ margin: "10px" }}>
                  <img src={image.url} />
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <HomePage />
    </ApolloProvider>
  );
}
