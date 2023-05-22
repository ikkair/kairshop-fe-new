import React from "react";
import axios from "axios";

function ModalDelete({ dataId, setFetchState }) {
  const handleDelete = (event) => {
    // let dataId = event.target.value;
    // axios
    //   .delete(`${process.env.REACT_APP_BACKEND}/products/${dataId}`)
    //   .then(setFetchState(true));
    console.log(event.target.value);
  };
  return (
    <>
      <button
        className="btn btn-danger rounded-pill"
        data-bs-toggle="modal"
        data-bs-target="#addressModal"
      >
        Delete
      </button>
      <div
        className="modal fade"
        id="addressModal"
        tabIndex={-1}
        aria-labelledby="addressModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              {/* <h4>Are you sure?</h4> */}
              <h4>{dataId}</h4>
            </div>
            <div className="modal-body d-flex flex-column gap-3">
              <button
                className="btn btn-danger"
                value={dataId}
                onClick={() => {
                  setFetchState(true);
                  handleDelete();
                }}
                data-bs-dismiss="modal"
              >
                Yes
              </button>
              <button className="btn btn-success" data-bs-dismiss="modal">
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalDelete;
