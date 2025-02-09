import React, { useState } from "react";
import { useTable } from "react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";

const AddToCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      product: "Diamond Cross",
      price: 400.0,
      quantity: 1,
      selected: true,
    },
    {
      id: 1,
      product: "Diamond Cross",
      price: 400.0,
      quantity: 1,
      selected: true,
    },
    {
      id: 1,
      product: "Diamond Cross",
      price: 400.0,
      quantity: 1,
      selected: true,
    },
    {
      id: 1,
      product: "Diamond Cross",
      price: 400.0,
      quantity: 1,
      selected: true,
    },
    // Add more items as needed
  ]);

  const columns = React.useMemo(
    () => [
      { Header: "Product", accessor: "product" },
      { Header: "Price", accessor: "price" },
      { Header: "Quantity", accessor: "quantity" },
      { Header: "Selected", accessor: "selected" },
      {
        Header: "Action",
        accessor: "action",
        Cell: ({ row }) => (
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleRemoveItem(row.original.id)}
          >
            Remove
          </Button>
        ),
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: cartItems });

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <TableContainer component={Paper}>
        <Table {...getTableProps()}>
          <TableHead>
            {headerGroups.map((headerGroup) => (
              <TableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <TableCell {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <TableRow {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <TableCell {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ marginTop: "20px" }}>
        <strong>Total Price: ${totalPrice.toFixed(2)}</strong>
      </div>
      <Button
        variant="contained"
        color="secondary"
        style={{ marginTop: "20px" }}
        onClick={() => alert("Proceed to checkout")}
      >
        Proceed to Checkout
      </Button>
    </div>
  );
};

export default AddToCart;
