import useTitle from "../../Hooks/useTitle";


const Blog = () => {
    useTitle('Blog');
    return (
        <div className="grid lg:grid-cols-2 gap-5 lg:px-10 my-10">
            <div className="bg-sky-200 hover:bg-pink-200 p-5 " data-aos="fade-right"
            data-aos-duration="1000">
                <h2 className="font-bold">1.What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                <p> <span className="font-bold">Ans:</span>An access token is a credential that is used to access protected resources, such as APIs or web services. It is typically issued by an authentication server such as OAuth or OpenID Connect after a user successfully logs in or grants permission to an application. <br/>

                    On the other hand, a refresh token is a long-lived credential that is used to obtain a new access token when the current one expires. It is issued along with the access token and is meant to be stored securely by the client application.</p>
            </div>
            <div className="bg-sky-200 hover:bg-pink-200 p-5" data-aos="fade-left" data-aos-duration="1000">
                <h2 className="font-bold">2.Compare SQL and NoSQL databases?</h2>
                <p> <span className="font-bold">Ans:</span>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON</p>
            </div>
            <div className="bg-sky-200 hover:bg-pink-200 p-5" data-aos="zoom-in" data-aos-duration="1000">
                <h2 className="font-bold">3.What is express js? What is Nest JS</h2>
                <p> <span className="font-bold">Ans:</span>Express is a minimalist and flexible framework that is easy to use and has a large community of developers.<br/>
                NestJS, on the other hand, is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive CLI.</p>
            </div>
            <div className="bg-sky-200 hover:bg-pink-200 p-5" data-aos="zoom-in"
                 data-aos-duration="1000">
                <h2 className="font-bold">4.What is MongoDB aggregate and how does it work</h2>
                <p> <span className="font-bold">Ans:</span>What is Aggregation in MongoDB? Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</p>
            </div>
        </div>
    );
};

export default Blog;