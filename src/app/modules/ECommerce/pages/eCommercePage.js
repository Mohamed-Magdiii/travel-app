import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import { ProductsPage } from "./products/ProductsPage";
import { CoversPage } from "./covers/CoversPage";
import { CustomersPage } from "./customers/CustomersPage";
import { CustomerEdit } from "./customers/EditCustomer/CustomerEdit";
import { CoverEdit } from "./covers/EditCover/CoverEdit";
import { ProductEdit } from "./products/product-edit/ProductEdit";
import { LayoutSplashScreen, ContentRoute } from "../../../../_metronic/layout";

export default function eCommercePage() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from eCommerce root URL to /customers */
          <Redirect exact={true} from="/setup" to="/setup/products" />
        }
        {/* <ContentRoute path="/e-commerce/customers" component={CustomersPage} /> */}
        <ContentRoute path="/setup/products/new" component={ProductEdit} />
        <ContentRoute path="/setup/products/:id/edit" component={ProductEdit} />
        <ContentRoute path="/setup/products" component={ProductsPage} />
      
        <ContentRoute path="/setup/covers/:id/edit" component={CoverEdit} />
        <ContentRoute path="/setup/covers/new" component={CoverEdit} />
        <ContentRoute path="/setup/covers" component={CoversPage} />

        <ContentRoute
          path="/setup/customers/:id/edit"
          component={CustomerEdit}
        />
        <ContentRoute path="/setup/customers/new" component={CustomerEdit} />
        <ContentRoute path="/setup/customers" component={CustomersPage} />
      </Switch>
    </Suspense>
  );
}
