import React from "react";
import useTitle from "../../hook/useTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <div className="md:w-[1200px] mx-auto">
      <h2 className="text-5xl text-gray-500 font-extrabold my-24 text-center">
        Question Ans.
      </h2>
      <div className="grid md:grid-cols-2 gap-2 mx-7">
        <div className="border border-secondary shadow p-5 ">
          <h4 className="font-bold">
            1. What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h4>
          <p>
            <span className="font-semibold">What is Access Token?</span> <br />{" "}
            Access tokens are credentials used to access protected resources .
            Access tokens are used as bearer tokens. A bearer token means that
            the bearer (who holds the access token) can access authorized
            resources without further identification. These tokens usually have
            a short lifespan for security purpose. When it expires, the user
            must authenticate again to get a new access token limiting the
            exposure of the fact that it is a bearer token. Access token must
            never be used for authentication. Access tokens cannot tell if the
            user has authenticated. The only user information the access token
            processes is the user id, located in sub claims. The application
            receives an access token after a user successfully authenticates and
            authorizes access. Itis usually in JWT format but do not have to be.{" "}
            <br />
            <span className="font-semibold">What is Refresh token?</span>
            <br /> This token is a long-lived token compared to the access token
            and is used to request a new access token in cases where it is
            expired. It can be considered as credentials used to obtain access
            tokens. It&#39;s allowed for long-lived access and highly
            confidential. Refresh tokens can be used for grant types –
            authorization code and password credentials grant. Refresh tokens
            are intended for use only with authorization servers and are never
            sent to resource servers. Store it in local browser storage. As
            described in the previous link it has some risks. Store it in a
            cookie in client side, it can be safer than local browser storage.
            Don&#39;t store the token but store username and password in the
            browser or client-side cookie, and then retrieve a new token by
            sending credentials silently. Use a client side javascript library
            like https://github.com/IdentityModel/oidc-token-manager to rely on
            its token management features. By default it stores the retrieved
            token in localStorage (available throughout all the tabs) and it can
            be configured with silent_renew:true so that it automatically
            refreshes the token prior to its expiration using an iframe (without
            explicit browser redirection).
          </p>
        </div>
        <div className="border border-secondary p-5">
          <h4 className="font-bold">2. Compare SQL and NoSQL databases?</h4>
          <p>
            <span className="font-semibold">SQL :</span>
            <br /> Databases are categorized as Relational Database Management
            System (RDBMS). SQL databases have fixed or static or predefined
            schema.SQL databases display data in form of tables so it is known
            as table-based database.SQL databases are vertically scalableSQL
            databases use a powerful language "Structured Query Language" to
            define and manipulate the data. <br />{" "}
            <span className="font-semibold">noSQL</span>: <br /> NoSQL databases
            are categorized as Non-relational or distributed database
            system.NoSQL databases have dynamic schema.NoSQL databases display
            data as collection of key-value pair, documents, graph databases or
            wide-column stores.NoSQL databases are horizontally scalable.In
            NoSQL databases, collection of documents are used to query the data.
            It is also called unstructured query language. It varies from
            database to database.
          </p>
        </div>
        <div className="border border-secondary p-5">
          <h4 className="font-bold">3. What is express js? What is Nest JS </h4>
          <p>
            <span className="font-semibold">What is NestJS?</span> <br /> NestJS
            is a Node.js framework for building server-side applications. It is
            based on TypeScript and JavaScript. This framework is inspired by
            Angular, so most of what you find in Angular can also be found in
            Nest, including providers, middleware, components, and services.{" "}
            <br /> <span className="font-semibold">What is Express.js?</span>{" "}
            <br /> Express is a Node.js web application framework that provides
            a wide range of functionality for constructing web and mobile
            applications. It is a layer built on top of Node that aids in the
            management of servers and routes. we can use Express with Node to
            create single-page, multi-page, or hybrid web applications
          </p>
        </div>
        <div className="border border-secondary p-5">
          <h4 className="font-bold">
            4. What is MongoDB aggregate and how does it work{" "}
          </h4>
          <p>
            MongoDB Aggregation uses an aggregate() method to perform the
            aggregation operations. Basically, this aggregation operation
            practices data records and provides calculated results. The
            aggregation operations assemble values from various documents
            together and are able to execute a range of operations, such as
            average, sum, maximum, minimum, etc., on the assembled data to
            provide only a result. A corresponding of MongoDB Aggregation in SQL
            is count(*) and with the group by. MongoDB Aggregation is identical
            to the aggregate function provided in SQL. MongoDB supports three
            techniques to execute aggregation operations: Single-purpose
            aggregation - Aggregation pipeline - Map-reduce function
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
