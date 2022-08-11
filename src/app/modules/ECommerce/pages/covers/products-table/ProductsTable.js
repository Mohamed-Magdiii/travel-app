// React bootstrap table next =>
// DOCS: https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/
// STORYBOOK: https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/index.html
import React, { useEffect, useMemo } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
} from "react-bootstrap-table2-paginator";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../../../_redux/products/productsActions";
import * as uiHelpers from "../ProductsUIHelpers";
import {
  getSelectRow,
  getHandlerTableChange,
  NoRecordsFoundMessage,
  PleaseWaitMessage,
  sortCaret,
} from "../../../../../../_metronic/_helpers";
import * as columnFormatters from "./column-formatters";
import { Pagination } from "../../../../../../_metronic/_partials/controls";
import { useCoversUIContext } from "../CoversUIContext";

import moment from'moment'

import {fetchAllCovers}from "../actions/actions"
export function ProductsTable() {
  // Products UI Context
  const coversUIContext = useCoversUIContext();
  const coversUIProps = useMemo(() => {
  
    return {
      ids: coversUIContext.ids,
      setIds: coversUIContext.setIds,
      queryParams: coversUIContext.queryParams,
      setQueryParams: coversUIContext.setQueryParams,
      openEditCoverPage: coversUIContext.openEditCoverPage,
      openDeleteCoverDialog: coversUIContext.openDeleteCoverDialog,
    };
  }, [coversUIContext]);
  // Products Redux state
  const dispatch = useDispatch();
  const  currentState  = useSelector(
    (state) => ({ covers: state.covers }),
    shallowEqual
  );
    
  useEffect(() => {
    dispatch(fetchAllCovers())
  }, [coversUIProps.queryParams, dispatch]);
  const entities = currentState.covers?.entities
   
  // Table columns
  const columns = [
    {
      dataField: "_id",
      text: "_id",
      hidden: true,
    },
    {
      dataField: "coverType",
      text: "CoverType",
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: "coverCode",
      text: "coverCode",
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: "nameEn",
      text: "nameEn",
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: "createdAt",
      text: "Created-At",
      sort: true,
      sortCaret: sortCaret,
      formatter: (entities) => moment(entities.createdAt).format("YYYY-MM-DD")
    },
    {
      dataField: "updatedAt",
      text: "updatedAt",
      sort: true,
      sortCaret: sortCaret,
      formatter:(entities) => moment(entities.updatedAt).format("YYYY-MM-DD")
    },
    {
      dataField: "productId.nameEn",
      text: "product",
      sort: true,
      
    },
   
    {
      dataField: "action",
      text: "Actions",
      formatter: columnFormatters.ActionsColumnFormatter,
      formatExtraData: {
        openEditCoverPage: coversUIProps.openEditCoverPage,
        openDeleteCoverDialog: coversUIProps.openDeleteCoverDialog,
      },
      classes: "text-right pr-0",
      headerClasses: "text-right pr-3",
      style: {
        minWidth: "100px",
      },
    },
  ];
  // Table pagination properties
  const paginationOptions = {
    custom: true,
    totalSize: currentState.covers.count,
    sizePerPageList: uiHelpers.sizePerPageList,
    sizePerPage: coversUIProps.queryParams.pageSize,
    page: coversUIProps.queryParams.pageNumber,
  };
  return (
    <>
      {currentState.covers.loading ? "loading": (
        <PaginationProvider pagination={paginationFactory(paginationOptions)}>
        {({ paginationProps, paginationTableProps }) => {
          return (
            <Pagination
              isLoading={currentState.covers.loading}
              paginationProps={paginationProps}
            >
              <BootstrapTable
                wrapperClasses="table-responsive"
                classes="table table-head-custom table-vertical-center overflow-hidden"
                bootstrap4
                bordered={true}
                remote
                keyField="_id"
                data={currentState.covers.entities.length === 0 ? [] : entities}
                columns={columns}
                defaultSorted={uiHelpers.defaultSorted}
                onTableChange={getHandlerTableChange(
                  coversUIProps.setQueryParams
                )}
                // selectRow={getSelectRow({
                //   products:currentState.products.entities,
                //   ids: coversUIProps._id,
                //   setIds: coversUIProps.setIds,
                // })}
                {...paginationTableProps}
              >
                 <PleaseWaitMessage entities={entities} />
                <NoRecordsFoundMessage entities={entities} /> 
              </BootstrapTable>
            </Pagination>
          );
        }}
      </PaginationProvider>
      )}
    </>
  );
}
