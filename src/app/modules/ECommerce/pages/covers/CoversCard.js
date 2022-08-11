import React, {useMemo} from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../../../_metronic/_partials/controls";
import { ProductsFilter } from "./products-filter/ProductsFilter";
import { ProductsTable } from "./products-table/ProductsTable";
import { useCoversUIContext } from "./CoversUIContext";

export function CoversCard() {
  const coversUIContext = useCoversUIContext();
  const coversUIProps = useMemo(() => {
    return {
      ids: coversUIContext.ids,
      queryParams: coversUIContext.queryParams,
      setQueryParams: coversUIContext.setQueryParams,
      newCoverButtonClick: coversUIContext.newCoverButtonClick,
      openDeleteCoversDialog: coversUIContext.openDeleteCoversDialog,
      openEditCoverPage: coversUIContext.openEditCoverPage,
      openUpdateCoversStatusDialog:
        coversUIContext.openUpdateCoversStatusDialog,
      openFetchCoversDialog: coversUIContext.openFetchCoversDialog,
    };
  }, [coversUIContext]);

  return (
    <Card>
      <CardHeader title="Covers list">
        <CardHeaderToolbar>
          <button
            type="button"
            className="btn btn-primary"
            onClick={coversUIProps.newCoverButtonClick}
          >
            Add Cover
          </button>
        </CardHeaderToolbar>
      </CardHeader>
      <CardBody>
        {/* <ProductsFilter /> */}
        {/* {coversUIProps.ids.length > 0 && (
          <>
            <ProductsGrouping />
          </>
        )} */}
        <ProductsTable />
      </CardBody>
    </Card>
  );
}
