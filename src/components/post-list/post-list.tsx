import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React, { useEffect } from "react";
import { api } from "../interceptor/api";
import Paper from '@mui/material/Paper';
import { InnerModel, OuterModel } from "./post-interface";
import moment from "moment";

function PostList() {
  const [data, setData] = React.useState<InnerModel[]>([]);

  function getData(): Promise<InnerModel[]> {
    return api.get('/post').then(response => (response.data as OuterModel).data as InnerModel[])
      .catch(error => error)
  }

  useEffect(() => {
    getData().then(item => setData(item));
  }, [])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>No.</TableCell>
            <TableCell>Likes</TableCell>
            <TableCell>Tags</TableCell>
            <TableCell>FirstName</TableCell>
            <TableCell>LastName</TableCell>
            <TableCell>Publish Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((item, index) => (
            <TableRow key={item.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell >{index + 1}</TableCell>
              <TableCell >{item.likes}</TableCell>
              <TableCell >{item.tags}</TableCell>
              <TableCell >{item.owner.firstName}</TableCell>
              <TableCell >{item.owner.lastName}</TableCell>
              <TableCell >{moment(item.publishDate).format('DD  MMMM, YYYY')}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default PostList;