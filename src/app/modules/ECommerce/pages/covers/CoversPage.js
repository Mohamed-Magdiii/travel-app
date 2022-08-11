import React from "react";
import { Route } from "react-router-dom";
// import { ProductsLoadingDialog } from "./products-loading-dialog/ProductsLoadingDialog";
// import { ProductDeleteDialog } from "./product-delete-dialog/ProductDeleteDialog";
// import { ProductsDeleteDialog } from "./products-delete-dialog/ProductsDeleteDialog";
// import { ProductsFetchDialog } from "./products-fetch-dialog/ProductsFetchDialog";
// import { ProductsUpdateStatusDialog } from "./products-update-status-dialog/ProductsUpdateStatusDialog";
import { CoversCard } from "./CoversCard";
import { CoversUIProvider } from "./CoversUIContext"; //done

export function CoversPage({ history }) {
  const CoversUIEvents = {
    newCoverButtonClick: () => {
      history.push("/setup/covers/new");
    },
    openEditCoverPage: (id) => {
      history.push(`/setup/covers/${id}/edit`);
    },
    openDeleteCoverDialog: (id) => {
      history.push(`/setup/covers/${id}/delete`);
    },
    openDeleteCoversDialog: () => {
      history.push(`/setup/covers/deleteProducts`);
    },
    openFetchCoversDialog: () => {
      history.push(`/setup/covers/fetch`);
    },
    openUpdateCoversStatusDialog: () => {
      history.push("/setup/covers/updateStatus");
    },
  };

  return (
    <CoversUIProvider coversUIEvents={CoversUIEvents}>
      {/* <ProductsLoadingDialog /> */}
      {/* <Route path="/setup/covers/deleteProducts">
        {({ history, match }) => (
          <ProductsDeleteDialog
            show={match != null}
            onHide={() => {
              history.push("/setup/covers");
            }}
          />
        )}
      </Route> */}
      {/* <Route path="/setup/covers/:id/delete">
        {({ history, match }) => (
          <ProductDeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/setup/covers");
            }}
          />
        )}
      </Route> */}
      {/* <Route path="/setup/covers/fetch">
        {({ history, match }) => (
          <ProductsFetchDialog
            show={match != null}
            onHide={() => {
              history.push("/setup/covers");
            }}
          />
        )}
      </Route> */}
      {/* <Route path="/setup/covers/updateStatus">
        {({ history, match }) => (
          <ProductsUpdateStatusDialog
            show={match != null}
            onHide={() => {
              history.push("/setup/covers");
            }}
          />
        )}
      </Route> */}
      <CoversCard />
    </CoversUIProvider>
  );
}
