/* eslint-disable no-restricted-imports */
import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
import * as actions from "../../../_redux/products/productsActions";
import { useCoversUIContext } from "../CoversUIContext";

export function ProductsDeleteDialog({ show, onHide }) {
  // Products UI Context
  const coversUIContext = useCoversUIContext();
  const coversUIProps = useMemo(() => {
    return {
      ids: coversUIContext.ids,
      setIds: coversUIContext.setIds,
      queryParams: coversUIContext.queryParams,
    };
  }, [coversUIContext]);

  // covers Redux state
  const dispatch = useDispatch();
  const { isLoading } = useSelector(
    (state) => ({ isLoading: state.covers.actionsLoading }),
    shallowEqual
  );

  // looking for loading/dispatch
  useEffect(() => {}, [isLoading, dispatch]);

  // if there weren't selected covers we should close modal
  useEffect(() => {
    if (!coversUIProps.ids || coversUIProps.ids.length === 0) {
      onHide();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coversUIProps.ids]);

  const deleteProducts = () => {
    // server request for deleting product by seleted ids
    dispatch(actions.deleteProducts(coversUIProps.ids)).then(() => {
      // refresh list after deletion
      dispatch(actions.fetchProducts(coversUIProps.queryParams)).then(() => {
        // clear selections list
        coversUIProps.setIds([]);
        // closing delete modal
        onHide();
      });
    });
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      {isLoading && <ModalProgressBar />}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Products Delete
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!isLoading && (
          <span>Are you sure to permanently delete selected products?</span>
        )}
        {isLoading && <span>Products are deleting...</span>}
      </Modal.Body>
      <Modal.Footer>
        <div>
          <button
            type="button"
            onClick={onHide}
            className="btn btn-light btn-elevate"
          >
            Cancel
          </button>
          <> </>
          <button
            type="button"
            onClick={deleteProducts}
            className="btn btn-primary btn-elevate"
          >
            Delete
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
