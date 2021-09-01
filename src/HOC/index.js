import { Route, Router, Switch } from "react-router-dom";
import Layout from "../layouts/Layout";

const HOC = ({ component: Component, ...rest }) => {
  return (
    <>
      <Route
        {...rest}
        component={(props) => (
          <Layout>
            <Component {...props} />
          </Layout>
        )}
      />
    </>
  );
};

export default HOC;
