import React from "react";
import "./styles.css";

class OrderInfo extends React.Component {
  render() {
    return (
      <div className="order-info flex flex-col align-items-center">
        <div className="order-info-restaurant flex-center">
          <span>رستوران خامس</span>
        </div>
        <div className="order-info-list">
          <table className="table table-hover table-bordered">
            <thead className="column-color">
              <tr>
                <th className="col-1">ردیف</th>
                <th className="col-7">نام غذا</th>
                <th className="col-2">تعداد</th>
                <th className="col-2">قیمت</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="order-info-price flex justify-content-end">
          <span>جمع کل: ۱۸۰۰۰ تومان</span>
        </div>
      </div>
    );
  }
}

export default OrderInfo;
